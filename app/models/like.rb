class Like < ApplicationRecord
    validates :user_id, :post_id, presence: true

    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id
    
    belongs_to :post,
        class_name: "Post",
        primary_key: :id,
        foreign_key: :post_id
end
