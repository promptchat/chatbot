FROM auravitalii/promptchat:php

COPY docker_files/phpworker/start.sh /usr/local/bin/start

RUN chown www-data:www-data /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

USER www-data

CMD ["/usr/local/bin/start"]

EXPOSE 22