Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create] do
      resources :follows, only: :index
      resources :likes, only: [:index, :create]
    end
    resource :session
    resources :posts, only: [:index, :create, :update, :show, :destroy] 
    resources :follows, only: [:create, :show, :destroy]
    resources :likes, only: [:destroy]
  end
  #nesting users under api tag
  root to: "static_pages#root"
end
