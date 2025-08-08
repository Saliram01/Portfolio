import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        setApiData(await res.json());
      } catch (err) {console.log(err);}
    })();
  }, [url]);

  return [apiData];
};

export default useFetch;
