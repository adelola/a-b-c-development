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
      # elsif requested_type == "Both"
      #   uppercase = ('A'..'Z').to_a
      #   lowercase = ('a'..'z').to_a
      #   @both = uppercase + lowercase
      #   render json: @both
      else
        render json: { response: "Something went wrong" }
      end
    end
    
    def create
      hash = params[:challenge]
      hash_collection = params[:challenge][:collection]
      puts hash
      @challenge =  Challenge.new(date: Date.today, student_id: params[:student_id], score: hash[:score], case_type: hash[:type], note: hash[:note])

      if @challenge.save
        hash_collection.each do |key, value| 
          if value == "correct" 
            @challenge.letters.create({name: key, status: true})
          elsif value =="incorrect"
            @challenge.letters.create({name: key, status: false})
          end
        end        
        render json: { response: params[:student_id]  } 
      else
        render json: { response: "Something went wrong" }
      end
    end

    def destroy
      challenge = Challenge.find_by_id(params[:id])
      if challenge.destroy
        render json: { response: "Challenge deleted" }
      else
        render json: { response: "Something went wrong" }
      end
    end

    private

    def challenge_params
      params.require(:challenge).permit(:name, :score, :case_type)
    end

  end
end
