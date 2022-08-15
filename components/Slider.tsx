import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';

const Slider = () => {
  const [elementPosition, setElementPosition] = useState(-1);
  const mousePosition = useRef<number>(0);
  const elementWidth = useRef<number>(0);

  useEffect(() => {
    const handleMouseMovement: EventListener = (e: any): void => {
      mousePosition.current = e.screenX - e.target?.offsetLeft;
    };
    window.addEventListener('mousemove', handleMouseMovement);
    return () => window.removeEventListener('mousemove', handleMouseMovement);
  }, []);

  useLayoutEffect(() => {
    const myElement = document.getElementById('slider');
    elementWidth.current = myElement?.offsetWidth || 0;
    setElementPosition(0);
  }, []);

  return (
    <input
      type="range"
      min="0"
      max={elementWidth.current}
      value={elementPosition}
      className="slider overflow-visible flex-nowrap"
      id="slider"
      onInput={() => setElementPosition(mousePosition.current)}
    />
  );
};

export default memo(Slider);
