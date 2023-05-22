import { Button, type ButtonProps } from './button'

export default {
  title: 'UI/Button',
  component: Button,
}

const Template = (args: ButtonProps) => <Button {...args}>{args.variant || 'Default'}</Button>
export const Default = Template.bind({})
