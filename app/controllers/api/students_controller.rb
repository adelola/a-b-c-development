module Api
  class StudentsController < ApplicationController
    before_action :require_login
  end
end