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

1. Create a GitHub repo named `pius-lab`
2. In `next.config.js` confirm `basePath: '/pius-lab'` matches your repo name
3. Push:
```bash
git init && git add .
git commit -m "Initial PIUS Lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pius-lab.git
git push -u origin main
```
4. Repo Settings → Pages → Source: **GitHub Actions**

Live at: `https://YOUR-USERNAME.github.io/pius-lab`

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
