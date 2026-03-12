HOW THE PROJECT WORKS
at the frontend in the registeration page, the user is able to send request of registeration and inputed information
this information and request is sent to the backend using axios.
in order for the information and the request to be recieved be backend, cors header middleware has to be present.
Once the request is recieved by the backend, the information sent by the user is validated, if not valid, it send an error to the frontend, else the informations are saved in the database.
If a user is registered successful, the user is redirected to the login page.
the user then input the credentials requested (username, password). Once this credentials are inputed and sent to the backend, using simple_JWT, it is verified if any user with the credentials provided exists.
if a user with credentials provided exists, a unique access token is provided.
once the access token is recieved by the frontend, user has access to the home page and other resources restricted to authorised users.
also redux stores the access and refesh tokens it states, the access and refresh tokens are also stores in the localstorage for quick access.
once a user is logged in, the users profiles is also fetched and stored in the redux state.
if a user logout, the user localstorage is cleared.

IN SUMMERY 
if a user havnt yet registered, the user goes the the registeration page and register,
after registeration the user can login where the users info will be displays and the user can logout at will

HOW TO RUN THE PROJECT LOCALLY
pull project to local device from github
move to the backend directory
open the file "requirements.txt" and download all the libraries listed
go to the setting in backend and config database to the database of choice e.g sql, postgres
run migrations 
move back to the root directory
go to the frontend directory and build the project using the command "npm run build"
start the frontend usnig the command "npm run dev"
go back to the root directory and navigate to the backend diretory
start the backend server with the command "python manage.py runserver"
