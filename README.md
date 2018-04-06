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
- Run `npm install yarn -g` to install `yarn` globally if you do not have `yarn` installed.
- Run `yarn` to install React dependencies
- Run `rails db:setup` to create the database and run migration
- Run `rails server` to run the app. Default port is `3000`
- Visit `http://localhost:3000` to access the app

It is built on `rails 5.1.6` and uses `postgresql` as the database engine.

## Duplicate file uploads
If previously uploaded files are selected as part of a new upload, the app filters the already upoaded files out and uploads only new entries. To achieve this, I used the filename (which includes the file extension e.g `file.jpg`) to check against already uploaded files; if a match is found, it skips over that file and only uploads files that do not have a match in the database. This way, it restricts the user from uploading a particular file multiple times. The limitation is this is that if the user changes the filename to something else, the user can successfully upload it as many times as he renames and makes the filename unique.

## Improvements and Security
The app allows uploading of all types of files. This could be a potential security threat as script files could be uploaded successfully. To handle this, I could restrict file types to a defined list of permitted extensions and validate upon upload. This way, only permitted file types would be uploaded into the system. Also, currently, there's no limits to the file size, meaning any file size could be uploaded. This could potentially cause overload to the server if the file size if really large. To handle this, I could validate the file size before upload and only upload if the size is within specified limits.

