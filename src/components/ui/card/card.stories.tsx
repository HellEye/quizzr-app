import { Card, CardContent, CardDescription, CardTitle } from './card'

export default {
  title: 'UI/Card',
  component: Card,
}

export const Default = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardContent>Content</CardContent>
  </Card>
)
