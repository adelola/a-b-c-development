class Challenge < ApplicationRecord
  belongs_to :student

  validates :case_type, presence: true
  validates :date, presence: true
  validates_length_of :note, maximum: 200, allow_blank: true

  has_many :letters, dependent: :destroy

  def incorrect_letters
    letters.where(status: false).pluck(:name)
  end

  def correct_letters
    letters.where(status: true).pluck(:name)
  end
  
end
