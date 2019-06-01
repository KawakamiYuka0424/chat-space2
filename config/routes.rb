Rails.application.routes.draw do
  root 'messages#index'
  post "/" => "messages#index"
  
end
