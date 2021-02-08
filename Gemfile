source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# basic
gem 'activerecord-import', '1.0.6'
gem 'counter_culture',     '2.2.3'
gem 'html2slim',           '0.2.0'
gem 'jbuilder',            '2.8.0'
gem 'kaminari',            '1.1.1'
gem 'puma',                '3.12.4'
gem 'rails',               '5.2.4.2'
gem 'redis-rails',         '5.0.2'
gem 'responders',          '2.4.0'
gem 'slim',                '4.0.1'
gem 'turbolinks',          '5.0.1'
gem 'uglifier',            '3.2.0'
gem 'pg',                  '~> 0.18'

# css
gem 'bootstrap',           '4.1.3'
gem 'font-awesome-sass',   '5.6.1'
gem 'frontend-generators', '0.2.0'
gem 'sassc-rails',         '2.1.2'

# js
gem 'popper_js',         '1.14.3'
gem 'jquery-rails',      '4.3.1'
gem 'jquery-turbolinks', '2.1.0'

# images
gem 'carrierwave',    '1.3.2'
gem 'lazyload-rails', '0.5.0'
gem 'mini_magick',    '4.9.5'

# authentication
gem 'devise',            '4.7.1'
gem 'omniauth',          '1.8.1'
gem 'omniauth-facebook', '5.0.0'
gem 'omniauth-twitter',  '1.4.0'

# security
gem 'invisible_captcha', '1.1.0'

# API
gem 'rspotify', '2.6.0'
gem 'google-api-client', '0.50.0'

# others
gem 'faker', '1.7.3'


group :development, :test do
  gem 'annotate', '2.7.4'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara',                 '~> 2.13'
  gem 'database_cleaner',         '1.7.0'
  gem 'factory_bot_rails',        '4.11.1'
  gem 'letter_opener_web',        '1.3.4'
  gem 'pry-byebug',               '3.6.0'
  gem 'pry-rails',                '0.3.9'
  gem 'pry-doc',                  '1.0.0'
  gem 'selenium-webdriver',       '3.141.0'
  gem 'rails-controller-testing', '1.0.4'
  gem 'rspec-rails',              '3.8.1'
  gem 'rspec-rerun',              '1.1.0'
  gem 'shoulda-matchers',         '3.1.2'
  gem 'simplecov',                '0.16.1'
  gem 'test-queue',               '0.4.2'
  gem 'webdrivers',               '3.9.1'
end

group :development do
  gem 'better_errors',         '2.5.0'
  gem 'binding_of_caller',     '0.8.0'
  gem 'brakeman',              '4.6.1'
  gem 'bullet',                '6.1.0'
  gem 'listen',                '3.1.5'
  gem 'rails-erd',             '1.5.2'
  gem 'spring',                '2.0.2'
  gem 'spring-commands-rspec', '1.0.4'
  gem 'spring-watcher-listen', '2.0.1'
  gem 'web-console',           '3.5.1'
end

group :production do
  gem 'fog-aws', '3.5.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
