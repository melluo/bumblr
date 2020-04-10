class Api::FollowsController < ApplicationController
    def index
        @follows = Follow.where(follower_id: current_user.id)
    end
    def create
        @follow = Follow.new
        @follow.follower_id = current_user.id
        @follow.followee_id = params[:id]
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
    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
        @follow.destroy
    end
end
