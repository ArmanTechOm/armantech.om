# armantech.om

Landing page for **ArmanTech** — software development & AI consulting, Muscat, Oman.

Bilingual (English / العربية) static site with full RTL support. No build step.

## Structure

- `site/` — the static site (HTML/CSS/JS, self-contained)
- `deploy/nginx-armantech.conf` — nginx server block used on the droplet
- `deploy/deploy.sh` — rsync-based deploy script

## Local preview

```sh
cd site && python3 -m http.server 8080
```

## Deploy

The site runs on a DigitalOcean droplet (nginx, Ubuntu) behind Cloudflare.

**Push to `main` on GitHub (`ArmanTechOm/armantech.om`) — that's the deploy.**
A cron on the droplet (`/etc/cron.d/armantech-deploy`) pulls `main` and syncs
`site/` to `/var/www/armantech/` every 5 minutes.

Do NOT use `./deploy/deploy.sh` for the site — the cron overwrites whatever it
uploads within minutes. It remains only for pushing nginx config changes
(`deploy/nginx-armantech.conf`), which the cron does not manage.

SSH access uses the `armantech_deploy` key (`~/.ssh/armantech_deploy`).

## DNS (Cloudflare)

Point these records at the droplet IP (proxied ☁️):

| Type | Name | Content       |
|------|------|---------------|
| A    | @    | `143.110.182.73` |
| A    | www  | `143.110.182.73` |

With Cloudflare proxy enabled, set SSL/TLS mode to **Flexible** (origin serves HTTP)
or install a Cloudflare Origin Certificate on the droplet and use **Full (strict)**.
