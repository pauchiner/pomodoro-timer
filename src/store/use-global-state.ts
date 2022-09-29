import { useState, useEffect } from "react";

export const useGlobalState = () => {
  //properties
  const [breakTime, setBreakTime] = useState(300);
  const [longBreakTime, setLongBreakTime] = useState(900);
  const [lapsesToLongBreak, setLapsesToLongBreak] = useState(4);
  const [pomodoroTime, setPomodoroTime] = useState(1500);
  //states
  const [timeLeft, setTimeLeft] = useState(pomodoroTime);
  const [route, setRoute] = useState("main");
  const [state, setState] = useState("idle");
  const [lapse, setLapse] = useState(1);
  const [type, setType] = useState("work");

  const resetTimer = () => {
    setTimeLeft(pomodoroTime)
    setState("idle")
    setType("work")
    setLapse(1)
  }

  //Timer States and logic
  useEffect(() => {
    switch (state) {
      case "idle":
        switch (type) {
          case "work":
            setTimeLeft(pomodoroTime);
            break;
          case "break":
            setTimeLeft(breakTime);
            break;
          case "longBreak":
            setTimeLeft(longBreakTime);
            break;
        }
        break;
      case "running":
        if (timeLeft <= 0) setState("finished");
        else setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        break;
      case "finished":
        setState("idle");
        if (type === "longBreak" && timeLeft <= 0) {
          setLapse(1);
          setType("work");
          break;
        }
        if (lapse === lapsesToLongBreak && type === "work") {
          setType("longBreak")
          break;
        }
        if (type === "break" && timeLeft <= 0) {
          setType("work")
          break;
        }
        if (type === "work" && timeLeft <= 0) {
          setLapse(lapse + 1);
          setType("break");
          break;
        }
    }
  }, [timeLeft, state, lapse, setState, setLapse, setTimeLeft, type, lapsesToLongBreak, pomodoroTime, breakTime, longBreakTime]);

  return {
    resetTimer,
    timeLeft,
    setTimeLeft,
    state,
    setState,
    route,
    setRoute,
    lapse,
    setLapse,
    type,
    setType,
    lapsesToLongBreak,
    setLapsesToLongBreak,
    pomodoroTime,
    setPomodoroTime,
    breakTime,
    setBreakTime,
    longBreakTime,
    setLongBreakTime,
  };
};
