import { test, expect } from '@playwright/test';

const taskId = process.env.TASK_ID;
if (!taskId) throw new Error('Не указана переменная окружения TASK_ID');

test(`${taskId}`, async ({ page }) => {
  await page.goto('/index.html');

  const fileName = `${taskId}.png`;

  await expect(page).toHaveScreenshot(fileName, {
    fullPage: true,
    animations: 'disabled',
  });
});
