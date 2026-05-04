import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: "radio",
      options: ["circle", "square"],
    },
    status: {
      control: "select",
      options: [undefined, "online", "offline", "busy", "away"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// ─── Default (fallback initials) ────────────────────────────────────────────

export const Default: Story = {
  args: {
    fallback: "John Doe",
    size: "md",
    shape: "circle",
  },
};

// ─── With real image ─────────────────────────────────────────────────────────

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "Jane Smith",
    size: "md",
    shape: "circle",
  },
};

// ─── Broken image → fallback ─────────────────────────────────────────────────

export const BrokenImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    fallback: "Alice Wonder",
    size: "md",
    shape: "circle",
  },
};

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar fallback="XS" size="xs" />
      <Avatar fallback="SM" size="sm" />
      <Avatar fallback="MD" size="md" />
      <Avatar fallback="LG" size="lg" />
      <Avatar fallback="XL" size="xl" />
    </div>
  ),
};

// ─── Shapes ──────────────────────────────────────────────────────────────────

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar fallback="Circle" size="lg" shape="circle" />
      <Avatar fallback="Square" size="lg" shape="square" />
    </div>
  ),
};

// ─── Status indicators ───────────────────────────────────────────────────────

export const StatusOnline: Story = {
  args: {
    fallback: "John Doe",
    size: "md",
    shape: "circle",
    status: "online",
  },
};

export const StatusOffline: Story = {
  args: {
    fallback: "John Doe",
    size: "md",
    shape: "circle",
    status: "offline",
  },
};

export const StatusBusy: Story = {
  args: {
    fallback: "John Doe",
    size: "md",
    shape: "circle",
    status: "busy",
  },
};

export const StatusAway: Story = {
  args: {
    fallback: "John Doe",
    size: "md",
    shape: "circle",
    status: "away",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {(["online", "offline", "busy", "away"] as const).map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <Avatar
            src="https://i.pravatar.cc/150?img=5"
            alt={s}
            size="lg"
            shape="circle"
            status={s}
          />
          <span style={{ fontSize: "12px", color: "#666", textTransform: "capitalize" }}>{s}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Fallback color variety ───────────────────────────────────────────────────

export const FallbackColors: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
      {["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"].map((name) => (
        <Avatar key={name} fallback={name} size="md" shape="circle" />
      ))}
    </div>
  ),
};
