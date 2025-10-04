import type { Meta, StoryObj } from "@storybook/react";

import BlogCard from "@/components/Cards/BlogCard";

const meta = {
  title: "Component/Card/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     title: "Exploring the Mountains: A Journey to Remember",
//     description:
//       "Join us as we explore the breathtaking mountain ranges, uncover hidden trails, and share tips for an unforgettable adventure.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     date: "2023-10-01",
//     data: {
//       name: "John Doe",
//       age: 30,
//     },
//   },
// };

export const Default: Story = {
  args: {
    title: "Exploring the Mountains: A Journey to Remember",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
};
