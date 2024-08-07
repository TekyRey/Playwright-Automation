import { test, expect } from "@playwright/test";

test.describe("Sauce Demo Login Tests", () => {
  test("Successful Login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator(".title")).toContainText("Products");
  });
});
