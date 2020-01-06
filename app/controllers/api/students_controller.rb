module Api
  class StudentsController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def index
      classroom = Classroom.find_by(id: params[:classroom_id])
      @students = classroom.students
      render json: @students
    end

    def show
      @student = Student.find_by(id:params[:id])
      @challenges_with_answers = []

      @student.challenges.each do |challenge|  
        @challenges_with_answers << {challenge: challenge, incorrect_answers: challenge.incorrect_answers, correct_answers: challenge.correct_answers  }
      end
      
      render json: {student: @student, challenges: @challenges_with_answers}
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

    def destroy
      student = Student.find_by_id(params[:id])
      if student.destroy
        render json: { response: "Student deleted" }
      else
        render json: { response: "Something went wrong" }
      end
    end

    private

    def student_params
      params.require(:student).permit(:name)
    end

  end
end