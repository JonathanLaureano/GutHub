class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :image_url, :description
  has_many :favorites
  has_many :drinks
end
