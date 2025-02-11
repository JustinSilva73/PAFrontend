import React, { useState, useRef } from 'react';
import './page.css';

function MicListen() {
    const [listening, setListening] = useState(false);
    const [transcription, setTranscription] = useState('');
    const recognitionRef = useRef(null);

    const startListening = () => {
        if (listening) {
            // Stop listening
            recognitionRef.current.stop();
            setListening(false);
            console.log('Stopped listening');
        } else {
            // Start listening
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true; // Set continuous to true for infinite listening
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                console.log('Voice activated');
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log('Transcript:', transcript);
                setTranscription(prevTranscription => prevTranscription + ' ' + transcript);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error: ', event.error);
                setListening(false);
            };

            recognition.onend = () => {
                console.log('Speech recognition ended');
                if (listening) {
                    recognition.start(); // Restart recognition if still listening
                }
            };

            recognitionRef.current = recognition;
            recognition.start();
            setListening(true);
            console.log('Listening...');
        }
    };

    return (
        <div className="MicListen">
            <header className="MicListen-header">
                <button 
                    className={`listenButton ${listening ? 'listening' : ''}`} 
                    onClick={startListening}
                >
                    {listening ? 'Stop Listening' : 'Start Listening'}
                </button>
                <p className='transcriptionText'>
                    {transcription}
                </p>
            </header>
        </div>
    );
}

export default MicListen;