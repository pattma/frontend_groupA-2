import React from "react";
import "../user/User_main.css";

// import chart element
import LineChart from "./LineChart";
import { DoChart } from "./DoChart";

const User_right = function () {
  return (
    <div className='grid-right' >
        <DoChart />
        <LineChart />
        {/* <p>Test .</p> */}
    </div>
  );
};

export default User_right;