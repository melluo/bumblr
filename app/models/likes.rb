class Likes < ApplicationRecord
    belongs_to :user,
        class_name: "Likes",
        primary_key: :id,
        foreign_key: :user_id
end