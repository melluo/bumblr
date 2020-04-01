# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text             not null
#  tags       :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :user_id, :post_type, presence: true
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
