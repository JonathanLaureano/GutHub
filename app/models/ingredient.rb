class Ingredient < ApplicationRecord
  has_many :recipes  
  has_many :drinks, through: :recipes
end
