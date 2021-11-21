import * as React from 'react';
import axios from 'axios';

export function useCallData() {
  const [callData, setCallData] = React.useState([]);

  function getCallData() {
    axios
      .get('https://aircall-job.herokuapp.com/activities')
      .then((res) => {
        const formattedCalls = {};
        res.data.forEach((call) => {
          const getDate = call.created_at.split('T')[0];
          if (formattedCalls[getDate]) {
            formattedCalls[getDate].calls.push(call);
          } else {
            formattedCalls[getDate] = { calls: [call], date: getDate };
          }
        });

        setCallData(formattedCalls);
      })
      .catch((err) => console.log(e));
  }

  React.useEffect(() => {
    getCallData();
  }, []);

  return { callData, getCallData };
}
