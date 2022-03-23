Rails.application.routes.draw do
  
  resources :favoritedrinks
  resources :ingredients
  resources :recipes
  resources :favorites
  resources :drinks
  resources :users
  get '/hello', to: 'application#hello_world'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
