class DropIncorrectAnswersTable < ActiveRecord::Migration[6.0]
    def up
      drop_table :incorrect_answers
    end
  
    def down
      raise ActiveRecord::IrreversibleMigration
    end

end
