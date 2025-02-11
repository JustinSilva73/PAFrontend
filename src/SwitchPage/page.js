import React, { useState } from 'react';
import EnterText from '../EnterText/page';
import MicListen from '../MicListen/page';
import './page.css';

function SwitchPage() {
    const [activeComponent, setActiveComponent] = useState('EnterText');
    const [outputText, setOutputText] = useState('');
    const [inputText, setInputText] = useState('Enter Text Here');

    const submitPrompt = async () => {
        console.log('Sending message:', inputText);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URI}/askJarvis`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputText }),
            });
            const data = await response.json();
            if (data.error) {
                console.error('Error from backend:', data.error);
            } else {
                setOutputText(data.response.text);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="SwitchPage">
            <header className="SwitchPage-header">
                <button onClick={() => setActiveComponent('EnterText')}>Enter Text</button>
                <button onClick={() => setActiveComponent('MicListen')}>Mic Listen</button>
                {activeComponent === 'EnterText' && (
                    <EnterText 
                        inputText={inputText}
                        setInputText={setInputText}
                        outputText={outputText}
                        setOutputText={setOutputText}
                        submitPrompt={submitPrompt}
                    />
                )}
                {activeComponent === 'MicListen' && (
                    <MicListen />
                )}
            </header>
        </div>
    );
}

export default SwitchPage;