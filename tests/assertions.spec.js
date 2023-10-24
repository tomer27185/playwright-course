import test, {page, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {
          await page.goto('https://kitchen.applitools.com/')
          // await page.pause()
          //CHECK ELEMENT PRESENT OR NOT
          await expect(page.locator('text=The Kitchen')).toHaveCount(1)
          //CONDITION WITH $
          if(await page.$('text=The Kitchen')){
                    page.locator('text=The Kitchen').click()
          }
          //CHECK ELEMENT HIDDEN OR VISIBLE
          await expect(page.locator('text=The Kitchen')).toBeVisible()
          //SOFT ASSERTIONS NOT STOP THE RUN AND CONTINUE TO NEXT STEP
          // await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
          //CHECK ELEMENT ENABLED OR DISABLED
          await expect(page.locator('text=The Kitchen')).toBeEnabled()
          // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
          //HAVE TEXT
          await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
          //HAVE ELEMENT ATTRIBUTE with REGEX
          await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*chakra-heading/)
          //PAGE HAVE URL and TITLE
          await expect(page).toHaveURL('https://kitchen.applitools.com/')
          await expect(page).toHaveTitle('The Kitchen')
          //VISIUAL VALIDATION WITH SCREENSHOT
          await expect(page).toHaveScreenshot()
})