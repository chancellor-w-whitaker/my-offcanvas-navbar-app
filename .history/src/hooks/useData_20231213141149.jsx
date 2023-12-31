import { useLayoutEffect, useState } from "react";

export const useData = (url) => {
  const [data, setData] = useState(null);
  useLayoutEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
};
