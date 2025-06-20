import { test, expect } from '@playwright/test';

const taskId = process.env.TASK_ID;
if (!taskId) throw new Error('Не указана переменная окружения TASK_ID');

test(`${taskId}`, async ({ page }) => {
  const fileName = `${taskId}.png`;
  await page.goto('./');
  await page.waitForSelector('.container');
  await expect(page).toHaveScreenshot(fileName, {
    fullPage: true,
    animations: 'disabled',
    maxDiffPixelRatio: 0.015,
  });
});
