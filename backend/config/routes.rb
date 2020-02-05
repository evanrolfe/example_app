Rails.application.routes.draw do
  resources :chats
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root to: 'posts#index'

  resources :secrets
  resources :posts
  resources :users

  get '/settings/one', to: 'settings#one'
  get '/settings/two', to: 'settings#two'
  get '/slow_request', to: 'settings#slow_request'
end
