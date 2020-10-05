Rails.application.routes.draw do
  root 'creatives#index'
  get 'creatives/terms_and_conditions', as: :terms
  get 'creatives/privacy_notice', as: :privacy

  devise_for :users,
              controllers: { omniauth_callbacks: "users/omniauth_callbacks",
                             passwords: "users/passwords",
                             registrations: 'users/registrations',
                             sessions: 'users/sessions' }
  resources :users, only: [:show, :edit, :update]
  resources :artists, only: [:index, :show, :destroy]
  resources :albums, only: [:index, :show, :destroy] do
    get :search, on: :collection
  end
  resources :reviews, only: [:create, :update, :destroy]

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
