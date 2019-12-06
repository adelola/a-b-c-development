module Api
  class ChallengesController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token
    
    def create
      hash = params[:challenge]
      @challenge =  Challenge.new(date: Date.today, student_id: params[:student_id])

      if @challenge.save
        hash.each do |key, value| 
          if value == "correct" 
            @challenge.correct_answers.create(letter: key)
          elsif value =="incorrect"
            @challenge.incorrect_answers.create(letter: key)
          end
        end        
        render json: @challenge 
      else
        render json: { response: "Something went wrong" }
      end
    end

  end
end
