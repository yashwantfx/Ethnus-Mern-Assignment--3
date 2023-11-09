import { useState, useEffect } from 'react';
import "./styles.css";

export function Counter() {
    let [text, setText] = useState('');
    let [wordCount, setWordCount] = useState(0);
    
    const changeHandler = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        const words = text.split(/\s+/).filter(word => word !== '');

        let wordCount = 0;
        words.forEach((word) => {
            if(word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
    }, [text]);

    return (
        <div class='container'>
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea value={text} onChange={changeHandler} rows="7" cols="10" placeholder='Type here...'></textarea>

            <p class="displaycount">Word Count: {wordCount}</p>
        </div>
    )
}