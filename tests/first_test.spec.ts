import { test, expect } from "@playwright/test";

test.describe("Nayms App Tests", () => {
  // Hook to navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://app.testing2.naymsnext.com/");
  });

  test("has title", async ({ page }) => {
    // @ts-ignore: Unreachable code error
    test
      .info()
      .annotations.push({ type: "Test", description: "Check the page title" });
    test.info().annotations.push({ type: "tag", description: "title" });
    test.info().annotations.push({ type: "tag", description: "sanity" });

    // Expect the title to contain "Nayms"
    await expect(page).toHaveTitle(/Nayms/);
  });

  test("Investments link", async ({ page }) => {
    // @ts-ignore: Unreachable code error
    test
      .info()
      .annotations.push({
        type: "Test",
        description: "Check the Investments link",
      });
    test.info().annotations.push({ type: "tag", description: "navigation" });
    test.info().annotations.push({ type: "tag", description: "investments" });
    test.slow();


    // Click the Investments link
    await page.getByRole("link", { name: "Investments" }).click();

    // Expect the Portfolio Summary heading to be visible
    await expect(
      page.getByRole("heading", { name: "Portfolio Summary" })
    ).toBeVisible();
  });
});
