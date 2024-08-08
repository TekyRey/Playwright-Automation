import { Page } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}

  async signOut() {
    await this.page.getByRole("button", { name: "User menu" }).click();
    await this.page
      .locator("div")
      .filter({ hasText: /^Sign out$/ })
      .click();
  }
}
