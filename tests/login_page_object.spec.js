import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/login'

let Login;

test.beforeEach(async ({page}) =>{
  Login = new LoginPage(page)
})

test('test', async ({ page}) => {
  await Login.gotoLoginPage();
  await Login.login('tomsmith', 'SuperSecretPassword!');
});
