import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta : Meta = {
  title: 'Components/Button',  
  component: Button,
  args: {
    label: 'Click me',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    color: "default"
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    color: "default"  
  },
};