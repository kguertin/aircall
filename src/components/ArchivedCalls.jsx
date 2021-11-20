import * as React from "react";
import { useCallData } from "../hooks/useCallData";

const ArchivedCalls = () => {
  const callData = useCallData();
  return (
    <div>
      {Object.values(callData).map((log) => {
        const displayCalls = log.calls.length > 0;
        return (
          <div>
            <div>{log.date}</div>
            {log.calls.map((call) => {
              if (call.is_archived) {
                return (
                  <div key={call.id}>
                    <p>{call.direction}</p>
                    <div>
                      <p>
                        {call.direction === "inbound" ? call.from : call.to}
                      </p>
                      <p>
                        {call.direction === "inbound"
                          ? `Tried to call from ${call.via}`
                          : `Tried to call ${call.via}`}
                      </p>
                    </div>
                    <div></div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ArchivedCalls;
