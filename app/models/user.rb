class User < ApplicationRecord
    has_many :drinks, dependent: :destroy
    has_many :recipes, through: :drinks

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
end
