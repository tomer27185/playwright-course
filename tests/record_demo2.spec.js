import { test, expect } from '@playwright/test';
const {chromium} = require('@playwright/test')

test('record demo 2' ,async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.getByText('Accepted usernames are: standard_user locked_out_user problem_user performance_g').click();
  await page.getByText('Accepted usernames are: standard_user locked_out_user problem_user performance_g').click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('[data-test="error"]').click();
  await page.locator('[data-test="error"]').click();

  // ---------------------
  await context.close();
  await browser.close();
});