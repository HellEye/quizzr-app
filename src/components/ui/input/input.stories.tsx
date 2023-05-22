import { Input, type InputProps } from './input'

export default {
  title: 'UI/Input',
  component: Input,
}

export const Default = (args: InputProps) => <Input {...args} placeholder="Placeholder" />
export const WithLabel = (args: InputProps) => (
  <Input {...args} label="Label" placeholder="Placeholder" />
)
