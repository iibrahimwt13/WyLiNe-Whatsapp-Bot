FROM iibrahimwt13:latest

RUN git clone https://github.com/iibrahimwt13/Wyline-Whatsapp-Bot /root/Wyline-Whatsapp-Bot
WORKDIR /root/Wyline-Whatsapp-Bot/
ENV TZ=Europe/Istanbul
RUN apk add --update nodejs npm
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install supervisor -g
RUN npm install

CMD ["node", "qr.js"]
