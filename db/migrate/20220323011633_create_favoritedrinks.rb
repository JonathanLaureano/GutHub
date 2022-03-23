class CreateFavoritedrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :favoritedrinks do |t|
      t.belongs_to :drinks, null: false, foreign_key: true
      t.belongs_to :favorites, null: false, foreign_key: true

      t.timestamps
    end
  end
end
