import React from "react";
import { HomeIndicator } from "../../components/HomeIndicator";
import { StatusBar } from "../../components/StatusBar";
import { VuesaxLinearAddWrapper } from "../../components/VuesaxLinearAddWrapper";
import { VuesaxLinearArrowRight1 } from "../../icons/VuesaxLinearArrowRight1";
import { VuesaxLinearArrowSquare1 } from "../../icons/VuesaxLinearArrowSquare1";
import { VuesaxLinearGame1 } from "../../icons/VuesaxLinearGame1";
import { VuesaxLinearHeart1 } from "../../icons/VuesaxLinearHeart1";
import { VuesaxLinearMenu1 } from "../../icons/VuesaxLinearMenu1";
import { VuesaxLinearNotification1 } from "../../icons/VuesaxLinearNotification1";
import { VuesaxLinearProfile1 } from "../../icons/VuesaxLinearProfile1";
import { VuesaxLinearTree1 } from "../../icons/VuesaxLinearTree1";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-3">
        <StatusBar
          className="status-bar-instance"
          darkMode={false}
          dynIslSize="n-a"
          dynamicIsland={false}
          notch="/img/notch-2.png"
          notchClassName="design-component-instance-node"
          wifi="/img/wifi-4.svg"
        />
        <div className="frame">
          <div className="text-wrapper-2">Routines ⛳</div>
          <div className="frame-2">
            <img className="vuesax-linear" alt="Vuesax linear" src="/img/vuesax-linear-location.svg" />
            <p className="p">You have 2 Active Routines currently</p>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="div-wrapper">
              <div className="frame-2">
                <VuesaxLinearMenu1 className="icon-instance-node" />
                <div className="text-wrapper-3">All</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-2">
                <VuesaxLinearGame1 className="icon-instance-node" />
                <div className="text-wrapper-4">Created by You</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-2">
                <VuesaxLinearTree1 className="icon-instance-node" />
                <div className="text-wrapper-4">Imported Templates</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="frame-5">
                <div className="frame-6">
                  <div className="text-wrapper-5">Skin Care Routine</div>
                  <div className="frame-7">
                    <div className="element-reminder-items">👉&nbsp;&nbsp;5 Reminder Items</div>
                  </div>
                </div>
                <img className="image" alt="Image" src="/img/image-2.png" />
              </div>
            </div>
          </div>
          <div className="frame-8">
            <div className="frame-2">
              <div className="text-wrapper-6">Created by Amrutam</div>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-9">
              <div className="frame-6">
                <div className="text-wrapper-5">Focus &amp; Work</div>
                <div className="frame-7">
                  <div className="frame-7">
                    <div className="element-reminder-items">👉&nbsp;&nbsp;3 Reminder Items</div>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="group-2">
                    <img className="image-2" alt="Image" src="/img/image-1.png" />
                    <img className="image-3" alt="Image" src="/img/image-4.png" />
                    <img className="image-4" alt="Image" src="/img/image-5.png" />
                    <img className="image-5" alt="Image" src="/img/image-3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="overlap-group-wrapper">
            <div className="overlap-4">
              <div className="frame-10">
                <div className="frame-11">
                  <img className="vuesax-linear-home" alt="Vuesax linear home" src="/img/vuesax-linear-home.svg" />
                  <div className="ellipse" />
                </div>
                <div className="frame-11">
                  <VuesaxLinearHeart1 className="icon-instance-node-2" />
                </div>
                <div className="frame-11">
                  <VuesaxLinearNotification1 className="icon-instance-node-2" />
                </div>
                <div className="frame-11">
                  <VuesaxLinearProfile1 className="icon-instance-node-2" />
                </div>
              </div>
              <img className="line" alt="Line" src="/img/line-3.svg" />
            </div>
          </div>
          <HomeIndicator className="home-indicator-instance" darkMode={false} />
        </div>
        <div className="vuesax-linear-arrow-wrapper">
          <VuesaxLinearArrowRight1 className="vuesax-linear-arrow" />
        </div>
        <div className="overlap-5">
          <div className="frame-12">
            <div className="frame-13">
              <VuesaxLinearAddWrapper />
              <VuesaxLinearArrowSquare1 className="vuesax-linear-arrow-square-1" />
              <div className="text-wrapper-7">Add Routines</div>
            </div>
          </div>
          <img className="vuesax-linear-add-2" alt="Vuesax linear add" src="/img/vuesax-linear-add-2.png" />
        </div>
      </div>
    </div>
  );
};
