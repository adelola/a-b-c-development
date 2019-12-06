module Api
  class ChallengesController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token
    
    def create
      array =  params[:challenge]
      array.each do |x|
        if x["status"] == "correct"
          puts x["letter"]
        else x[""]
          puts "Incorrect"
        end
      end
    end

  end
end
