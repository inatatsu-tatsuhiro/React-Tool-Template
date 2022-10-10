import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextBox } from './TextBox'

export default {
  title: 'Atoms/TextBox',
  component: TextBox,
} as ComponentMeta<typeof TextBox>

const Template: ComponentStory<typeof TextBox> = (args) => <TextBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Test TextBox',
}
