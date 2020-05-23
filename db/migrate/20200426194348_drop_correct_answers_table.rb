class DropCorrectAnswersTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :correct_answers
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
