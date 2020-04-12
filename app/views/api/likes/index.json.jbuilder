json.likes do
    json.array! @user.likes.pluck(:post_id)
end