import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";


const meta : Meta<typeof Input> = {
  title: 'Components/Input',  
  component: Input,
  args: {
    placeholder: 'Enter text',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: 'text',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
  },
};