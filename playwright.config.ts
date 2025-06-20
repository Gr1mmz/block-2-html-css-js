import { defineConfig } from '@playwright/test';

const pr = process.env.PR_NUMBER;
const repo = process.env.GITHUB_REPOSITORY;
const isCI = Boolean(process.env.CI);

if (!pr && isCI) throw new Error('Не передан PR_NUMBER');
if (!repo && isCI) throw new Error('Не передан GITHUB_REPOSITORY');

const [owner, repoName] = repo?.split('/') || [];
const baseURL = isCI
  ? `https://${owner}.github.io/${repoName}/pr-${pr}/`
  : 'http://localhost:8080/';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile',
      use: { viewport: { width: 475, height: 800 } },
    },
  ],
});
