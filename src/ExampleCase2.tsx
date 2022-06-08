import React, { useState } from "react";
import { usePrompt } from "./customHooks";
import { Button, ItemsList } from "./components";

export const AnotherScreen = () => {
  const [items, setItems] = useState<string[]>(["a", "b", "c"]);
  const { triggerPrompt } = usePrompt();

  const onClick = () => {
    triggerPrompt({
      title: "New Item",
      text: "Enter item title:",
      isInput: true,
      onSubmit: (title: string) => setItems([...items, title])
    });
  };
  return (
    <div>
      <ItemsList items={items} />
      <Button onClick={onClick}>{"add new item"}</Button>
    </div>
  );
};
