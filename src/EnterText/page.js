import React from 'react';
import './page.css';

function EnterText({ inputText, setInputText, outputText, submitPrompt }) {
    return (
        <div className="EnterText">
            <header className="EnterText-header">
                <p className='promptTitle'>
                    Enter Text
                </p>
                <textarea 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='textPrompt' 
                    rows="4" 
                    cols="50"
                />
                <button 
                    className='submitButton' 
                    onClick={submitPrompt}
                >
                    Submit
                </button>
                <p className='outputText'>
                    {outputText}
                </p>
            </header>
        </div>
    );
}

export default EnterText;