import React, { useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";

interface ClickOutsideComponentProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

const ClickOutsideComponent: React.FC<ClickOutsideComponentProps> = ({
  onOutsideClick,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <Box ref={ref}>{children}</Box>;
};
export default ClickOutsideComponent;
