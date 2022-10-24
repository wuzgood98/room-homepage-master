import React, { useEffect, useState } from "react";

import { mobile, desktop } from "../data/data";

const useData = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [data, setData] = useState(mobile);

  useEffect(() => {
    if (innerWidth > 640) {
      setData(desktop);
    } else {
      setData(mobile);
    }
  }, [innerWidth]);

  useEffect(() => {
    window.addEventListener("load", () => {
      setInnerWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener("load", () => {
        setInnerWidth(window.innerWidth);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setInnerWidth(e.target.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", (e) => {
        setInnerWidth(e.target.innerWidth);
      });
  }, [innerWidth]);

  return [data];
};

export default useData;
