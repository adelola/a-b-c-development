class DashboardsController < ApplicationController
  before_action :require_login

  def index
    classrooms = current_user.classrooms
    @payload = []
    classrooms.each do |room|
       y = Hash.new
       y["class_name"] = room.name
       y["class_id"] = room.id
       student_array = []
       room.students.each do |student|
         z = Hash.new
         z["student_name"] = student.name
         z["student_id"] = student.id
         student_array << z
       end
       y["students"] = student_array 
      @payload << y
    end
    render json: @payload
  end

  def show

  end

end
