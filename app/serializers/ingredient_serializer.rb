class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_one :recipe
end
