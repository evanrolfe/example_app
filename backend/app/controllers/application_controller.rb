require 'jwt'
require 'ostruct'

class ApplicationController < ActionController::Base
  include Pundit

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :log_headers

  rescue_from Pundit::NotAuthorizedError do |exception|
    render json: { error: 'Not Authorized'}, status: 401
  end

  protect_from_forgery unless: -> { request.format.json? }

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def log_headers
    puts "------------Cookies:-------------:"
    puts request.headers['Cookie']
    puts "------------Hello:-------------:"
    puts request.headers['Hello']
    puts "---------------------------------:"
  end
end
