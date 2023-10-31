import { StatusbarTime } from ".";

export default {
  title: "Components/StatusbarTime",
  component: StatusbarTime,
  argTypes: {
    type: {
      options: ["default", "focus", "blue", "orange", "green"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    time: "9:41",
    darkMode: true,
    type: "default",
    className: {},
  },
};
