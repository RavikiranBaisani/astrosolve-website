# AstroSolve Website

Static website for AstroSolve, ready to deploy on GitHub Pages.

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

1. Push changes to the `master` branch.
2. In GitHub, open repository **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. The workflow will publish the static site to GitHub Pages.

The custom domain is configured through `CNAME`:

```text
astrosolve.co
```

Until DNS finishes propagating, the fallback Pages URL should be:

```text
https://ravikiranbaisani.github.io/astropandit-website/
```

## Google Forms Integration

The astrologer waitlist form is wired for Google Forms submission through a hidden iframe, which works on GitHub Pages without a backend.

The current form posts to:

```text
https://docs.google.com/forms/d/e/1FAIpQLSesrsOXlodSJ8a2I_BdZdYTc2P0dJsC3BX1YLH6iH74ACGVKg/formResponse
```

Field mapping:

- `entry.326998931` for name
- `entry.299157188` for phone
- `entry.1479090337` for email
- `entry.2084226975` for primary expertise

Google Forms field names look like `entry.123456789`. If the Google Form fields are changed, regenerate a prefilled link and update these values.
