// record sauce demo login test

import { test, expect } from "@playwright/test";

test("Login user on sauce demo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    
    // Enter the username and password
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    
    // Click the login button
    await page.click('[data-test="login-button"]');
    
    // Expects page to have a heading with the name of Products.
    await expect(page).toHaveTitle(/Swag Labs/);
    
    
});

