import { StatusBar } from ".";

export default {
  title: "Components/StatusBar",
  component: StatusBar,
  argTypes: {
    dynIslSize: {
      options: ["large", "n-a", "default", "separated", "ultra", "x-large"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    dynamicIsland: true,
    dynIslSize: "large",
    className: {},
    notchClassName: {},
    notch: "/img/notch-1.png",
    wifi: "/img/wifi.svg",
  },
};
