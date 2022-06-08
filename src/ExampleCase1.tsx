import React from "react";
import { Button } from "./components";
import { useSomeAction, usePrompt } from "./customHooks";

export const SomeScreen = () => {
  const { doAction } = useSomeAction();
  const { triggerPrompt } = usePrompt();

  const onClick = () => {
    triggerPrompt({
      title: "Warning",
      text: "You cannot undo this action",
      isInput: false,
      onSubmit: doAction
    });
  };
  return (
    <div>
      <Button onClick={onClick}>{"do some action"}</Button>
    </div>
  );
};
