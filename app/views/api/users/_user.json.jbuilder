json.extract! user, :id, :username, :email

if user.avatar.attached?
    json.avatarUrl url_for(user.avatar)
end

json.followers do
    json.array! user.followers.pluck(:follower_id)
end

json.following do
    json.array! user.following.pluck(:followee_id)
end

json.likes do
    json.array! user.likes.pluck(:post_id)
end