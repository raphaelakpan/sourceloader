class UploadsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @uploads = uploaded_files
  end

  def create
    params[:files].each do |file|
      uploaded_file = Upload.where(file: file.original_filename)
      next if uploaded_file.present?
      upload = Upload.new
      upload.file = file
      upload.save
    end

    render json: uploaded_files, status: :ok
  end

  def destroy
    upload = Upload.find(params[:id])
    binding.pry
    upload.destroy
    render status: :ok
  end

  private

  def uploaded_files
    Upload.all.map do |upload|
      {
        id: upload.id,
        url: upload.file.url,
        name: upload.file_identifier
      }
    end
  end
end
