import { Page } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  async selectStakeOption() {
    await this.page
      .locator("div")
      .filter({
        hasText:
          /^Stake NAYM onlyEarn rewards with the native token of Nayms\.$/,
      })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string
  ) {
    await this.page
      .locator("fieldset")
      .filter({ hasText: "First Name *" })
      .getByRole("textbox")
      .fill(firstName);
    await this.page
      .locator("fieldset")
      .filter({ hasText: "Last Name *" })
      .getByRole("textbox")
      .fill(lastName);
    await this.page.locator('input[type="email"]').fill(email);
    await this.page.getByLabel("I agree to the Platform Terms").click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async confirmRegistration() {
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page
      .getByRole("button", { name: "Continue to Dashboard" })
      .click();
  }
}
