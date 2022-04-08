class Recipe < ApplicationRecord
  belongs_to :drink
  belongs_to :ingredient
  
  validates :parts, presence: true
end
