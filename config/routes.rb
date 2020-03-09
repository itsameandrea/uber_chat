Rails.application.routes.draw do
  # Serve websocket cable requests in-process  
  devise_for :users

  root to: 'orders#index'
   
  resources :orders, only: %i[show index]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :orders do
        resources :messages, only: %i[index create]
      end
    end
  end
end
