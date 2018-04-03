class UploadsController < ApplicationController
  def index
    @uploads = Upload.all
  end

  def create
    @upload = Upload.new
    @upload.file = upload_params[:file]
    @upload.save
  end

  private

  def upload_params
    params.require(:upload).permit(:file)
  end
end
