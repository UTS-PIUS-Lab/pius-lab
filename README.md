# PIUS Lab — Next.js + Tailwind CSS + GitHub Pages

## Run locally on Mac

```bash
cd pius-lab
npm install
npm run dev
# Open http://localhost:3000/pius-lab
# (next.config.js sets basePath: '/pius-lab', which applies in dev too —
#  the bare root http://localhost:3000 will 404)
```

## Deploy to GitHub Pages

Already set up and deployed at:

**https://debritbhattacharyya-cmd.github.io/pius-lab**

Repo: https://github.com/debritbhattacharyya-cmd/pius-lab

Every push to `main` re-runs `.github/workflows/deploy.yml`, which builds the site and redeploys automatically — no manual steps needed for content updates.

> **Note:** the repo must stay **public** for Pages to work. GitHub's free plan only publishes Pages sites from public repos — a private repo needs GitHub Pro (or Team/Enterprise) to deploy.

### Setting this up from scratch (e.g. forking to a new repo)

1. Create a GitHub repo (any name)
2. In `next.config.js` set `basePath` to match your repo name
3. Push:
```bash
git init && git add .
git commit -m "Initial PIUS Lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
4. Repo Settings → Pages → Source: **GitHub Actions**

Live at: `https://YOUR-USERNAME.github.io/YOUR-REPO`

## Updating Content — just edit src/data/ files

| File | What to edit |
|------|-------------|
| `site.js` | Lab name, email, address, social links |
| `research.js` | Research areas |
| `projects.js` | Projects & awards |
| `team.js` | Team, alumni, advisory |
| `news.js` | News posts |
| `gifs/` | Homepage research-card GIFs — replace a file, keep its filename |
| `video/` | Homepage background video — drop in a single `.mp4`, any filename |
