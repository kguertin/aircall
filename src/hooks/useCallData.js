import * as React from "react";
import axios from "axios";

export function useCallData() {
  const [callData, setCallData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then((res) => setCallData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return callData;
}
