class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.float :score
      t.date :date
      t.string :type
      t.text :note
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
