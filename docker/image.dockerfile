FROM node:stable
RUN git clone git@github.com:Kamchatskiy/CV-Musaev.git
RUN cd CV-Musaev
RUN npm i
RUN npm run build
EXPOSE 15000
CMD ["serve" "-s" "-p" "15000"] 