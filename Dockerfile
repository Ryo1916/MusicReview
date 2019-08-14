FROM ruby:2.5-alpine as Builder
ENV LANG C.UTF-8
ENV APP_ROOT /opt/app
WORKDIR $APP_ROOT
COPY Gemfile* ./
RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add --update --no-cache alpine-sdk      \
                                 bash            \ 
                                 gmp-dev         \
                                 imagemagick     \
                                 less            \
                                 libxml2-dev     \
                                 libxslt-dev     \
                                 nodejs          \
                                 openssh         \
                                 postgresql      \
                                 postgresql-dev  \
                                 python2         \
                                 tzdata          \
                                 yaml            \
                                 yarn            \
  && gem install bundler \
  && bundle install --path vendor/bundle -j8
COPY . ./
RUN mkdir -p ./tmp/sockets \
  && bundle exec rake assets:precompile

# Expose volumes to nginx
VOLUME ./public && ./tmp

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Start the main process.
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]