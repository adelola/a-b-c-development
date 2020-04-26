class Letter < ApplicationRecord
  belongs_to :challenge

  validates :name, presence: true, length: { in: 1...2 }
  validates :challenge, presence: true 

  def self.recent_8_challenges_of_student(id, case_type)
    joins(:challenge).where(challenge_id: (Challenge.where(student_id: id, case_type: case_type).last(8).pluck(:id)) )
  end

end
