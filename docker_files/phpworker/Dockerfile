FROM auravitalii/promptchat:php

COPY docker_files/phpworker/start.sh /usr/local/bin/start

RUN chmod u+x /usr/local/bin/start

ARG uid

USER $uid

CMD ["/usr/local/bin/start"]

EXPOSE 22