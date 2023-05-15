class TodosController < ApplicationController
  def index; end

  def all_todos
    render json: Todo.all
  end
end
