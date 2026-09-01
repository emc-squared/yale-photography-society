# Yale Photography Society website

Plain HTML/CSS/JS — no build step, no framework. Open any `.html` file
directly in a browser to preview, or follow the steps below to get it live
on the web for free.

## Files

```
index.html        Home
board.html        Board
featured.html     Featured
archive.html      Monthly Competition Archive (placeholder)
interviews.html   Interviews (placeholder)
commercial.html   Commercial (placeholder)
join.html         Join us
css/style.css     All styling
js/main.js        Mobile nav toggle + mailing list form handling
```

## 1. Push to GitHub

If you don't already have a repo for this:

```bash
cd site
git init
git add .
git commit -m "Initial site"
gh repo create yale-photography-society --public --source=. --push
```

(No `gh` CLI? Create an empty repo on github.com first, then:)

```bash
git remote add origin https://github.com/YOUR-USERNAME/yale-photography-society.git
git branch -M main
git push -u origin main
```

## 2. Turn on GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)`. Save.
4. GitHub gives you a URL like `https://YOUR-USERNAME.github.io/yale-photography-society/`
   within a minute or two.

This is enough to have a live, shareable site with no custom domain yet —
there's no need to buy a domain before this step.

## 3. Custom domain (later, optional)

When you're ready:

1. Buy a domain (Namecheap, Google Domains successor Squarespace Domains, etc).
2. In the domain's DNS settings, add a `CNAME` record pointing to
   `YOUR-USERNAME.github.io`.
3. Back in your repo's **Settings → Pages**, enter the custom domain and save
   — GitHub creates a `CNAME` file in your repo automatically.
4. Wait for DNS to propagate (can take a few hours) and check "Enforce HTTPS"
   once it's available.

## Things to swap in before launch

- **Photos** — every `<div class="img-placeholder">` is a stand-in. Replace
  with `<img src="images/your-photo.jpg" alt="...">`, keeping the same
  wrapping element so sizing stays consistent. Put image files in `images/`.
- **Board page** (`board.html`) — one `.board-member` block per person: name,
  role, class year, specialty tag, headshot.
- **Featured page** (`featured.html`) — one `.featured-item` block per photo,
  update the season label in the page header each time you rotate it.
- **Contact email** — currently `yalephotographysociety@yale.edu` in every
  page's footer. Find-and-replace across all files if it should be different.
- **Join us button** — the `href="#"` on the Sign up button in `join.html`
  needs your actual form link (Google Form, Yale Connect, etc).
- **Mailing list form** — right now the footer form only validates the email
  client-side and shows a thank-you message; it doesn't send anywhere yet.
  Easiest options to wire it up for real:
  - **Google Forms**: create a form with one email question, then point the
    `<form>`'s `action` at the form's submit URL (or just link to the Google
    Form directly instead of a custom input).
  - **Mailchimp / ConvertKit**: they give you an embeddable form snippet you
    can drop in place of the current one, or an action URL to point this
    form at.

## Editing later

Since there's no build step, editing is just: open the `.html` file, change
the text or markup, save, and refresh your browser to preview. Push to
`main` on GitHub and the live site updates automatically within a minute.
