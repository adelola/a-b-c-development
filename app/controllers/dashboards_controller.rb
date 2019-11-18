class DashboardsController < ApplicationController
  def show
    render component: 'Dashboard'
  end
end
