import { test, expect } from "@playwright/test";

test.describe("Nayms demo app Tests", () => {
  // Increase timeout for each test to 5 minutes
  //   test.setTimeout(30000);

  // Registering yourself as a client on Nayms
  test("Registering yourself as a client on Nayms", async ({ page }) => {
    await page.goto("https://app.testing2.naymsnext.com/");
    test.slow(); //default is 90 seconds
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
    //   wait for OTP 1 minute
    // pause to wait for me to enter OTP manually
    await page.pause();

    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Continue to Dashboard" }).click();
    // await page.getByRole("button", { name: "Connect to Wallet " }).click();
    // await page.getByRole("button", { name: "Metamask " }).click();
    // await page.pause();
    // Wait for the OTP email and enter OTP
    // This part needs implementation for OTP retrieval
    // Example:
    // const otp = await getOtpFromEmail();
    // await page.fill('#otp', otp);
    // await page.click('#verifyOtpButton');

    // Ensure registration is successful
    await expect(page).toHaveURL(
      "https://app.testing2.naymsnext.com/token"
    );
  });

  // Login to your account
  //   test("Login to your account", async ({ page }) => {
  //     await page.goto("https://app.testing2.naymsnext.com/login");

  //     await page.fill("#email", "test@example.com");
  //     await page.fill("#password", "TestPassword123!");
  //     await page.click("#loginButton");

  //     await expect(page).toHaveURL(
  //       "https://app.testing2.naymsnext.com/dashboard"
  //     );
  //   });

  // Homepage verification for non-investors
  //   test("Homepage verification for non-investors", async ({ page }) => {
  //     await page.goto("https://app.testing2.naymsnext.com/login");

  //     await page.fill("#email", "noninvestor@example.com");
  //     await page.fill("#password", "TestPassword123!");
  //     await page.click("#loginButton");

  //     await expect(page).toHaveURL(
  //       "https://app.testing2.naymsnext.com/dashboard"
  //     );
  //     await expect(page.locator("text=Welcome, non-investor")).toBeVisible();
  //     // Add more verifications as needed
  //   });

  // Homepage investors verification
  //   test("Homepage investors verification", async ({ page }) => {
  //     await page.goto("https://app.testing2.naymsnext.com/login");

  //     await page.fill("#email", "investor@example.com");
  //     await page.fill("#password", "TestPassword123!");
  //     await page.click("#loginButton");

  //     await expect(page).toHaveURL(
  //       "https://app.testing2.naymsnext.com/dashboard"
  //     );
  //     await expect(page.locator("text=Welcome, investor")).toBeVisible();
  //     // Add more verifications as needed
  //   });

  // Logout
  //   test("Logout", async ({ page }) => {
  //     await page.goto("https://app.testing2.naymsnext.com/login");

  //     await page.fill("#email", "test@example.com");
  //     await page.fill("#password", "TestPassword123!");
  //     await page.click("#loginButton");

  //     await expect(page).toHaveURL(
  //       "https://app.testing2.naymsnext.com/dashboard"
  //     );

  //     await page.click("#logoutButton");
  //     await expect(page).toHaveURL("https://app.testing2.naymsnext.com/login");
  //   });
});
