class Classroom < ApplicationRecord
  belongs_to :user
  has_many :students, dependent: :destroy

  validates :name, presence: true, length: { in: 1..140 }
  validates :user, presence: true

  def get_avg_score
    scores = []
    self.students.each do |student|
      if student.challenges
        scores << student.challenges.last.score
      end
    end
    (scores.sum.to_f / scores.size).round(1)
  end

end
