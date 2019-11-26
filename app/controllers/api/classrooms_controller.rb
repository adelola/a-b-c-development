module Api
  class ClassroomsController < ApplicationController
    before_action :require_login

    def index
      @classrooms = Classroom.all
      render json: @classrooms
    end

  end
end
