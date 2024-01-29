import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/document/',
  title: 'CL Document',
  description: 'cmtlyt的编程文档',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-icon.png',
    dark: '/rspress-icon.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/cmtlyt/document',
      },
    ],
    nextPageText: '下一篇',
    prevPageText: '上一篇',
    outlineTitle: '导航',
    enableContentAnimation: true,
  },
})
