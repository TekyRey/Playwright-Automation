import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string) {
    await this.page.locator('input[type="email"]').fill(email);
    await this.page
      .locator("#modal-root")
      .getByRole("button", { name: "Sign in" })
      .click();
  }

  async confirmLogin() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}
