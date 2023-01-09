import axios from "axios";
import { useState, useEffect } from "react";

export default function useData(url) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(url);
      const data = res.data;
      setData(data);
    })();

    return () => {};
  }, []);

  return Data;
}
