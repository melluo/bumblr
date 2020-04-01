# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string
#
class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }

    after_initialize :ensure_session_token

    has_many :likes,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    has_many :posts,
        class_name: "Post",
        primary_key: :id,
        foreign_key: :post_id

    has_one_attached :avatar #each user has an avatar
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

 private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end


#FIGVAPER
