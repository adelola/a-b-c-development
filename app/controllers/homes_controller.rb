class HomesController < ApplicationController
    def show
        @user = User.new
        render

    end
end
