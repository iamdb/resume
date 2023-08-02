import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = (async ({ fetch }) => {
  const query = `{
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
  }`.replaceAll('\n', '');

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      },
      body: JSON.stringify({
        query
      })
    });

    if (res.ok) {
      const json = await res.json();

      return {
        pinnedItems: json.data?.user?.pinnedItems.nodes || []
      };
    } else {
      throw error(res.status, res.statusText);
    }
  } catch (err) {
    throw error(500, `Failed to get pinned items. ${(err as Error).message}`);
  }
}) satisfies PageServerLoad;

export interface Repo {
  name: string;
  url: string;
  description: string;
  languages: {
    nodes: Language[];
  };
}

export interface Language {
  name: string;
  color: string;
}

export interface UserRepos {
  user: {
    pinnedItems: {
      nodes: Repo[];
    };
  };
}
