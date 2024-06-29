import React from "react";
import Toggle from "./toggle/Toggle";
import ConditionalRendering from "./conditionalrendering/ConditionalRendering";
import Dropdown from "./dropdown/Dropdown";
import SpeechRecognition from "./speechRecognition/SpeechRecognition";

export default function App() {
    return (
        <div>
            {/* <Toggle />
      <ConditionalRendering />
      <Dropdown /> */}
            <SpeechRecognition />
        </div>
    );
}
