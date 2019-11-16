class Challenge < ApplicationRecord
  belongs_to :student

  validates :type, presence: true
  validates :date, presence: true

  has_many :correct_answers
  has_many :incorrect_answers

  def all_lowercase_letters
    @lowercase = ('a'..'z').to_a
  end

  def all_uppercase_letters
    @uppercase = ('A'..'Z').to_a
  end
  
end
