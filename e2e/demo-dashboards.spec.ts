import { test, expect } from "@playwright/test";

test.describe("Restaurant Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo/restaurant");
    await page.waitForSelector("text=Bella Vita", { timeout: 15_000 });
  });

  test("loads dashboard with stat cards", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Bella Vita");
    await expect(page.locator("body")).toContainText("Revenue");
    await expect(page.locator("body")).toContainText("Orders");
  });

  test("does not show main site header", async ({ page }) => {
    // Demo pages have their own layout — main nav links like "Services" should not be visible
    await expect(page.locator("nav >> text=Services")).not.toBeVisible();
  });

  test("sidebar navigation to Tables page", async ({ page }) => {
    await page.getByRole("button", { name: /Tables/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("Available");
    await expect(page.locator("body")).toContainText("Occupied");
  });

  test("sidebar navigation to Kitchen page", async ({ page }) => {
    await page.getByRole("button", { name: /Kitchen/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("ORD-");
  });

  test("sidebar navigation to Orders page", async ({ page }) => {
    await page.getByRole("button", { name: /Orders/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("ORD-001");
  });

  test("Back to Rivendell link present", async ({ page }) => {
    await expect(page.locator("text=Back to Rivendell AI")).toBeVisible();
  });
});

test.describe("CRM Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo/crm");
    await page.waitForSelector("text=Dashboard", { timeout: 15_000 });
  });

  test("loads dashboard with stat cards", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Contacts");
    await expect(page.locator("body")).toContainText("Revenue");
  });

  test("sidebar navigation to Contacts page", async ({ page }) => {
    await page.getByRole("button", { name: /Contacts/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("Email");
  });

  test("sidebar navigation to Pipeline page", async ({ page }) => {
    await page.getByRole("button", { name: /Pipeline/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("Qualification");
  });

  test("Back to Rivendell link present", async ({ page }) => {
    await expect(page.locator("text=Back to Rivendell AI")).toBeVisible();
  });
});

test.describe("Inventory Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo/inventory");
    await page.waitForSelector("text=Dashboard", { timeout: 15_000 });
  });

  test("loads dashboard with stat cards", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Stock");
  });

  test("sidebar navigation to Products page", async ({ page }) => {
    await page.getByRole("button", { name: /Products/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("SKU");
  });

  test("sidebar navigation to Low Stock page", async ({ page }) => {
    await page.getByRole("button", { name: /Low Stock/i }).first().click();
    await page.waitForTimeout(300);
    // Low stock page should show severity or reorder info
    await expect(page.locator("body")).toContainText(/reorder|warning|critical/i);
  });

  test("Back to Rivendell link present", async ({ page }) => {
    await expect(page.locator("text=Back to Rivendell AI")).toBeVisible();
  });
});

test.describe("Booking Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo/booking");
    await page.waitForSelector("text=Luxe Salon", { timeout: 15_000 });
  });

  test("loads dashboard with stat cards", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Appointments");
  });

  test("sidebar navigation to Calendar page", async ({ page }) => {
    await page.getByRole("button", { name: /Calendar/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("Mon");
    await expect(page.locator("body")).toContainText("Tue");
  });

  test("sidebar navigation to Services page", async ({ page }) => {
    await page.getByRole("button", { name: /Services/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("Duration");
    await expect(page.locator("body")).toContainText("Price");
  });

  test("sidebar navigation to Appointments page", async ({ page }) => {
    await page.getByRole("button", { name: /Appointments/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText("APT-");
  });

  test("Back to Rivendell link present", async ({ page }) => {
    await expect(page.locator("text=Back to Rivendell AI")).toBeVisible();
  });
});

test.describe("Analytics Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo/analytics");
    await page.waitForSelector("text=Dashboard", { timeout: 15_000 });
  });

  test("loads dashboard with stat cards", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Visitors");
  });

  test("sidebar navigation to Data Sources page", async ({ page }) => {
    await page.getByRole("button", { name: /Data Sources/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText(/connected|disconnected/i);
  });

  test("sidebar navigation to Alerts page", async ({ page }) => {
    await page.getByRole("button", { name: /Alerts/i }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("body")).toContainText(/alert|anomaly|warning|critical/i);
  });

  test("Back to Rivendell link present", async ({ page }) => {
    await expect(page.locator("text=Back to Rivendell AI")).toBeVisible();
  });
});
