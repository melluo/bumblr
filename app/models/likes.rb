class Likes < ApplicationRecord
    belongs_to :user,
        class_name: "Like",
        primary_key: :id,
        foriegn_key: :user_id
end