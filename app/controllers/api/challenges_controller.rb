module Api
  class ChallengesController < ApplicationController
    before_action :require_login
    skip_before_action :verify_authenticity_token

    def new
      puts params
      requested_type = params[:challenge_type]
      if requested_type == "Uppercase"
        @uppercase = ('A'..'Z').to_a
        render json: @uppercase
      elsif requested_type == "Lowercase"
        @lowercase = ('a'..'z').to_a
        render json: @lowercase
      elsif requested_type == "Both"
        uppercase = ('A'..'Z').to_a
        lowercase = ('a'..'z').to_a
        @both = uppercase + lowercase
        render json: @both
      else
        render json: { response: "Something went wrong" }
      end
    end
    
    def create
      hash = params[:challenge]
      hash_collection = params[:challenge][:collection]
      puts hash[:score]
      # @challenge =  Challenge.new(date: Date.today, student_id: params[:student_id], score: hash[:score], type: hash[:type])

      # if @challenge.save
      #   hash_collection.each do |key, value| 
      #     if value == "correct" 
      #       @challenge.correct_answers.create(letter: key)
      #     elsif value =="incorrect"
      #       @challenge.incorrect_answers.create(letter: key)
      #     end
      #   end        
      #   render json: @challenge 
      # else
      #   render json: { response: "Something went wrong" }
      # end
    end

    private

    def challenge_params
      params.require(:challenge).permit(:name, :score, :type)
    end

  end
end
