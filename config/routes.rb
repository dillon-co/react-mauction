Rails.application.routes.draw do
  resources :phrases

  root to: 'phrases#index'
  post 'add_phrase' => 'phrases#add_phrase'

  get 'random_phrase' => 'phrases#random_phrase'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
