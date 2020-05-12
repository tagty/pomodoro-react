import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, TextArea, Form } from "semantic-ui-react";
import moment from "moment";
import styled from "styled-components";

const goal = 25 * 60;

export default () => {
  const [counting, setCounting] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (goal <= count) {
      alert("Finish!");
    } else {
      counting &&
        setTimeout(() => {
          setCount(count + 1);
        }, 1000);
    }
  });

  const time = moment(
    moment.duration((goal - count) * 1000).asMilliseconds()
  ).format("mm:ss");

  return (
    <Container>
      <main>{time}</main>
      <div>
        <Button
          onClick={() => {
            setCounting(true);
          }}
          disabled={counting}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            setCounting(false);
          }}
          disabled={!counting}
        >
          Stop
        </Button>
        <Button
          onClick={() => {
            setCounting(false);
            setCount(0);
          }}
          disabled={counting}
        >
          Pomodoro
        </Button>
      </div>
      <Form>
        <TextArea rows={25} placeholder="Todo ..." />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 50px 400px;

  main {
    font-size: 60px;
    line-height: normal;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 15px;
  }
`;
