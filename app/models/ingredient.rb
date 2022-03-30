class Ingredient < ApplicationRecord
  has_many :recipes  
  has_many :drinks, through: :recipes
  
  validates :name, uniqueness: true
end
