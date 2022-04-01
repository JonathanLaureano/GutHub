class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :favorites, :image_url, :created_at
  has_many :drinks
end
