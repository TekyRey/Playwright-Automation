import { Page } from "@playwright/test";

export class NaymsAppPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://app.testing2.naymsnext.com/");
  }

  async getTitle() {
    return this.page.title();
  }

  async clickInvestmentsLink() {
    await this.page.getByRole("link", { name: "Investments" }).click();
  }

  async isPortfolioSummaryVisible() {
    return this.page
      .getByRole("heading", { name: "Portfolio Summary" })
      .isVisible();
  }
}
