## Bookmark Backend
This project serves as a simple backend designed to work "Bookmark" application . This server receives "Bookmark" entries.

List of Dependencies
* Cors
* Dotenv
* Express
* Mongoose
* Morgan

## Database
This project is configured to connect to a MongoDB database using Mongoose.

### Bookmark Model
title: String
url: String

### Route Order:
URL | HTTP Verb | Action | Notes
| :---: | :---: | :---: | :---: |
/bookmark/ | GET | Index | This route shows a list or index of all bookmarks. |



## Deployment
Requires the Heroku CLI client. 
https://bookmark-app-backend.herokuapp.com/bookmark/

