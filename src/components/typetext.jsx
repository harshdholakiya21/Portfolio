import { useState, useEffect } from 'react';

const phrases = ['Front-End Developer', 'AI/ML Student', 'Tech Enthusiast', 'Problem Solver', 'Open Source Contributor', 'Web Developer'];

export default function Typewriter({ isCondition }) {
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
    <div className={`transition-all duration-500 overflow-hidden 
      ${isCondition ? "text-center px-6" : "pl-20"}`}>
      <h1 className={`font-bold text-gray-800 transition-all duration-500 
        ${isCondition ? "text-3xl md:text-4xl pt-6" : "text-5xl pt-40"}`}>
        Hello, I'm <span className='text-[#7644bb]'>Harsh Dholakiya</span>
      </h1>
      <h2 className={`font-semibold text-gray-700 pt-6 transition-all duration-500 
        ${isCondition ? "text-xl md:text-2xl" : "text-3xl"}`}>
        A Passionate{' '}
        <span className="text-gray-500">
          {text}
          <span className="border-r-2 border-gray-500 animate-blink ml-1"></span>
        </span>
      </h2>
    </div>
  );
}