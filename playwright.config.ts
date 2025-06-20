import { defineConfig } from '@playwright/test';

const prNumber = process.env.PR_NUMBER;
const isCI = Boolean(process.env.CI);

if (!prNumber && isCI) {
  throw new Error('В CI среде необходимо передать PR_NUMBER как переменную окружения');
}

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: isCI
      ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/pr-${prNumber}`
      : 'http://localhost:8080',
    screenshot: 'only-on-failure',
  },
  // webServer убираем полностью
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
