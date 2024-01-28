import { useState, useEffect } from 'react';

function useTypingEffect(words, typingSpeed = 110, deletingSpeed = 60, delay = 900) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [text, setText] = useState('');
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 400);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        // Set the current text to display
        setText(words[index].substring(0, subIndex));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed]);

    // Delay at the end of typing each word
    useEffect(() => {
        if (!reverse && text === words[index]) {
            const delayTimeout = setTimeout(() => {
                setReverse(true);
            }, delay);
            return () => clearTimeout(delayTimeout);
        }
    }, [text, reverse, index, words, delay]);

    return { text, blink };
}

export default useTypingEffect;
