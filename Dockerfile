# Étape 1 : Build de l'application React (On passe sur l'image standard plus robuste)
FROM node:20 AS build
WORKDIR /app

# Copie uniquement le package.json
COPY package.json ./

# On force l'installation en ignorant les blocages de plateforme
RUN npm install --force

# Copie du reste du code source
COPY . .

# Définition des variables d'environnement de production
ARG VITE_HA_URL
ARG VITE_HA_TOKEN
ENV VITE_HA_URL=$VITE_HA_URL
ENV VITE_HA_TOKEN=$VITE_HA_TOKEN

# Compilation de l'application
RUN npm run build

# Étape 2 : Serveur web Nginx (On garde Alpine ici car elle est ultra-légère pour le livrer)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]