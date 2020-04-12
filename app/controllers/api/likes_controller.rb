class Api::LikesController < ApplicationController
    def index
        @user = User.includes(:likes).find_by(id: params[:user_id])
        render :index 
    end
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.post_id = params[:post_id]
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 400
        end
    end
    def destroy
        @like = Like.find(params[:like_id])
        @like.destroy
        render :show  #this line is necessary for line 22 of like actions to find the like
    end
end