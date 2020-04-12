json.extract! post, :id, :title, :body, :tags, :post_type, :author_id

json.author do
    json.partial! "api/users/user", user: post.author
end

json.likes do
    json.array! post.likes.pluck(:user_id)
end