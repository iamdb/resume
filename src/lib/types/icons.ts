import { getIcon, loadIcons, type IconifyIcon } from 'iconify-icon';

export const getLoadingIcon = (): Required<IconifyIcon> => {
  const iconInfo = getIcon('line-md:downloading-loop');

  return iconInfo
};

export enum Icon {
  Aws = "simple-icons:amazonaws",
  Bash = "mdi:bash",
  Contentful = "simple-icons:contentful",
  Css = "cib:css3-shiled",
  DigitalOcean = "simple-icons:digitalocean",
  Docker = "cib:docker",
  Error = "bx:error-circle",
  Ffmpeg = "simple-icons:ffmpeg",
  Github = "simple-icons:github",
  Go = "simple-icons:go",
  Graphql = "cib:graphql",
  Hasura = "simple-icons:hasura",
  Html = "cib:html5",
  Javascript = "cib:javascript",
  Jira = "simple-icons:jira",
  Json = "mdi:code-json",
  Kubernetes = "cib:kubernetes",
  Linux = "cib:linux",
  Lua = "cib:lua",
  Markdown = "ri:markdown-fill",
  MobX = "simple-icons:mobx",
  Neovim = "simple-icons:neovim",
  Netlify = "simple-icons:netlify",
  NextJs = "file-icons:nextjs",
  Nodejs = "simple-icons:nodejs",
  Opencv = "file-icons:opencv",
  Python = "cib:python",
  React = "simple-icons:react",
  Rust = "cib:rust",
  Shopify = "simple-icons:shopify",
  Svelte = "cib:svelte",
  Toml = "file-icons:toml",
  Typescript = "cib:typescript",
  WebRtc = "simple-icons:webrtc",
  Yaml = "file-icons:yaml-alt4",
}

export function loadAllIcons(cb?: () => void) {
  const iconNames = Object.values(Icon) as string[]
  iconNames.push("carbon:location-filled")
  iconNames.push("clarity:date-line")
  iconNames.push("bi:eye-slash-fill")
  iconNames.push("bi:eye-fill")

  loadIcons(iconNames, () => {
    console.log('all icons loaded')
    cb && cb()
  })
}

export function iconToString(icon: Icon): string {
  switch (icon) {
    case Icon.Opencv:
      return "OpenCV"
    case Icon.WebRtc:
      return "WebRTC"
    case Icon.Nodejs:
      return "Node.js"
    case Icon.NextJs:
      return "Next.js"
    case Icon.Json:
      return "JSON"
    case Icon.Css:
      return "CSS"
    case Icon.Html:
      return "HTML"
    case Icon.Javascript:
      return "JavaScript"
    case Icon.Ffmpeg:
      return "FFMpeg"
    case Icon.Aws:
      return "AWS"
    case Icon.Typescript:
      return 'TypeScript'
    case Icon.Neovim:
      return "NeoVim"
    case Icon.Yaml:
      return "YAML"
  }

  const techIcon = Object.entries(Icon).filter((k) => k[1] === icon).at(0)?.at(0) || "error"

  return techIcon
}

export function stringToIcon(name: string): Icon {
  const lowerName = name.toLocaleLowerCase().replace('.', '')

  switch (lowerName) {
    case 'javascript':
      return Icon.Javascript
    case 'typescript':
      return Icon.Typescript
    case 'rust':
      return Icon.Rust
    case 'go':
      return Icon.Go
    case 'yaml':
      return Icon.Yaml
    case 'svelte':
      return Icon.Svelte
    case 'lua':
      return Icon.Lua
    case 'json':
      return Icon.Json
    case 'mobx':
      return Icon.MobX
    case 'linux':
      return Icon.Linux
    case 'markdown':
      return Icon.Markdown
    case 'python':
      return Icon.Python
    case 'graphql':
      return Icon.Graphql
    case 'shell':
    case 'bash':
      return Icon.Bash
    case 'toml':
      return Icon.Toml
    case 'aws':
      return Icon.Aws
    case 'libav':
    case 'ffmpeg':
      return Icon.Ffmpeg
    case 'kubernetes':
      return Icon.Kubernetes
    case 'html':
      return Icon.Html
    case 'css':
      return Icon.Css
    case 'nodejs':
      return Icon.Nodejs
    case 'hasura':
      return Icon.Hasura
    case 'webrtc':
      return Icon.WebRtc
    case 'contentful':
      return Icon.Contentful
    case 'liquid':
    case 'shopify':
      return Icon.Shopify
    case 'digitalocean':
      return Icon.DigitalOcean
    case 'netlify':
      return Icon.Netlify
    case 'github':
      return Icon.Github
    case 'jira':
      return Icon.Jira
    case 'neovim':
      return Icon.Neovim
    case 'opencv':
      return Icon.Opencv
    case 'docker':
      return Icon.Docker
    case 'nextjs':
      return Icon.NextJs
    case 'react':
      return Icon.React
  }

  return Icon.Error
}
