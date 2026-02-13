# Deploying to Hostinger (Static Site)

This guide explains how to deploy your SFDSPM landing page to Hostinger's Shared Hosting.

## Prerequisites
-   A Hostinger account with a Shared Hosting plan.
-   Access to the Hostinger hPanel.

## Step 1: Build the Project
Run the following command in your terminal:

```bash
npm install
npm run build
```

The project is configured with `output: "export"` in `next.config.ts`. This generates a static build in the `out` directory.

## Step 2: Prepare the Files
1.  Navigate to the `out` folder.
2.  Select all files and folders inside `out`.
3.  Zip them into a single file (e.g., `website.zip`).

## Step 3: Upload to Hostinger
1.  Log in to your [Hostinger hPanel](https://hpanel.hostinger.com/).
2.  Go to **Websites** and select your domain.
3.  Open the **File Manager**.
4.  Navigate to the `public_html` folder.
5.  Click the **Upload** icon and upload your `website.zip` file.
6.  Extract the zip file directly into `public_html`.
    -   *Ensure your `index.html` is at the root of `public_html`.*

## Step 4: Verify
Visit your domain in a browser.

## Optimization Notes
-   **Static Export**: Since the site is a static export, ensure all images use the `unoptimized: true` setting in `next.config.ts` (already configured).
-   **Forms**: The contact form uses EmailJS (client-side), so it functions perfectly on static hosting.

