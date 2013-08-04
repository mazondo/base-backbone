require "./app"
set :raise_errors, true
set :logging, true
set :show_exceptions, true

run Sinatra::Application