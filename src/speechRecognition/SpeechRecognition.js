import React, { useState } from "react";
import "./SpeechRecognition.css";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = () => {
    const [active, setActive] = useState("filled");

    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "hi" });
        setActive("filled");
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setActive("active");
    };

    return (
        <div>
            <h1>Speech to Text Translation</h1>
            {/* <button onClick={startListening}>Start listening</button> */}
            {/* <button onClick={stopListening}>Stop listening</button> */}

            <div
                style={{
                    display: "flex",
                    margin: "2rem 0",
                    padding: "1rem",
                    // justifyContent: "center",
                    alignItems: "center",
                }}>
                {active === "filled" && (
                    <img
                        src="../assets/mp_fill.png"
                        alt="mp-filled"
                        className="mp-image"
                        onClick={stopListening}
                    />
                )}

                {active === "active" && (
                    <img
                        src="../assets/mp_active.jpg"
                        alt="mp-filled"
                        className="mp-image2"
                        onClick={startListening}
                    />
                )}
                <button onClick={resetTranscript}>Reset</button>
            </div>

            <p>{listening ? " Listening..." : "Not listening"}</p>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;
