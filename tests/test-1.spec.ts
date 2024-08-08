// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://app.testing2.naymsnext.com/');
//   await page.goto('https://app.testing2.naymsnext.com/opportunities');
//   await page.locator('#root div').filter({ hasText: 'You’re currently browsing' }).nth(1).click();
//   await page.locator('div').filter({ hasText: /^Stake NAYM onlyEarn rewards with the native token of Nayms\.$/ }).first().click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.locator('fieldset').filter({ hasText: 'First Name *' }).getByRole('textbox').click();
//   await page.locator('fieldset').filter({ hasText: 'First Name *' }).getByRole('textbox').press('CapsLock');
//   await page.locator('fieldset').filter({ hasText: 'First Name *' }).getByRole('textbox').fill('Rehems');
//   await page.locator('fieldset').filter({ hasText: 'Last Name *' }).getByRole('textbox').click();
//   await page.locator('fieldset').filter({ hasText: 'Last Name *' }).getByRole('textbox').press('CapsLock');
//   await page.locator('fieldset').filter({ hasText: 'Last Name *' }).getByRole('textbox').fill('Baya');
//   await page.locator('input[type="email"]').click();
//   await page.locator('input[type="email"]').fill('mwaka@gmail.com');
//   await page.getByLabel('I agree to the Platform Terms').click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByLabel('Character 1.').click();
//   await page.getByLabel('Character 1.').fill('1');
//   await page.getByLabel('Character 2.').fill('2');
//   await page.getByLabel('Character 3.').fill('3');
//   await page.getByLabel('Character 4.').fill('4');
//   await page.getByLabel('Character 5.').fill('5');
//   await page.getByLabel('Character 6.').fill('6');
//   await page.getByRole('button', { name: 'Continue' }).click();
// });