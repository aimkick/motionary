import type { Meta, StoryObj } from '@storybook/react';
import { MagneticButton } from './MagneticButton';

const meta: Meta<typeof MagneticButton> = {
  title: 'Atomic/Buttons/MagneticButton',
  component: MagneticButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MagneticButton>;

export const Default: Story = {};

