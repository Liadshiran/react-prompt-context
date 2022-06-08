import React, { useContext, useEffect, useState } from "react";
import { Modal, TextInput, Button } from ".";
import { PromptContext } from "../PromptContext";

export const Prompt = () => {
  const [prompt, setPrompt] = useContext(PromptContext);
  const [input, setInput] = useState("");
  const {
    isOpen,
    props: { text, title, value, isInput, onSubmit }
  } = prompt;

  const closePrompt = () => setPrompt({ ...prompt, isOpen: false });
  useEffect(() => {
    value && setInput(value);
  }, [isOpen, value]);

  return (
    <Modal isOpen={isOpen}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <span>{text}</span>
        {isInput && (
          <TextInput
            onChange={(e: any) => setInput(e.target.value)}
            value={input}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onSubmit(input);
            closePrompt();
          }}
        >
          submit
        </Button>
        <Button onClick={closePrompt}>cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};
