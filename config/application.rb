require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


module Tumblr
  class Application < Rails::Application
    config.generators do |g|
      g.test_framework :rspec,
        :fixtures => false,
        :view_specs => false,
        :helper_specs => false,
        :router_specs => false,
        :controller_specs => true,
        :request_specs => false
      g.fixture_replacement :factory_bot, :dir => "spec/factories"
    end
  end
end
