Rails.application.routes.draw do
  resources :uploads, only: [:index, :create, :destroy]
  root 'uploads#index'
end
