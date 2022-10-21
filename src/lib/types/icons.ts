export enum Icon {
  Javascript = "cib:javascript",
  Typescript = "cib:typescript",
  Rust = "cib:rust",
  Go = "cib:go",
  Yaml = "file-icons:yaml-alt4",
  Svelte = "cib:svelte",
  Jsx = "file-icons:jsx-alt",
  Lua = "cib:lua",
  Json = "mdi:code-json",
  Opencv = "file-icons:opencv",
  Linux = "cib:linux",
  Aws = "fa-brands:aws",
  WebRtc = "simple-icons:webrtc",
  Kubernetes = "cib:kubernetes",
  Docker = "cib:docker",
  Ffmpeg = "simple-icons:ffmpeg",
  Neovim = "simple-icons:neovim",
  Liquid = "cib:shopify",
  Python = "cib:python",
  Markdown = "ri:markdown-fill",
  Graphql = "cib:graphql",
  Bash = "mdi:bash",
  Toml = "file-icons:toml"
}

export function StringToIcon(name: string): Icon | undefined {
  const lowerName = name.toLocaleLowerCase()
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
    case 'jsx':
      return Icon.Jsx
    case 'lua':
      return Icon.Lua
    case 'json':
      return Icon.Json
    case 'liquid':
      return Icon.Liquid
    case 'linux':
      return Icon.Linux
    case 'markdown':
      return Icon.Markdown
    case 'python':
      return Icon.Python
    case 'graphql':
      return Icon.Graphql
    case 'bash':
      return Icon.Bash
    case 'toml':
      return Icon.Toml
  }
}
