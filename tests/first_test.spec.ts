import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://app.testing2.naymsnext.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Nayms/);
});

test("Investments link", async ({ page }) => {
  await page.goto("https://app.testing2.naymsnext.com/");

  // Click the get started link.
  await page.getByRole("link", { name: "Investments" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Portfolio Summarukfmcgnjhrsyy" })
  ).toBeVisible();
});
