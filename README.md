# Sourceloader
### A simple File Transfer App

## Features
- Ability to upload multiple files to the backend
- A progress bar to show upload progress
- Ability to download uploaded files
- Ability to delete uploaded files

## Technologies
- Ruby on Rails
- Reactjs

## Instructions to install
- Clone this repo and change directory into the project, i.e `cd sourceloader`
- Run `bundle install` to install dependencies
- Run `rails db:setup` to create the database
- Run `rails db:migrate` to run migrations
- Run `rails server` to run the app. Default port is `3000`
- Visit `http://localhost:3000` to access the app

It is built on `rails 5.1.6` and uses `postgresql` as the database engine.

## Improvements and Security
The app allow uploading of all types of files. This could be a potential security threat as script files could be uploaded successfully. To handle this, I could restrict file types to a defined list of permitted extensions and validate upon upload. This way, only permitted file types would be uploaded into the system.

### Duplicate file uploads
If previously uploaded files are selected as part of a new upload, the app filters the already upoaded files out and uploads only new entries. To achieve this, I used the filename (which includes the file extension e.g `file.jpg`) to check against already uploaded files; if a match is found, it skips over that file and only uploads files that do not have a match in the database. This way, it restricts the user from uploading a particular file multiple times. The limitation is this is that if the user changes the filename to something else, he will successfully upload it as many times as he renames and makes the filename unique.
