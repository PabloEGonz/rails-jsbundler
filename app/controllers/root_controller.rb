class RootController < ApplicationController
  def index
      greetings = Greeting.all
      @greeting = greetings[rand(greetings.size)]
  end
end
