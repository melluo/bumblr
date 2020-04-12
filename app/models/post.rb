# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  tags       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_type  :string
#
class Post < ApplicationRecord
    validates :author_id, :post_type, presence: true
    belongs_to :author,
        class_name: "User",
        primary_key: :id,
        foreign_key: :author_id

    has_many :likes,
        class_name: "Like",
        primary_key: :id,
        foreign_key: :post_id

    has_one_attached :image
    
end
