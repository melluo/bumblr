@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
        json.likes do
            json.array! user.likes.pluck(:post_id)
        end
    end
end

