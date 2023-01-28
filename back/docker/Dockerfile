FROM ubuntu:18.04
MAINTAINER oscar_rivas <o.rivas.2017@alumnos.urjc.es>
ARG DEBIAN_FRONTEND=noninteractive

# install core packages
RUN apt-get update && apt-get install -y apt-transport-https
RUN apt-get -y install software-properties-common
RUN apt-get -y install fontconfig

# php7.4 repo
RUN add-apt-repository ppa:ondrej/php && apt-get -y update

# packages used by the backend
RUN apt-get -y install \
apache2 \
php7.4 \
libapache2-mod-php7.4 \
php7.4-mysql \
php7.4-curl \
php7.4-gd \
php7.4-intl \
php-pear \
php-imagick \
php7.4-imap \
php7.4-memcache  \
php7.4-pspell \
php7.4-sqlite3 \
php7.4-tidy \
php7.4-xmlrpc \
php7.4-xsl \
php7.4-mbstring \
php7.4-gettext \
php7.4-zip \
git \
curl \
tzdata \
vim

# Install Composer and make it available in the PATH
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# compiling scss
RUN apt-get update && apt-get -y install \
nodejs \
npm

# config apache
RUN a2dismod mpm_event && \
    a2enmod mpm_prefork \
            ssl \
            rewrite \
            headers && \
    a2ensite default-ssl

#upload
RUN echo "file_uploads = On\n" \
         "memory_limit = 500M\n" \
         "upload_max_filesize = 500M\n" \
         "post_max_size = 500M\n" \
         "max_execution_time = 600\n" \
         > /etc/php/7.4/cli/conf.d/uploads.ini

RUN sed -i 's/^ServerSignature/#ServerSignature/g' /etc/apache2/conf-enabled/security.conf; \
    sed -i 's/^ServerTokens/#ServerTokens/g' /etc/apache2/conf-enabled/security.conf; \
    echo "ServerSignature Off" >> /etc/apache2/conf-enabled/security.conf; \
    echo "ServerTokens Prod" >> /etc/apache2/conf-enabled/security.conf; \
    echo "SSLProtocol ALL -SSLv2 -SSLv3" >> /etc/apache2/apache2.conf
	
	
RUN echo $(pwd)
RUN echo $(ls)

ADD docker/000-default.conf /etc/apache2/sites-enabled/000-default.conf
#ADD alias.conf /etc/apache2/mods-enabled/alias.conf

ENV APACHE_RUN_USER usuario
ENV APACHE_RUN_GROUP usuario

#php errors log
RUN echo "error_reporting = E_ALL\n" \
         "logs_errors = On\n" \
         "error_log = /home/usuario/back/logs/error.apache.log\n" \
         > /etc/php/7.4/cli/conf.d/logerrors.ini

#Cleaning a little bt=it the container to make it slimmer.
#RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# create folders (/home/usuario and upload folders)
RUN useradd -ms /bin/bash usuario
RUN mkdir -p /mnt/efs/back/ && \
	chgrp -R www-data /mnt/efs/back && \
	chmod -R g+w /mnt/efs/back/

#chgrp -R www-data /mnt/efs/filigrane && \

#load fonts and update cache
#RUN ls /home/usuario
#COPY fonts/hpsimplified/* /usr/share/fonts/
#RUN fc-cache -f -v

WORKDIR /home/usuario

#We open port 80
EXPOSE 80

#We start Apache2 at the moment of starting the server
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
