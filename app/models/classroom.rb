class Classroom < ApplicationRecord
  belongs_to :user
  has_many :students

  validates :name, presence: true, length: { in: 1...128 }
  validates :user, presence: true
end
