# Utilizați o imagine de bază Node.js
FROM node

# Setăm directorul de lucru în container
WORKDIR /app

# Copiem fișierele pachetelor (package.json și package-lock.json) în container
# COPY package*.json ./

# RUN npm install

# Instalăm dependințele


# Copiem restul fișierelor proiectului în container
COPY . .

RUN npm install

# Expunem portul 3000 (sau portul pe care îl utilizați în aplicația React)
EXPOSE 3000

# Comanda pentru a rula aplicația React
CMD ["npm", "start"]