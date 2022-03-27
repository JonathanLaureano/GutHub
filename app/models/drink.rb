class Drink < ApplicationRecord
  belongs_to :user
  has_many :recipes
  has_many :ingredients, through: :recipes
  accepts_nested_attributes_for :recipes, :ingredients, allow_destroy: true
end
