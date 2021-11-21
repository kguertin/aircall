import * as React from 'react';
import axios from 'axios';

import UnarchiveIcon from '@mui/icons-material/Unarchive';
import CallIcon from '@mui/icons-material/Call';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

import { useCallData } from '../hooks/useCallData';
import { getDate } from '../util/getDate';
import { getTime } from '../util/getTime';

import '../css/call.css';

const ArchivedCalls = () => {
  const { callData, getCallData } = useCallData();

  function updateCall(id, to_archive) {
    const data = { is_archived: to_archive };
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, data)
      .then(() => getCallData())
      .catch((e) => console.log(e));
  }

  function resetCalls() {
    axios
      .get(`https://aircall-job.herokuapp.com/reset`)
      .then(() => getCallData())
      .catch((e) => console.log(e));
  }

  return (
    <div className="call-container">
      <div onClick={resetCalls}>
        <p className="reset-calls">Reset Calls</p>
      </div>
      {Object.values(callData).map((log, i) => {
        const displayDate =
          log.calls.filter((call) => call.is_archived === true).length > 0;

        return displayDate ? (
          <div key={i}>
            <div className="date-container">
              <h3 className="date-text">{getDate(log.date)}</h3>
            </div>
            {log.calls.map((call) => {
              if (call.is_archived) {
                return (
                  <div key={call.id} className="call-item-container">
                    <div className="call-direction">
                      {call.direction === 'inbound' ? (
                        <PhoneCallbackIcon />
                      ) : (
                        <CallIcon />
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

                      <UnarchiveIcon
                        onClick={() => updateCall(call.id, true)}
                        className="archive-icon"
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

export default ArchivedCalls;
