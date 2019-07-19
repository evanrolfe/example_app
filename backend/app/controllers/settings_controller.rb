class SettingsController < ApplicationController
  before_action :set_secret, only: [:show, :edit, :update, :destroy]
  #before_action :authenticate_user!, only: [:index, :new, :create, :edit, :update, :destroy]

  protect_from_forgery unless: -> { request.format.json? }

  def one
    render json: { 'hello' => 'world1' }
  end

  def two
    render json: { 'hello' => 'world2' }
  end

  def three
    render json: { 'hello' => 'world3' }
  end
end
