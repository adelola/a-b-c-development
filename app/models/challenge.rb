class Challenge < ApplicationRecord
  belongs_to :student

  # validates :type, presence: true
  validates :date, presence: true

  has_many :correct_answers, dependent: :destroy
  has_many :incorrect_answers, dependent: :destroy
  
end
