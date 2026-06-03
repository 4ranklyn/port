import { test, expect } from '@playwright/test';

test.describe('NFC Minimalist Portfolio Tests', () => {

  test('Metadata & Headings check', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Title matches
    await expect(page).toHaveTitle(/Proximity Protocol/);

    // Hero headline exists
    const hero = page.locator('#hero h1');
    await expect(hero).toContainText('Logic-Driven');

    // NFC Touchpoint notice verified
    const alert = page.locator('#proximity-header p');
    await expect(alert).toContainText('because of NFC');
  });

  test('Dynamic Script execution - session year populator', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // System Year populated correctly
    const yearSpan = page.locator('#session-year');
    const currentYear = new Date().getFullYear().toString();
    await expect(yearSpan).toHaveText(currentYear);
  });

  test('Responsive viewports check & link validity', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000');

    // Email link structure
    const emailLink = page.locator('#link-email');
    await expect(emailLink).toHaveAttribute('href', /^mailto:/);

    // Instagram link structure
    const instagramLink = page.locator('#link-instagram');
    await expect(instagramLink).toHaveAttribute('href', /^https:\/\/instagram.com/);
  });
});
