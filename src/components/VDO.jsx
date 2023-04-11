import React from "react";
import vid from "./comp1-0ad7675deae04ed5f8f45c4373b0cbec.webm";
function VDO({ articles }) {
  if (!articles.length) {
    return (
      <div>
        <video
          controls={false}
          autoPlay={true}
          loop
          muted={true}
          playload="auto"
          style={{ width: "500px", height: "300px" }}
        >
          <source src={vid} type="video/webm" />
        </video>
      </div>
    );
  } else
    return (
      <img
        style={{
          width: "20%",
          height: "10%",
          border: "2px solid black",
          borderRadius: "20% ",
        }}
        src="https://passenger.tech/wp-content/uploads/2017/02/siri.jpg"
        alt="alen logo"
      />
    );
}

export default VDO;
