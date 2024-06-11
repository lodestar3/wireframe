import { DisplayFullWrapper } from ".";

export default {
  title: "Components/DisplayFullWrapper",
  component: DisplayFullWrapper,
  argTypes: {
    display: {
      options: ["full", "no-balance"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showAvatar: true,
    addy: "0xhab.eth",
    balance: "42.069 ETH",
    display: "full",
    className: {},
  },
};
