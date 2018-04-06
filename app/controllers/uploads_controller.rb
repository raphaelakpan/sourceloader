class UploadsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def index
    @uploads = uploaded_files
  end

  def create
    params[:files].each do |file|
      filename =  file.original_filename.split().join('_')
      uploaded_file = Upload.where(file: filename)
      next if uploaded_file.present?
      upload = Upload.new
      upload.file = file
      upload.save
    end

    render json: uploaded_files, status: :ok
  end

  def destroy
    upload = Upload.find(params[:id])
    upload.destroy
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
