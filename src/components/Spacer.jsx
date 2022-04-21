import React from "react";
import Wave from "../img/wave-1.svg";

export default function Spacer({ space }) {
  return (
    <div
      className=""
      style={{ marginTop: space[0] + "%", marginBottom: space[1] + "%" }}
    >
      {/*
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921 150">
        <path
          style={{ fill: "#cccccc" }}
          d="M0,71l60.031-2.279l60.031-2.199l120.063-4.057c40.021-1.392,80.042-2.572,120.063-3.856L480.25,55
		l120.063-3.419L720.375,48.4l120.063-2.819L960.5,43c40.021-0.847,80.042-2.027,120.063-3.417
		c40.021-1.385,80.042-2.946,120.063-4.183c40.021-1.211,80.042-2.029,120.063-2.097c40.021-0.084,80.042,0.542,120.063,1.697
		c80.042,2.359,160.083,6.093,240.125,11.711c40.021,2.794,80.042,6.099,120.063,10.005c20.01,1.993,40.021,4.06,60.031,6.419
		c20.01,2.331,40.021,4.831,60.031,7.865v8c-20.01,3.035-40.021,5.535-60.031,7.866c-20.01,2.359-40.021,4.426-60.031,6.419
		c-40.021,3.906-80.042,7.211-120.063,10.005c-80.042,5.617-160.083,9.352-240.125,11.711c-40.021,1.155-80.042,1.781-120.063,1.697
		c-40.021-0.068-80.042-0.886-120.063-2.097c-40.021-1.237-80.042-2.798-120.063-4.183c-40.021-1.39-80.042-2.57-120.063-3.417
		l-120.063-2.581L720.375,101.6l-120.063-3.181L480.25,95l-120.063-3.609c-40.021-1.284-80.042-2.464-120.063-3.856l-120.063-4.057
		l-60.031-2.199L0,79V71z"
        />
      </svg>
  
      <svg id="visual" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 137L37.5 142.5C75 148 150 159 225 151.5C300 144 375 118 450 115.7C525 113.3 600 134.7 675 137.7C750 140.7 825 125.3 862.5 117.7L900 110"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
          stroke="#cccccc"
          strokeWidth="30"
        ></path>
      </svg>
      */}
      <svg
        width="100%"
        height="47px"
        viewBox="0 0 1440 47"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z"
            id="Path-9"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
    </div>
  );
}