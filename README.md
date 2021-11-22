# Crash trigger app static site
#### Local development
´´´bash
docker run -it --rm  -d \
-p 8090:80 \
-v $(pwd):/usr/local/apache2/htdocs/ \
--workdir /usr/local/apache2/htdocs/ \
--name ${PWD##*/} \
httpd:2.4
´´´