Rails.application.routes.draw do
  root 'messages#index'
  post "/" => "messages#index"
  devise_for :users
end
