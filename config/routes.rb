Rails.application.routes.draw do
  root 'groups#index'
  post "/" => "groups#index"
  resources :messages, only: [:index, :create]
end
