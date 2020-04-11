# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
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
