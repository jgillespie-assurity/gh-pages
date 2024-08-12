import CustomWorld, { CustomWorldBeforeSetup } from "./world";
import { ChromiumBrowser, chromium } from "@playwright/test";
import {
  After,
  AfterAll,
  AfterStep,
  Before,
  BeforeAll,
  Status,
} from "@cucumber/cucumber";

let browser: ChromiumBrowser;
const headless: boolean = process.env.HEADLESS == "false" ? false : true;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: headless });
});

Before(async function (this: CustomWorldBeforeSetup) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

AfterStep(async function (this: CustomWorld, { result }) {
  if (result?.status == Status.FAILED || result?.status == Status.PASSED) {
    const img = await this.page.screenshot();
    await this.attach(img, "image/png");
  }
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
