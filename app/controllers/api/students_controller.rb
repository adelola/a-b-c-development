module Api
  class StudentsController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def index
      classroom = Classroom.find_by(id: params[:classroom_id])
      @name = classroom.name
      students = classroom.students
      @students_with_scores = [] 
      
      students.each do |x|
        y = Hash.new
        y["name"] = x.name
        y["id"] = x.id
        y["last_score"] = x.challenges.count > 0 ? x.challenges.last.score : 0
        y["classroom_id"] = x.classroom_id
        @students_with_scores << y
      end

      @class_avg = classroom.get_avg_score
      puts @class_avg
      render json: {classroom_name: @name, class_avg: @class_avg , students: @students_with_scores }
    end

    def show
      @student = Student.find_by(id:params[:id])
      @challenges_with_answers = []
      if @student.challenges
        @student.challenges.order(created_at: :desc).each do |challenge|  
          @challenges_with_answers << {challenge: challenge, incorrect_answers: challenge.incorrect_letters, correct_answers: challenge.correct_letters  }
        end
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

    def update
      student = Student.find_by_id(params[:id])
      if student.update_attributes(student_params)
        render json: { response: "Student updated"}
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

    def letters_results
      all_letters = Letter.recent_8_challenges_of_student(params[:student_id], params[:case] )
      @dictionary = Hash.new
      all_letters.each do |x|
        if @dictionary[x.name]
          @dictionary[x.name].push(x.status)
        else
          @dictionary[x.name] = []
          @dictionary[x.name].push(x.status)
        end
      end
      puts @dictionary
      render json: {letters: @dictionary.to_a.sort}
    end

    private

    def student_params
      params.require(:student).permit(:name)
    end

  end
end