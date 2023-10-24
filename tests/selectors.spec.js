import {test, expect} from '@playwright/test'

test('Selectors Demo', async({page}) => {
          await page.goto('https://www.saucedemo.com/v1/')
          //OPEN PLAYWRIGHT INSPECTOR
          await page.pause()
          //PROPERTY
          await page.click('id=user-name')
          await page.locator('id=user-name').fill('Edison')
          //CSS
          await page.locator('#login-button').click()
          //XPATH
          await page.locator('//input[@name="password"]').fill('Faraday')
          //TEXT
          await page.locator('text=LOGIN').click();
          await page.locator('input:has-text("LOGIN")').click()
})