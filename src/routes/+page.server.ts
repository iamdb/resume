import { Octokit } from 'octokit'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN })

  const repos: UserRepos = await octokit.graphql(`{
    user(login: "iamdb") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            description
            languages (first: 10) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }`)

  return {
    pinnedItems: repos.user.pinnedItems.nodes
  }
}

export interface Repo {
  name: string;
  url: string;
  description: string;
  languages: {
    nodes: Language[]
  }
}

export interface Language {
  name: string;
  color: string;
}

export interface UserRepos {
  user: {
    pinnedItems: {
      nodes: Repo[]
    }
  }
}
