import * as React from 'react';
import { useCallData } from '../hooks/useCallData';
import '../css/call.css';
import axios from 'axios';
import { getDate } from '../util/getDate';
import { getTime } from '../util/getTime';

const ActivityFeed = () => {
  const { callData, getCallData } = useCallData();

  const updateCall = (id, to_archive) => {
    const data = { is_archived: to_archive };
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, data)
      .then(() => getCallData())
      .catch((e) => console.log(e));
  };

  return (
    <div className="call-container">
      {Object.values(callData).map((log, i) => {
        const displayDate =
          log.calls.filter((call) => call.is_archived === false).length > 0;

        return displayDate ? (
          <div key={i}>
            <div className="date-container">
              <h3 className="date-text">{getDate(log.date)}</h3>
            </div>
            {log.calls.map((call) => {
              if (!call.is_archived) {
                return (
                  <div key={call.id} className="call-item-container">
                    <div className="call-direction">
                      {call.direction === 'inbound' ? (
                        <img
                          className="call-type-img"
                          src="public/incomming-call.png"
                          alt="incomming call icon"
                        />
                      ) : (
                        <img
                          className="call-type-img"
                          src="public/outgoing-call.png"
                          alt="outgoing call icon"
                        />
                      )}
                    </div>
                    <div className="caller-data">
                      <p className="call-number">
                        {call.direction === 'inbound' ? call.from : call.to}
                      </p>
                      <p className="call-info">
                        {call.direction === 'inbound'
                          ? `Tried to call from ${call.via}`
                          : `Tried to call ${call.via}`}
                      </p>
                      <p className="call-type">{call.call_type}</p>
                    </div>
                    <div className="call-date-container">
                      <p className="call-date">{getTime(call.created_at)}</p>

                      <img
                        onClick={() => updateCall(call.id, true)}
                        className="archive-icon"
                        src="public/archive-filled-box.png"
                        alt="archive icon"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ActivityFeed;
