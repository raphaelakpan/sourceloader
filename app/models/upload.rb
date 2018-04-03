class Upload < ApplicationRecord
  mount_uploader :file, FileUploader
end
