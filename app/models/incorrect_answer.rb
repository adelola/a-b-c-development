class IncorrectAnswer < ApplicationRecord
  belongs_to :challenge

  validates :letter, presence: true, length: { in: 1...2 }
  validates :challenge, presence: true 
end
