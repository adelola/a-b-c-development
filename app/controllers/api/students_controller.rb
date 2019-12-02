module Api
  class StudentsController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def index
      @students = Student.all
      render json: @students
    end

    def create
      puts current_user.classrooms
      user_classrooms = current_user.classrooms
      @classroom = user_classrooms.build(classroom_params)
      if @classroom.save
        render json: { response: "Success" }
      else
        render json: { response: "Failure"}
      end
    end

    private

    def student_params
      params.require(:student).permit(:name)
    end










  end
end