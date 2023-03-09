import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt, aperiam perferendis voluptatum blanditiis quibusdam minima officia quam delectus. Modi optio harum, sapiente fugiat aliquid vero laborum corporis architecto doloribus. Aspernatur voluptatibus cumque dolorem asperiores iusto nemo, neque rerum veritatis corrupti fugit cupiditate iste perferendis aliquid culpa, minima facilis ipsam eius blanditiis quo quia ab, fuga odio soluta. Doloribus, animi!',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt, aperiam perferendis voluptatum blanditiis quibusdam minima officia quam delectus. Modi optio harum, sapiente fugiat aliquid vero laborum corporis architecto doloribus. Aspernatur voluptatibus cumque dolorem asperiores iusto nemo, neque rerum veritatis corrupti fugit cupiditate iste perferendis aliquid culpa, minima facilis ipsam eius blanditiis quo quia ab, fuga odio soluta. Doloribus, animi!',
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
