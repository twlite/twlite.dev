export interface Repository {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  owner: {
    login: string
    avatar_url: string
  }
}

// Static pinned repositories based on the provided image
export const pinnedRepositories: Repository[] = [
  {
    id: 1,
    name: "discord-player",
    full_name: "Androz2091/discord-player",
    html_url: "https://github.com/Androz2091/discord-player",
    description: "Complete framework to simplify the implementation of music commands using discord.js v14",
    stargazers_count: 616,
    forks_count: 193,
    language: "TypeScript",
    owner: {
      login: "Androz2091",
      avatar_url: "https://github.com/Androz2091.png",
    },
  },
  {
    id: 2,
    name: "commandkit",
    full_name: "underctrl-io/commandkit",
    html_url: "https://github.com/underctrl-io/commandkit",
    description: "The discord.js metaframework",
    stargazers_count: 108,
    forks_count: 11,
    language: "TypeScript",
    owner: {
      login: "underctrl-io",
      avatar_url: "https://github.com/underctrl-io.png",
    },
  },
  {
    id: 3,
    name: "yasumu",
    full_name: "neplextech/yasumu",
    html_url: "https://github.com/neplextech/yasumu",
    description:
      "Yasumu is a customizable, offline-first, free and open-source application to test various types of APIs (Lightweight alternative to postman/insomnia/bruno).",
    stargazers_count: 21,
    forks_count: 3,
    language: "TypeScript",
    owner: {
      login: "neplextech",
      avatar_url: "https://github.com/neplextech.png",
    },
  },
  {
    id: 4,
    name: "vectorizer",
    full_name: "neplextech/vectorizer",
    html_url: "https://github.com/neplextech/vectorizer",
    description: "Fast Node.js library to convert raster images to svg",
    stargazers_count: 104,
    forks_count: 5,
    language: "Rust",
    owner: {
      login: "neplextech",
      avatar_url: "https://github.com/neplextech.png",
    },
  },
  {
    id: 5,
    name: "webview",
    full_name: "webviewjs/webview",
    html_url: "https://github.com/webviewjs/webview",
    description: "Robust cross-platform webview library for Node/Deno/Bun",
    stargazers_count: 28,
    forks_count: 4,
    language: "Rust",
    owner: {
      login: "webviewjs",
      avatar_url: "https://github.com/webviewjs.png",
    },
  },
  {
    id: 6,
    name: "mediaplex",
    full_name: "androzdev/mediaplex",
    html_url: "https://github.com/androzdev/mediaplex",
    description: "Media utilities for node 🎵 🎧",
    stargazers_count: 13,
    forks_count: 1,
    language: "Rust",
    owner: {
      login: "androzdev",
      avatar_url: "https://github.com/androzdev.png",
    },
  },
]
