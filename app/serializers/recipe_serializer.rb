class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :parts
  has_one :drink
  has_one :ingredient
end
