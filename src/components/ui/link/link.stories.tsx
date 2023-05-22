import { Link, type LinkProps } from './link'

export default {
  title: 'UI/Link',
  component: Link,
  args: {
    href: '#',
  },
}

const Template = (args: LinkProps) => <Link {...args}>{args.variant || 'Default'}</Link>
export const Default = Template.bind({})
