class ChangeChallengesColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :challenges, :type, :case_type
  end
end
