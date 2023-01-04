# Project base
FROM node:18 AS production_client

# Variables d'environnement dans docker 
ENV REACT_ENV=production_client

# Creation de dossier
WORKDIR /usr/src/commercial-app/client

# Copy des package requis
COPY package*.json ./

# Production code
RUN npm ci --only=production

# Copie de tout les fichiers dans le directory
COPY . .

#Ouverture des ports
EXPOSE 5173

CMD ["npm","start"]