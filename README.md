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

```sh
./deploy/deploy.sh <droplet-ip>
```

Requires the `armantech_deploy` SSH key (`~/.ssh/armantech_deploy`).

## DNS (Cloudflare)

Point these records at the droplet IP (proxied ☁️):

| Type | Name | Content       |
|------|------|---------------|
| A    | @    | `<droplet-ip>` |
| A    | www  | `<droplet-ip>` |

With Cloudflare proxy enabled, set SSL/TLS mode to **Flexible** (origin serves HTTP)
or install a Cloudflare Origin Certificate on the droplet and use **Full (strict)**.
