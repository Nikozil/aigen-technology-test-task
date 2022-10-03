import { useEffect, useState } from 'react';

export const useDebounce = (value: object, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [value, delay]);

  return debouncedValue;
};
