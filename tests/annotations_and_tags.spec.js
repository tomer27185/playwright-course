import { test } from '@playwright/test';

//SKIP
test.skip('Test One', async ({ page }) => {});

//MARK AS FAIL
test('not ready yet', async ({ page }) => {
  test.fail();
});

//MARK AS FIXING. TEST WILL BE ABORTED
test.fixme('test to be fixed', async ({ page }) => {});

//MARK AS SLOW AND TRIPPELS THE TEST TIMEOUT
test('slow test', async ({ page }) => {
  test.slow();
});

//RUN SPECIFIC TEST
// test.only('run only this test', async ({ page }) => {});

//SKIP CONDITIONALLY
test('skip this test in case browser is firefox', async ({
  page,
  browserName,
}) => {
  test.skip(browserName === 'firefox', 'still working on firefox');
});

//RUN TEST BY TAG @ in terminal with --grep "@sanity" or skip the test with --grep-invert "@smoke"
test('tag test @sanity', async ({ page }) => {});
