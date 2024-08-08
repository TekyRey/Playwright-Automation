import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/Homepage";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";

test.describe("Nayms demo app Tests", () => {
  test("Registering yourself as a client on Nayms", async ({ page }) => {
    test.slow();

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    await homePage.navigate();
    await homePage.clickRegister();
    await registerPage.selectStakeOption();
    await registerPage.fillRegistrationForm(
      "Rehema",
      "Playwrighttest6TokenHolderAug8",
      "mwakabayah+Playwrighttest6TokenHolderAug8@gmail.com"
    );

    // Pause for manual OTP entry
    await page.pause();

    await registerPage.confirmRegistration();

    await expect(page).toHaveURL("https://app.testing2.naymsnext.com/token");
  });

  test("Login to your account", async ({ page }) => {
    test.slow();

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await homePage.navigate();
    await homePage.clickSignIn();
    await loginPage.login(
      "mwakabayah+Playwrighttest4TokenHolderAug8@gmail.com"
    );

    // Pause for manual OTP entry
    await page.pause();

    await loginPage.confirmLogin();

    await expect(page).toHaveURL("https://app.testing2.naymsnext.com/token");

    await dashboardPage.signOut();

    await expect(
      page
        .locator("button")
        .filter({ hasText: /^Register$/ })
        .first()
    ).toBeVisible();
  });
});
