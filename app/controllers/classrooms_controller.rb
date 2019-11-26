class ClassroomsController < ApplicationController
  # before_action :require_login
  # respond_to :json

  def index
    @classrooms = Classroom.all
    render json: @classrooms
  end

end
