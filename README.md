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
Schema  | 
------------- | 
title: String  | 
url: String |


### Route Order:
URL | HTTP Verb | Action | Notes
| :---: | :---: | :---: | :---: |
/bookmark/ | GET | index | This route shows a list or index of all bookmarks. |
/bookmark/ | POST | new | a CREATE route. |
/bookmark/:id | PUT | update | an UPDATE route |
/bookmark/:id | DELETE | destroy | This routes deletes entries from Database. |

## Deployment
Requires the Heroku CLI client. 
https://bookmark-app-backend.herokuapp.com/bookmark/

### Usage
[Front-End Git Hub](https://github.com/katiepestotnik/bookmark-app-frontend "Front-End GitHub") and 
[Live Link](https://blank "Deployed Project")

