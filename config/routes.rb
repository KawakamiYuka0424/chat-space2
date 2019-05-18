Rails.application.routes.draw do
  root 'messages#index'
  post "/" => "messages#index"
  resources :groups, only:[:index]
  
end
