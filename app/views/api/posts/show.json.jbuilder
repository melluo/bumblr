json.partial! 'post', post: @post
if @post.image.attached?
    json.imageUrl url_for(@post.image)
end
