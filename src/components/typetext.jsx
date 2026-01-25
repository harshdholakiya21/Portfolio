import { useState, useEffect } from 'react';

const phrases = ['Front-End Developer', 'AI/ML Student', 'Tech Enthusiast', 'Problem Solver','Open Source Contributor','Web Developer'];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];

    const handleTyping = () => {
      setText((prev) => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <>
    <h1 className='text-5xl font-bold text-gray-800  pt-40 pl-20'>Hello, I'm <span className='text-[#7644bb] '>Harsh Dholakiya</span></h1>
    <h2 className="text-3xl font-semibold text-gray-700 pt-6 pl-20">
      A Passionate{' '}
      <span className="text-gray-500">
        {text}
        <span className="border-r-2 border-gray-500 animate-blink ml-1"></span>
      </span>
    </h2>
        </>
  );
}