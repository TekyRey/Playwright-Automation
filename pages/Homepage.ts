import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://app.testing2.naymsnext.com/");
  }

  async clickRegister() {
    await this.page.getByRole("button", { name: "Register" }).click();
  }

  async clickSignIn() {
    await this.page.getByRole("button", { name: "Sign in" }).click();
  }
}
