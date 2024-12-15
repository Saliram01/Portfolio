import React, { useEffect, useState } from "react";

const useChook = (key, initialValue) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]);

  return [name, setName];
};

export default useChook;
