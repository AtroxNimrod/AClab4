# Utilizați o imagine de bază Node.js
FROM node

# Setăm directorul de lucru în container
WORKDIR /app


# Copiem restul fișierelor proiectului în container
COPY . .

#instalăm dependețele
RUN npm install

# Expunem portul 3000 (sau portul utilizat în React)
EXPOSE 3000

# Comanda pentru a rula aplicația React
CMD ["npm", "start"]