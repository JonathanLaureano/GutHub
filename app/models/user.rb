class User < ApplicationRecord
    has_many :drinks, dependent: :destroy

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
