class Challenge < ApplicationRecord
  belongs_to :student

  validates :type, presence: true
  validates :date, presence: true

  has_many :correct_answers
  has_many :incorrect_answers

  def all_lowercase_letters
    @lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  end

  def all_capital_letters
    @capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  end
  
end
