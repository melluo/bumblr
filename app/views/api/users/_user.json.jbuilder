json.extract! user, :id, :username, :email

json.followers do
    json.array! user.followers.pluck(:follower_id)
end

json.following do
    json.array! user.following.pluck(:followee_id)
end
