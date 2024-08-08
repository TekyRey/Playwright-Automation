import { test, expect } from "@playwright/test";

test.describe("Nayms demo app Tests", () => {
  // Registering yourself as a client on Nayms
  test("Registering yourself as a client on Nayms", async ({ page }) => {
    test.slow(); // Marks the test as slow
    await page.goto("https://app.testing2.naymsnext.com/");
    await page.getByRole("button", { name: "Register" }).click();
    await page
      .locator("div")
      .filter({
        hasText:
          /^Stake NAYM onlyEarn rewards with the native token of Nayms\.$/,
      })
      .first()
      .click();
    await page.getByRole("button", { name: "Continue" }).click();
    await page
      .locator("fieldset")
      .filter({ hasText: "First Name *" })
      .getByRole("textbox")
      .click();
    await page
      .locator("fieldset")
      .filter({ hasText: "First Name *" })
      .getByRole("textbox")
      .fill("Rehema");
    await page
      .locator("fieldset")
      .filter({ hasText: "Last Name *" })
      .getByRole("textbox")
      .click();
    await page
      .locator("fieldset")
      .filter({ hasText: "Last Name *" })
      .getByRole("textbox")
      .fill("Playwrighttest4TokenHolderAug8");
    await page.locator('input[type="email"]').click();
    await page
      .locator('input[type="email"]')
      .fill("mwakabayah+Playwrighttest4TokenHolderAug8@gmail.com");
    await page.getByLabel("I agree to the Platform Terms").click();
    await page.getByRole("button", { name: "Continue" }).click();

    // pause to wait for me to enter OTP manually
    await page.pause();

    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Continue to Dashboard" }).click();

    // Ensure registration is successful
    await expect(page).toHaveURL("https://app.testing2.naymsnext.com/token");
  });

  // Login to your account
  test("Login to your account", async ({ page }) => {
    test.slow(); // Marks the test as slow
    await page.goto("https://app.testing2.naymsnext.com/");
    await page.getByRole("button", { name: "Sign in" }).click();

    await page
      .locator('input[type="email"]')
      .fill("mwakabayah+Playwrighttest4TokenHolderAug8@gmail.com");
    await page
      .locator("#modal-root")
      .getByRole("button", { name: "Sign in" })
      .click();

    // pause to wait for me to enter OTP manually
    await page.pause();

    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page).toHaveURL("https://app.testing2.naymsnext.com/token");

    await page.getByRole("button", { name: "User menu" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Sign out$/ })
      .click();

    // page should have register button
    await expect(
      page
        .locator("button")
        .filter({ hasText: /^Register$/ })
        .first()
    ).toBeVisible();
  });
});
