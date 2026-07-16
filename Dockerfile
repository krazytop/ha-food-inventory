# Étape 1 : Build de l'application React
FROM node:20-alpine AS build
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm ci

# Copie du reste du code source
COPY . .

# Définition des variables d'environnement de production
# (Portainer pourra également les surcharger si besoin)
ARG VITE_HA_URL
ARG VITE_HA_TOKEN
ENV VITE_HA_URL=$VITE_HA_URL
ENV VITE_HA_TOKEN=$VITE_HA_TOKEN

# Compilation de l'application (génère le dossier /dist)
RUN npm run build

# Étape 2 : Serveur web Nginx pour la production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]