import * as React from "react";
import { useCallData } from "../hooks/useCallData";

const ActivityFeed = () => {
  const callData = useCallData();

  return (
    <div>
      {callData.map((call) => (
        <p key={call.id}>{call.from}</p>
      ))}
    </div>
  );
};

export default ActivityFeed;
