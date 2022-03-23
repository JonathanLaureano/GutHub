class Favoritedrink < ApplicationRecord
    belongs_to :drinks
    belongs_to :favorites
end
