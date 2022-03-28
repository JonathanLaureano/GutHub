Rails.application.routes.draw do
  
  resources :ingredients
  resources :recipes
  resources :drinks, only: [:index, :show, :destroy, :create, :update]
  resources :users
  post "/mix", to: "drinks#mix"
  post "/search", to: "drinks#search"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
