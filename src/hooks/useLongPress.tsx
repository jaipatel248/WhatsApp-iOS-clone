import { useState, useRef, useEffect, useCallback } from "react";

interface Options {
  onLongPress: (currentTarget: any) => void;
  onClick?: () => void;
  longPressTime?: number;
}

const useLongPress = ({
  onLongPress,
  onClick,
  longPressTime = 500,
}: Options) => {
  const [isPressing, setIsPressing] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const startPress = useCallback(
    (e: any) => {
      e.preventDefault();
      setIsPressing(true);
      const currentTarget = e.currentTarget;
      timeoutRef.current = window.setTimeout(() => {
        onLongPress(currentTarget);
        setIsPressing(false);
      }, longPressTime);
    },
    [onLongPress, longPressTime]
  );

  const endPress = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (isPressing && onClick) {
      onClick();
    }
    setIsPressing(false);
  }, [isPressing, onClick]);

  const cancelPress = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPressing(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    onMouseDown: startPress,
    onMouseUp: endPress,
    onMouseLeave: cancelPress,
    onTouchStart: startPress,
    onTouchEnd: endPress,
  };
};

export default useLongPress;
