class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #In your controller, you would just call Drinks.where(id: user.favorites)


    def index
        @users = User.all
        render json: @users
    end


    def update
        @current_user.update(user_params)
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def destroy
        user = @user
        user.destroy
        head :no_content
    end

    def user_drinks
        render json: @current_user.drinks
    end

    def user_favorites
        render json: @current_user.favorites
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
    # Only allow a trusted parameter "white list" through.
    # Add Email to user params (stretch deliverable)
    def user_params
      params.permit(
          :first_name,
          :last_name,
          :username, 
          :password, 
          :password_confirmation, 
          :image_url, 
          :description
          )
    end
end
