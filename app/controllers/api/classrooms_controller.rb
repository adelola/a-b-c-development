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

    private

    def classroom_params
      params.require(:classroom).permit(:name)
    end

  end
end