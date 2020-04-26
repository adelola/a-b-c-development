class IncorrectAnswer < ApplicationRecord
  belongs_to :challenge

  validates :letter, presence: true, length: { in: 1...2 }
  validates :challenge, presence: true 

  def self.last_8_challenges_of_student(id)
    joins(:challenge).where(challenge_id: (Challenge.where(student_id: id).last(8).pluck(:id)) )
  end




end
