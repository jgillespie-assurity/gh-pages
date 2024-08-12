import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(30 * 1000);

Given("I am on the Playwright website", async function () {
  await this.page.goto("https://playwright.dev/");
});

When("I click the get started link", async function () {
  await this.page.getByRole("link", { name: "Get started" }).click();
});

Then("the title should contain {string}", async function (string) {
  await expect(this.page).toHaveTitle(new RegExp(string));
});

Then(
  "the page should have a heading with the name of {string}",
  async function (string) {
    await expect(
      this.page.getByRole("heading", { name: string })
    ).toBeVisible();
  }
);
