export enum Icon {
  Javascript = "logos:javascript",
  Typescript = "vscode-icons:file-type-typescript",
  Rust = "logos:rust",
  Go = "vscode-icons:file-type-go-gopher",
  Yaml = "vscode-icons:file-type-yaml",
  Svelte = "logos:svelte-icon",
  Jsx = "file-icons:jsx-alt",
  Lua = "logos:lua",
  Json = "mdi:code-json",
  Opencv = "logos:opencv",
  Linux = "logos:linux-tux",
  Aws = "logos:aws",
  WebRtc = "logos:webrtc",
  Kubernetes = "logos:kubernetes",
  Docker = "logos:docker",
  Ffmpeg = "logos:ffmpeg-icon",
  Neovim = "logos:neovim",
  Liquid = "logos:shopify",
  Python = "logos:python",
  Markdown = "ri:markdown-fill"
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
  }
}
