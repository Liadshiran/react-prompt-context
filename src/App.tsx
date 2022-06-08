import "./styles.css";
import { PromptContextProvider } from "./PromptContext";
import { Prompt } from "./components";
import { SomeScreen } from "./ExampleCase1";
import { AnotherScreen } from "./ExampleCase2";

const AppContent = () => (
  <div className="App">
    <SomeScreen />
    <AnotherScreen />
  </div>
);

export default function App() {
  return (
    <PromptContextProvider>
      <Prompt />
      <AppContent />
    </PromptContextProvider>
  );
}
