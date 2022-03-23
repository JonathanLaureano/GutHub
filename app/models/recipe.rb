class Recipe < ApplicationRecord
  belongs_to :drink
  has_many :ingredients
end
