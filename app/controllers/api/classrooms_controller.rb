module Api
  class ClassroomsController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def index
      @classrooms = current_user.classrooms
      render json: @classrooms
    end

    def create
      user_classrooms = current_user.classrooms
      @classroom = user_classrooms.build(classroom_params)
      if @classroom.save
        render json: { response: "Success" }
      else
        render json: { response: "Failure"}
      end
    end

    def update
      classroom = Classroom.find_by_id(params[:id])
      if classroom.update_attributes(classroom_params)
        render json: { response: "Classroom updated"}
      else
        render json: { response: "Failure"}
      end
    end


    def destroy
      classroom = Classroom.find_by_id(params[:id])
      if classroom.destroy
        render json: { response: "Classroom deleted" }
      else
        render json: { response: "Something went wrong" }
      end
    end

    

    private

    def classroom_params
      params.require(:classroom).permit(:name)
    end

  end
end
