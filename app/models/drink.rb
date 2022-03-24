class Drink < ApplicationRecord
  belongs_to :user
  has_one :recipe
  has_many :ingredients, through: :recipe
  accepts_nested_attributes_for :recipe, :ingredients, allow_destroy: true
end
