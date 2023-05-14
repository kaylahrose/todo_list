class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description, null: true
      t.boolean :complete, default: false
      t.references :todo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
