import { World, setWorldConstructor } from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";

export interface CustomWorldBeforeSetup extends World {
  context?: BrowserContext;
  page?: Page;
}

export class TestWorld extends World implements CustomWorldBeforeSetup {}

setWorldConstructor(TestWorld);

export default interface CustomWorld extends CustomWorldBeforeSetup {
  context: BrowserContext;
  page: Page;
}