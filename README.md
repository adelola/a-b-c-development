# README

#####Installing Webpacker
    `rails new myapp --webpack`

    `bundle exec rails webpacker:install`

#####Optional: To fix "unmet peer dependency" warnings,
    `yarn upgrade`

#####When package.json and/or yarn.lock changes, be sure to keep NPM packages up-to-date:
    `yarn install`
    
#####Running in Development Mode

    Run rails server - `rails s`
    Separately and concurrently run webpack dev server - `bin/webpack-dev-server`
    Available at localhost:3000

#####Before Deploy
    Clean assets with `rake assets:clobber`

    Ensure `config.assets.compile = false` in production (config/environments/production.rg), otherwise your application might be very slow if it compiles at run-time

    To see what's under the hood with webpack production config, run - `RAILS_ENV=production node -e 'console.dir(require("./config/webpack/production"), { depth: null })'`

     Compile, while seeing the details, run `NODE_ENV=production RAILS_ENV=production RACK_ENV=production ./bin/webpack --progress`


#####Production mode

    `NODE_ENV=production RAILS_ENV=production RACK_ENV=production ./bin/webpack --progress`

    `RAILS_ENV=production bundle exec rake assets:precompile`

    `git push heroku master`

####Deploying to Heroku

    `heroku create my-webpacker-heroku-app` - Create an app on Heroku
    `heroku addons:create heroku-postgresql:hobby-dev` - Creating a Postgres database for the app
    `heroku buildpacks:add heroku/nodejs` -  Adding the Heroku NodeJS buildpack
    `heroku buildpacks:add heroku/ruby`- Adding Ruby buildpacks
    `git push heroku master`- Pushing our code to Heroku and kicking off the deployment

##Attributions

Circuit Board background pattern - Hero Patterns (heropatterns.com)

