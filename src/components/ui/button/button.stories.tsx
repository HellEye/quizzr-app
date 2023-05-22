import { Button, type ButtonProps } from './button'

export default {
  title: 'UI/Button',
  component: Button,
}

// export const Default = () => <Button>Default</Button>
// export const destructive = () => <Button variant="destructive">destructive</Button>
// export const outline = () => <Button variant="outline">outline</Button>
// export const secondary = () => <Button variant="secondary">secondary</Button>
// export const ghost = () => <Button variant="ghost">ghost</Button>
// export const link = () => <Button variant="link">link</Button>
// export const accent = () => <Button variant="accent">accent</Button>
const Template = (args: ButtonProps) => <Button {...args}>{args.variant || 'Default'}</Button>
export const Default = Template.bind({})
