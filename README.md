This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Calendly
​
Email : ga.wildcode@gmail.com
Mot de passe : gil3004uqu
​
## Code Source de l'appli
​
Lien : https://github.com/Babily-github-account/lyon-js-sept2020-p3-babily-front-office
​
Username : Babily-github-account
Mot de passe : gil3004uqu
​
### Déploiement de l'application sur un serveur privé
​
## Choisir un serveur et un nom de domaine 
​
* Le choix du provider est libre, cependant il est recommandé de disposer d'au moins un 1 Go de Ram et 30 Go d'espace de stockage . [La procédure suivante a été testée sur ce VPS (ubuntu 20.04)](https://us.ovh.com/us/order/vps/?v=3#/vps/build?selection=~(range~'Essential~pricingMode~'default~flavor~'vps-essential-2-4-80~os~'ubuntu_20_04~datacenters~(SBG~1)))
* Acheter un nom de domaine et le faire pointer sur l'adresse du serveur (il sera référencé dans ce document sous l'alias [NOM DE DOMAINE])
​
​
## Installer Docker sur le serveur :
​
Se connecter en SSH au serveur sous ubuntu, puis tapez les commandes suivantes
​
```bash
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
    ufw
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo usermod -aG docker $USER
newgrp docker 
```
​
## Installation [Caprover](https://caprover.com/docs/get-started.html) :
​
```
sudo ufw allow 80,443,3000,996,7946,4789,2377/tcp; sudo ufw allow 7946,4789,2377/udp;
docker run -p 80:80 -p 443:443 -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover
```
​
Attendre 60 secondes
​
* Aller à l'adresse : http://[NOM DE DOMAINE]:3000/
* Mot de passe : captain42
* Aller à "settings" -> change password (et changez le mot de passe)
* Aller sur le dashboard, section "CapRover Root Domain Configurations", mettre [NOM DE DOMAINE] dans l'input et cliquer sur "update domain", se relogger et cliquer sur "enable https" puis "Force https".
​
### Créer le front-office
  - Caprover > Apps > entrer "front-office" dans l'input, cliquer sur le bouton "Create New App"
  - aller sur l'app "front-office"
  - onglet http settings : cliquer sur "Enable HTTPS", dans l'input "Container HTTP Port" mettre 80,  cocher "Force HTTPS by redirecting all HTTP traffic to HTTPS", cliquer sur "Save & Update"
  - onglet http settings : à coté du bouton "connect new domain", remplir l'input avec [NOM DE DOMAINE] et cliquer sur le bouton puis sur "enable HTTPS".
  - onglet App Configs, Environmental Variables: cocher "bulk edit" et copier : REACT_APP_API_BASE_URL=https://<span>api.[NOM DE DOMAINE]</span>
  - "Save & Update"
  - onglet "Deployement"
  - aller à la section Method 3: Deploy from Github/Bitbucket/Gitlab
  - Repository : https://github.com/fl-lyonnais-dev/fl-lyonnais-front-office
  - Branch : main
  - Username : [GH_USER]
  - Password : [GH_PASSWORD]
  - "Save & Update"
  - copier la valeur du champs apparu dans "Method 3: Deploy from Github/Bitbucket/Gitlab"
  - aller sur https://github.com/fl-lyonnais-dev/fl-lyonnais-front-office/settings/hooks
  - cliquer sur "add webhook"
  - coller la valeur de l'input copiée précédement dans le champs Payload URL de github, cliquer sur le bouton vert "Add webhook".
