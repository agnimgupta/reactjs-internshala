/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusbarBattery2 } from "../../icons/StatusbarBattery2";
import { StatusbarBattery7 } from "../../icons/StatusbarBattery7";
import { StatusbarDynamicisland } from "../../icons/StatusbarDynamicisland";
import { StatusbarDynamicisland1 } from "../../icons/StatusbarDynamicisland1";
import { StatusbarTime } from "../StatusbarTime";
import "./style.css";

export const StatusBar = ({
  darkMode,
  dynamicIsland,
  dynIslSize,
  className,
  notchClassName,
  notch = "/img/notch-1.png",
  wifi = "/img/wifi.svg",
}) => {
  return (
    <div className={`status-bar dyn-isl-size-${dynIslSize} dynamic-island-${dynamicIsland} ${className}`}>
      {dynIslSize === "n-a" && (
        <>
          <img className={`notch ${notchClassName}`} alt="Notch" src={notch} />
          <div className="left-side">
            <StatusbarTime
              className="statusbar-time-instance"
              darkMode={darkMode ? true : undefined}
              time="9:41"
              type="default"
            />
          </div>
          <div className="right-side">
            {!darkMode && <StatusbarBattery2 className="statusbar-battery" />}

            {darkMode && <StatusbarBattery7 className="statusbar-battery" />}

            <img className="wifi" alt="Wifi" src={darkMode ? "/img/wifi-1.svg" : wifi} />
            <img
              className="icon-mobile-signal"
              alt="Icon mobile signal"
              src={darkMode ? "/img/icon-mobile-signal-1.svg" : "/img/icon-mobile-signal.svg"}
            />
          </div>
        </>
      )}

      {["default", "large", "separated"].includes(dynIslSize) && (
        <div className={`statusbar-time-wrapper ${notchClassName}`}>
          <StatusbarTime darkMode={darkMode ? true : undefined} time="9:41" type="default" />
        </div>
      )}

      {dynamicIsland && (
        <div className="dynamic-island">
          {["default", "large", "separated", "x-large"].includes(dynIslSize) && (
            <div className="statusbar">
              <div className="truedepth-camera">
                {dynIslSize === "separated" && (
                  <>
                    <div className="div" />
                    <div className="facetime-camera" />
                  </>
                )}
              </div>
              <div className="facetime-camera-2" />
            </div>
          )}

          {!darkMode && dynIslSize === "ultra" && <StatusbarDynamicisland className="instance-node" />}

          {dynIslSize === "ultra" && darkMode && <StatusbarDynamicisland1 className="instance-node" />}
        </div>
      )}

      {["default", "large", "separated"].includes(dynIslSize) && (
        <div className="signal-wifi-battery-wrapper">
          <div className="signal-wifi-battery">
            <img
              className="img"
              alt="Icon mobile signal"
              src={
                darkMode && dynIslSize === "default"
                  ? "/img/icon-mobile-signal-5.svg"
                  : darkMode && ["large", "separated"].includes(dynIslSize)
                  ? "/img/icon-mobile-signal-7.svg"
                  : !darkMode && dynIslSize === "default"
                  ? "/img/icon-mobile-signal-2.svg"
                  : "/img/icon-mobile-signal-4.svg"
              }
            />
            {dynIslSize === "default" && (
              <img className="wifi-2" alt="Wifi" src={darkMode ? "/img/wifi-3.svg" : "/img/wifi-2.svg"} />
            )}

            {!darkMode && <StatusbarBattery2 className="statusbar-battery-2" />}

            {darkMode && <StatusbarBattery7 className="statusbar-battery-2" />}
          </div>
        </div>
      )}
    </div>
  );
};

StatusBar.propTypes = {
  darkMode: PropTypes.bool,
  dynamicIsland: PropTypes.bool,
  dynIslSize: PropTypes.oneOf(["large", "n-a", "default", "separated", "ultra", "x-large"]),
  notch: PropTypes.string,
  wifi: PropTypes.string,
};
