module Api
  class StudentsController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def index
      classroom = Classroom.find_by(id: params[:classroom_id])
      @students = classroom.students
      render json: @students
    end

    def create
      @classroom = Classroom.find_by(id: params[:classroom_id])
      @classroom.students.build(student_params)
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