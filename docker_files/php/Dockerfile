FROM auravitalii/promptchat:php2.3
COPY ${PWD}/php.ini  /usr/local/etc/php/
ARG uid
RUN usermod -u $uid www-data; exit 0

EXPOSE 22
