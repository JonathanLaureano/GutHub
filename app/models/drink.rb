class Drink < ApplicationRecord
  belongs_to :user
  has_many :favoritedrinks
  has_many :recipes
end
