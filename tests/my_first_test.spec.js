const {test, expect} = require('@playwright/test')

test('My first test', async({page}) => {
          await page.goto('https://www.google.co.il/')
          await expect(page).toHaveTitle('Google')
})