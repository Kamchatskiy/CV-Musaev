FROM node:latest
RUN git clone https://github.com/Kamchatskiy/CV-Musaev.git
RUN mv CV-Musaev cv
RUN mv cv /home
WORKDIR /home/cv
RUN npm install
RUN npm run build
EXPOSE 15000
CMD ["serve" "-s" "-p" "15000" "build"]