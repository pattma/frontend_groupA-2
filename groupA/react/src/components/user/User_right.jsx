import React from "react";
import "../user/User_main.css";

// import chart element
import LineChart from "./LineChart";
import { DoChart } from "./DoChart";

const User_right = function ({ sumWalkDuration, sumSwimDuration, sumRunDuration, sumBikeDuration, sumBadmintonDuration}) {
  return (
    <div className='grid-right' >
        <DoChart 
          sumWalkDuration={sumWalkDuration}
          sumSwimDuration={sumSwimDuration}
          sumRunDuration={sumRunDuration}
          sumBikeDuration={sumBikeDuration}
          sumBadmintonDuration={sumBadmintonDuration}
        />
        <LineChart />
        {/* <p>Test .</p> */}
    </div>
  );
};

export default User_right;