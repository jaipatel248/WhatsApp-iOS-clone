// TODO: #Temporary Solution to redirect to the correct path
import { useEffect } from 'react';

const RedirectHandler = ({ validBasename }:{
    validBasename:string
}) => {

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    if (!currentPath.startsWith(validBasename)) {
      const newPath = validBasename + currentPath;
      console.log(newPath);
      window.location.replace(newPath);

    }
  }, [validBasename]);

  return null;
};

export default RedirectHandler;
