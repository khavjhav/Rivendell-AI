import { test, expect } from "@playwright/test";

// The app has a 2-second loading screen animation.
// Wait for it to finish by waiting for real page content to stabilize.
async function waitForApp(page: import("@playwright/test").Page) {
  // Wait for the loading screen text to disappear (it fades out after ~2s)
  await page.waitForFunction(
    () => {
      const els = document.querySelectorAll(".shimmer-text");
      // Loading screen h1 has shimmer-text class - wait for it to be gone
      return els.length === 0;
    },
    { timeout: 10_000 },
  ).catch(() => {
    // Loading screen might already be gone
  });
  await page.waitForTimeout(300);
}

test.describe("Main Site Pages", () => {
  test("Home page loads with hero content", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("Rivendell");
    await expect(page.locator("body")).toContainText("Intelligence");
  });

  test("Services page loads", async ({ page }) => {
    await page.goto("/services");
    await waitForApp(page);
    await expect(page.getByRole("heading", { level: 1 }).last()).toBeVisible();
  });

  test("Products (Armory) page loads with product cards", async ({ page }) => {
    await page.goto("/products");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("Armory");
  });

  test("Process page loads", async ({ page }) => {
    await page.goto("/process");
    await waitForApp(page);
    await expect(page.getByRole("heading", { level: 1 }).last()).toBeVisible();
  });

  test("About page loads", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("Our Story");
    await expect(page.locator("body")).toContainText("Guardians");
  });

  test("Pricing page loads", async ({ page }) => {
    await page.goto("/pricing");
    await waitForApp(page);
    await expect(page.getByRole("heading", { level: 1 }).last()).toBeVisible();
  });

  test("Portfolio page loads", async ({ page }) => {
    await page.goto("/portfolio");
    await waitForApp(page);
    await expect(page.getByRole("heading", { level: 1 }).last()).toBeVisible();
  });

  test("Contact page loads with form", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    await expect(page.getByRole("heading", { level: 1 }).last()).toBeVisible();
    await expect(page.locator("input").first()).toBeVisible();
  });

  test("Privacy page loads", async ({ page }) => {
    await page.goto("/privacy");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("Privacy");
  });

  test("GDPR page loads", async ({ page }) => {
    await page.goto("/gdpr");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("GDPR");
  });

  test("Terms page loads", async ({ page }) => {
    await page.goto("/terms");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("Terms");
  });

  test("404 page shown for unknown routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await waitForApp(page);
    await expect(page.locator("body")).toContainText("404");
  });
});

test.describe("Navigation", () => {
  test("Armory nav link navigates to Products page", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await page.getByRole("link", { name: "Armory" }).first().click();
    await expect(page).toHaveURL(/\/products/);
    await expect(page.locator("body")).toContainText("Armory");
  });

  test("Header navigation has expected links", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    // Check a few key nav links exist
    for (const link of ["Armory", "Contact"]) {
      await expect(page.getByRole("link", { name: link }).first()).toBeVisible();
    }
  });

  test("Footer is visible with links", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await expect(page.getByRole("link", { name: "Privacy Policy" }).first()).toBeVisible();
  });
});
