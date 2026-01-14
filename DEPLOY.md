# Deploying to Hostinger (Static Site)

This guide explains how to deploy your SFDSPM landing page to Hostinger's Shared Hosting.

## Prerequisites
-   A Hostinger account with a Shared Hosting plan.
-   Access to the Hostinger hPanel.

## Step 1: Build the Project
Run the following command in your terminal to generate the static files:

```bash
npm run build
```

This will create a new folder named `out` in your project directory. This folder contains your entire website (HTML, CSS, JS, and images).

## Step 2: Prepare the Files
1.  Navigate to the `out` folder.
2.  Select all files and folders inside `out`.
3.  Zip them into a single file (e.g., `website.zip`).

## Step 3: Upload to Hostinger
1.  Log in to your [Hostinger hPanel](https://hpanel.hostinger.com/).
2.  Go to **Websites** and select your domain (dashboard).
3.  Open the **File Manager**.
4.  Navigate to the `public_html` folder.
    -   *Note: If there is a default `default.php` file, you can delete it.*
5.  Click the **Upload** icon and upload your `website.zip` file.
6.  Right-click the uploaded zip file and select **Extract**.
7.  Ensure the extracted files are directly inside `public_html` (not inside a subfolder like `out` or `website`).
    -   *If they are in a subfolder, enter the folder, select all, move them to `/public_html`.*

## Step 4: Verify
Visit your domain in a web browser. You should see your live site!

## Troubleshooting
-   **Images not loading?** Ensure you configured `images: { unoptimized: true }` in `next.config.ts`.
-   **404 on refresh?** Since this is a static site, all routing is handled via `index.html`. If you use dynamic routes, you might need an `.htaccess` file, but for a single-page landing site, it should work out of the box.
