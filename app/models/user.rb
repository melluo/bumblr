class User < ApplicationRecord
    attr_reader :password
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 8 }

    after_initialize :ensure_session_token

    has_many :likes,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    has_many :posts,
        class_name: "Post",
        primary_key: :id,
        foriegn_key: :post_id
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def generate_session_token
        self.session_token ||= SecureRandom.base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        generate_session_token unless self.session_token
    end
    
    def reset_session_token
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token 
    end

end

#FIGVAPER