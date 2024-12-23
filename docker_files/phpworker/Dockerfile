FROM auravitalii/promptchat:php3.1

ARG uid

COPY docker_files/phpworker/start.sh /usr/local/bin/start
RUN chmod u+x  /usr/local/bin/start
RUN chown $uid:$uid  /usr/local/bin/start
RUN mkdir -p /.composer
RUN chown $uid:$uid  /.composer  -R

USER $uid

CMD ["/usr/local/bin/start"]


EXPOSE 22
