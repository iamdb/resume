import fs from 'fs';
import { resolve } from 'path';
import type { UserRepos } from '../src/routes/+page.server';
import { Octokit } from '@octokit/core';
import yaml from 'yaml';

const octokit = new Octokit({ auth: process.env.VITE_GITHUB_TOKEN });

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
}`);

fs.writeFileSync(
	resolve('pandoc', 'github-repos.yaml'),
	yaml.stringify({ repos: repos.user.pinnedItems.nodes })
);
