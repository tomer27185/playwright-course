import {test, expect, chromium} from '@playwright/test'

test('Slow motion and video recording demo', async() => {
          const browser = await chromium.launch({
                    slowMo: 500,
                    headless: false
          })
          const context = await browser.newContext({
                    recordVideo: {
                              dir: 'videos/',
                              size: {width: 800, height: 600}
                    }
          })
          const page = await context.newPage()
          await page.goto('https://demo.applitools.com/')
          await page.pause()
          await page.locator('#username').fill('Tomer')
          await page.locator('#password').fill('123456')
          await page.locator('#log-in').click()
          await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();
          await context.close()
})