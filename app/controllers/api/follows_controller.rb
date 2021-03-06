class Api::FollowsController < ApplicationController
    def index
        @user = User.includes(:following, :followers).find_by(id: params[:user_id])
        render :index 
      end
    def create
        @follow = Follow.new
        @follow.follower_id = current_user.id
        @follow.followee_id = params[:followee_id]
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 400
        end
    end
    def show
        @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
        if @follow
            render :show
        else
            render json: @follow.errors.full_messages, status: 400
        end
    end
    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
        @follow.destroy
        render :show  #this line is necessary for line 22 of follow actions to find the follow
    end
end
