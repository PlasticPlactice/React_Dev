FROM php:8.0-fpm

# 必要なPHP拡張モジュールをインストール
RUN docker-php-ext-install mysqli pdo_mysql

RUN mkdir -p etc/mysql/conf.d

RUN touch etc/mysql/conf.d/my.cnf

COPY ./conf.d/my.cnf etc/mysql/conf.d/my.cnf

# COPY --chmod=644 ./conf.d/my.cnf /etc/mysql/conf.d/my.cnf

RUN chmod -R 644 etc/mysql/conf.d/my.cnf

# 作業ディレクトリを設定
WORKDIR /var/www/html