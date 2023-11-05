'use client';

import { useEffect, useRef } from 'react';

export function TypeWriter({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const outputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!outputRef.current) return;

    const output = outputRef.current;

    let i = 0;
    const interval = setInterval(() => {
      output.textContent += text[i++];
      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className={className}>
      <span ref={outputRef} />
      <span className="blink">|</span>
    </p>
  );
}
