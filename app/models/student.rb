class Student < ApplicationRecord
  belongs_to :classroom
  has_many :challenges
  has_many :correct_answers, through: :challenges

  validates :name, presence: true, length: { in: 1...140 }
  validates :user, presence: true
end
