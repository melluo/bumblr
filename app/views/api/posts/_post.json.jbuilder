json.extract! post, :id, :title, :body, :tags, :post_type, :author_id, :reblogged_post_id, :reblog_body, :reblog_tags

json.author do
    json.partial! "api/users/user", user: post.author
end

json.likers do 
    json.array! post.likes.pluck(:user_id)
end