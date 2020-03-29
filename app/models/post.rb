class Post < ApplicationRecord
    validates :user_id, presence: true
    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    has_many :likes,
        class_name: :Likes,
        primary_key: :id,
        foreign_key: :like_id

    has_many_attached :images
end