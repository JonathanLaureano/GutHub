class Favorite < ApplicationRecord
  belongs_to :user
  has_many :favoritedrinks
  has_many :drinks, through: :favoritedrinks
end
