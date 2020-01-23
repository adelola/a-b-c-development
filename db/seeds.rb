# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


# user = User.first

# user.classrooms.create(name:'Elephant Room')

# 25.times do
#   first_name = Faker::Name.first_name
#   last_name = Faker::Name.last_name
#   name = first_name + ' ' + last_name 

#   Student.create(name: name, classroom_id: 1 )
# end

for i in 1..10
  Student.all.each do |student|
    student.challenges.create!({score: rand(65..100), note: "A work in progress", case_type: "lowercase", date: Date.today - i})
    student.save!
    puts "Challenge #{i} created"
  end
end