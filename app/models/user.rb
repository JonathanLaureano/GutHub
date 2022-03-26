class User < ApplicationRecord
    has_many :drinks, dependent: :destroy
    has_many :recipes, through: :drinks

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
