class Follow < ApplicationRecord
    belongs_to :followee,
        class_name: "User",
        primary_key: :id,
        foreign_key: :followee_id
        
    belongs_to :follower,
        class_name: "User",
        primary_key: :id,
        foreign_key: :follower_id
end
