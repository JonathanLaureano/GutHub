class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :ingredient_type
  has_many :recipes
  has_many :drinks, through: :recipes

end
