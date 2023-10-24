import { test, expect } from '@playwright/test';

test.describe('All my tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Homepage', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^\$29\.99ADD TO CART$/ })
      .getByRole('button')
      .click();
  });

  test('Logout', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/index.html');
  });
});
