import { test, expect } from "@playwright/test";
import { NaymsAppPage } from "../pages/NaymsAppPage";

test.describe("Nayms App Tests", () => {
  let naymsApp: NaymsAppPage;

  // Hook to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    naymsApp = new NaymsAppPage(page);
    await naymsApp.goto();
  });

  test("has title", async () => {
    test
      .info()
      .annotations.push({ type: "Test", description: "Check the page title" });
    test.info().annotations.push({ type: "tag", description: "title" });
    test.info().annotations.push({ type: "tag", description: "sanity" });

    // Expect the title to contain "Nayms"
    await expect(await naymsApp.getTitle()).toContain("Nayms");
  });

  test("Investments link", async () => {
    test
      .info()
      .annotations.push({
        type: "Test",
        description: "Check the Investments link",
      });
    test.info().annotations.push({ type: "tag", description: "navigation" });
    test.info().annotations.push({ type: "tag", description: "investments" });
    test.slow(); //default is 90 seconds

    // Click the Investments link
    await naymsApp.clickInvestmentsLink();

    // Expect the Portfolio Summary heading to be visible
    await expect(await naymsApp.isPortfolioSummaryVisible()).toBe(true);
  });
});
