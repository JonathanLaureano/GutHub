class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_one :user
  has_many :recipes
  has_many :ingredients, through: :recipes
  # accepts_nested_attributes_for :recipes, allow_destroy: true
end
