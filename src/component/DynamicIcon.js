import React from "react";
import * as Icons from "@mui/icons-material";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import "./DynamicIcon.css";

const DynamicIcon = ({ iconName, marginValue, fontSizeValue, iconstyle }) => {
  if (Icons[iconName]) {
    const IconComponent = Icons[iconName];
    return (
      <div
        className={iconstyle}
        style={{ marginRight: marginValue, marginLeft: marginValue }}
      >
        <IconComponent fontSize={fontSizeValue} />
      </div>
    );
  } else {
    return (
      <div style={{ marginRight: marginValue, marginLeft: marginValue }}>
        <ImageNotSupportedIcon fontSize={fontSizeValue} />
      </div>
    );
  }
};

export default DynamicIcon;
