class Api::UsersController < ApplicationController
    # before_action :require_logged_in!, only: [:index, :show]
    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index  #index is showing all users
        @users = User.all
        render :index
    end
    
    def show 
        @user = User.find(params[:id])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :avatar)
    end
end