import {test, expect} from '@playwright/test'

test('Demo login test 1', async({page}) => {
          await page.goto('https://demo.applitools.com/')
          await page.pause()
          await page.locator('#username').fill('Tomer')
          await page.locator('#password').fill('123456')
          await page.locator('#log-in').click()
          await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();
})