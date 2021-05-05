FROM auravitalii/promptchat:php2.3

COPY docker_files/phpworker/start.sh /usr/local/bin/start

RUN chmod u+x /usr/local/bin/start
RUN usermod -u $uid www-data;
CMD ["/usr/local/bin/start"]


EXPOSE 22
