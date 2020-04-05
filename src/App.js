import React, { useState, useEffect } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import moment from "moment";

export default () => {
  const [counting, setCounting] = useState(false);
  const [goal, setGoal] = useState(25 * 60);
  const [count, setCount] = useState(0);

  useEffect(() => {
    counting &&
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
  });

  const display = moment(
    moment.duration((goal - count) * 1000).asMilliseconds()
  ).format("mm:ss");

  return (
    <>
      <div>{display}</div>
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
    </>
  );
};
