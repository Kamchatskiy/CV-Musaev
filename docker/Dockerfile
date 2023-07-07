FROM node:latest
RUN apt-get update && apt-get install
RUN git clone https://github.com/Kamchatskiy/CV-Musaev.git
RUN mv CV-Musaev cv
RUN mv cv /home
WORKDIR /home/cv
RUN npm install
RUN npm run build
EXPOSE 15000
CMD ["node", "server.js"]