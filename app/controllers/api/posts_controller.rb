class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        #post.includes associations
        render :index
    end
    def new
        @post = Post.new
    end
    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 400
        end
    end
    def show
        @post = Post.find(params[:id])
        
    end
    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render @post.errors.full_messages, status: 400
        end

    end
    def destroy
        @post = Post.find(params[:id])
        if @post.image
            @post.image.purge
        end
        @post.destroy
    end
    private
    def post_params
        params.require(:post).permit(:title, :body, :tags, :post_type, :author_id, :image, :reblogged_post_id, :reblog_body, :reblog_tags)
    end
end
