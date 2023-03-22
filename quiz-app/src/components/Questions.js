import React from 'react';

function Question({question}) {
    const {text, options} = question;

    return (
        <div>
            <h2>{text}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Question;