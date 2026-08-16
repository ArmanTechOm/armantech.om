#!/usr/bin/env bash
# Deploy armantech.om to the droplet.
# Usage: ./deploy/deploy.sh <droplet-ip>
set -euo pipefail

IP="${1:?Usage: deploy.sh <droplet-ip>}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/armantech_deploy}"
SSH_OPTS=(-i "$SSH_KEY" -o StrictHostKeyChecking=accept-new)

echo "→ Syncing site files to $IP..."
rsync -az --delete -e "ssh ${SSH_OPTS[*]}" site/ "root@$IP:/var/www/armantech/"

echo "→ Updating nginx config..."
scp "${SSH_OPTS[@]}" deploy/nginx-armantech.conf "root@$IP:/etc/nginx/sites-available/armantech"
ssh "${SSH_OPTS[@]}" "root@$IP" '
  ln -sf /etc/nginx/sites-available/armantech /etc/nginx/sites-enabled/armantech
  rm -f /etc/nginx/sites-enabled/default
  nginx -t && systemctl reload nginx
'

echo "✓ Deployed: http://$IP"
