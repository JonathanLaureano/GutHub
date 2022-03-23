class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_one :user
  has_one :recipe
end
