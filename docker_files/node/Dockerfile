FROM node:12.20.0-alpine3.12
ARG uid

RUN apk add bash
WORKDIR /sources
EXPOSE 6001

COPY docker_files/node/start.sh /usr/local/bin/start
RUN chmod u+x  /usr/local/bin/start
RUN chown $uid:$uid  /usr/local/bin/start

USER $uid

CMD ["/usr/local/bin/start"]
