Rails.application.routes.draw do
  resources :secrets
  devise_for :users
  root to: 'posts#index'

  resources :posts
  resources :users

  get '/settings/one', to: 'settings#one'
  get '/settings/two', to: 'settings#two'
  get '/settings/three', to: 'settings#three'
end
