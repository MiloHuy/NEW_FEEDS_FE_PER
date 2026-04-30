import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseCard from "./BaseCard";

const meta: Meta<typeof BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseCard>;

export const Basic: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee' }} />
        <div>
          <div style={{ fontWeight: 'bold' }}>John Doe</div>
          <div style={{ fontSize: '12px', color: '#666' }}>2 hours ago</div>
        </div>
      </div>
    ),
    body: "This is a basic card with just a header and some text content. It follows the project architecture and design tokens.",
  },
};

export const WithMedia: Story = {
  args: {
    ...Basic.args,
    media: (
      <div style={{ width: '100%', height: '200px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#999' }}>Image/Video Placeholder</span>
      </div>
    ),
  },
};

export const FullFeatures: Story = {
  args: {
    ...WithMedia.args,
    counters: (
      <div style={{ display: 'flex', gap: '12px' }}>
        <span> 1,234 Likes</span>
        <span> 56 Comments</span>
      </div>
    ),
    actions: (
      <div style={{ display: 'flex', width: '100%', borderTop: '0.5px solid var(--color-border-tertiary)' }}>
        <button style={{ flex: 1, padding: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Like</button>
        <button style={{ flex: 1, padding: '12px', background: 'none', border: 'none', cursor: 'pointer', borderLeft: '0.5px solid var(--color-border-tertiary)' }}>Comment</button>
        <button style={{ flex: 1, padding: '12px', background: 'none', border: 'none', cursor: 'pointer', borderLeft: '0.5px solid var(--color-border-tertiary)' }}>Share</button>
      </div>
    ),
  },
};
