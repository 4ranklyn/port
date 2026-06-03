# Proximity Protocol — System Portfolio

A minimalist, high-signal, monochrome single-page portfolio optimized for mobile viewports via a physical NFC trigger handshake.

## Design Architecture

* **Theme**: Monochrome (#fafafa background with #0a0a0a ink text). Generous whitespace and premium typography (Inter & JetBrains Mono) over visual clutter.
* **Proximity Header**: A monospace protocol system alert noting physical NFC arrival with an ambient pulsing status indicator.
* **Hero**: Bold typography outlining core system engineering paradigms.
* **Media Frame**: Grayscale-to-color transition snap window linking to a public photo streaming stream.
* **Artifacts**: Staggered cards displaying technical domains.
* **Footer**: Contact links with animated underline micro-interactions.

## Tech Stack

* **Structure**: HTML5 Semantic Markup
* **Styling**: Tailwind CSS (Utility-First)
* **Fonts**: Inter (Sans-serif) & JetBrains Mono (Monospace)
* **Testing**: Playwright (E2E Integration Testing)

## Running Locally

1. **Serve the project**:
   ```bash
   npx serve -l 3000
   ```
2. **Access the site**: Open `http://localhost:3000` in your browser.

## Testing & Verification

Automated browser and viewport checks are configured using Playwright.

1. **Run the test suite**:
   ```bash
   npx playwright test portfolio.spec.js
   ```
