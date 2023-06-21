import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ words, interval, typingDelay, erasingDelay }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timerId;

    if (isTyping) {
      const word = words[currentWordIndex];
      const wordLength = word.length;

      timerId = setInterval(() => {
        setCurrentWord((prevWord) => {
          if (prevWord.length === wordLength) {
            setIsTyping(false);
            return prevWord;
          }

          return word.slice(0, prevWord.length + 1);
        });
      }, interval);
    } else {
      timerId = setInterval(() => {
        setCurrentWord((prevWord) => {
          if (prevWord.length === 0) {
            setIsTyping(true);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            return '';
          }

          return prevWord.slice(0, prevWord.length - 1);
        });
      }, erasingDelay);
    }

    return () => clearInterval(timerId);
  }, [currentWordIndex, words, interval, typingDelay, erasingDelay, isTyping]);

  return <span>{currentWord}</span>;
};

export default TypingAnimation;
