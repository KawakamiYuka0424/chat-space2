Rails.application.routes.draw do
  root 'messages#index'
  resources :users, only: [:edit, :update]
  devise_for :users
end
