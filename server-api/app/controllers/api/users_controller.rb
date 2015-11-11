class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]
  skip_before_action :authenticate, only: [:index, :show]
  # GET /users
  # GET /users.json
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])
    
    if @user.update_attribute(:point, params[:point])
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    head :no_content
  end

  private

    def set_user
      @user = current_user
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :description, :point)
    end
      
end
