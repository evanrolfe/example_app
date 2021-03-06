class SettingsController < ApplicationController
  before_action :set_secret, only: [:show, :edit, :update, :destroy]
  #before_action :authenticate_user!, only: [:index, :new, :create, :edit, :update, :destroy]

  protect_from_forgery unless: -> { request.format.json? }

  def one
    sleep 2
    render json: { 'hello' => 'world1' }
  end

  def two
    render json: { 'hello' => 'world2' }
  end

  def slow_request
    seconds = params[:sleep_for] || 5
    sleep(seconds.to_i)
    render json: { 'message' => 'Hello world (from the slow controller)' }
  end
end
