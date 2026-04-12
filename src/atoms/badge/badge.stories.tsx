import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta : Meta = {
  title: 'Components/Badge',  
  component: Badge,
  args: {
    children: 'Badge',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
};
