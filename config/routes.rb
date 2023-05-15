Rails.application.routes.draw do
  root 'todos#index'
  get 'todos/all_todos'
  # resources :todos, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
