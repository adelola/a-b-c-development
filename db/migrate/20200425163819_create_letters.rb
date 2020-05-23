class CreateLetters < ActiveRecord::Migration[6.0]
  def change
    create_table :letters do |t|
      t.string :name
      t.boolean :status
      t.references :challenge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
