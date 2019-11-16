class CorrectAnswer < ApplicationRecord
  belongs_to :challenge

  validates :letter, presence: true
  validates :challenge, presence: true
end
