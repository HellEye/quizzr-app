import type { Preview } from '@storybook/react'
import * as nextImage from 'next/image'
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/'
import '@/styles/globals.css'
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: any) => <img {...props} />,
})

// const withTheme = (Story, context) => {
//   const theme = context.globals.theme
//   return (
//     <body className={`${theme} flex h-full w-full items-center justify-center`}>
//       <Story {...context} />
//     </body>
//   )
// }
const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        radio: /variant$/,
      },
    },
    docs: {
      // container: DocsContainer,
      // page: DocsPage,
      source: {
        state: 'open',
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
    },
  },
  globalTypes: {
    // theme: {
    //   description: 'Global theme for components',
    //   defaultValue: 'dark',
    //   toolbar: {
    //     icon: 'circlehollow',
    //     items: ['light', 'dark'],
    //     dynamicTitle: true,
    //   },
    // },
    darkMode: {
      defaultValue: true,
    },
  },
  // decorators: [withTheme],
}

export default preview
