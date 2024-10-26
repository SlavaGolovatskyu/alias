import React from 'react';

export const useLoading = (setIsLoading, delay, value) => {
  React.useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(value);
    }, delay);
  }, [setIsLoading, delay, value]);
}