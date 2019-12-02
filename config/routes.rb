Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new do
    root to: "dashboards#show" , as: :signed_in_root
  end
  
  root to: "homes#show"

  namespace :api do
    defaults format: :json do
      resources :classrooms do
        resources :students do
          resources :challenges
        end
      end   
    end
  end

  # resources :classrooms, defaults: {:format => 'json'}
  # resources :students, constraints: lambda { |req| req.format == :json }
  # resources :challenges, only: [:edit, :update, :delete], constraints: lambda { |req| req.format == :json }
  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]
  resources :users, only: [:create] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"

  match '*path', to: 'dashboards#show', via: :all
end
