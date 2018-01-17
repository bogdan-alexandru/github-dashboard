1. Install node: https://nodejs.org/en/

After you have cloned the repository, there should be 2 directories: "my-app" and "server"

First, to get the server running follow the bellow instructions:
1. Go to "server" directory, open command line and run "npm install" and "npm install -g typescript"
2. In order to authenticate to GithubGraphQLApi, the server is using a token generated by github; you should go to your github account "home page/settings/developer settings/personal access tokens" and generate a new token
3. Go to server/src/app.ts and assign your generated token to the authentication token there " const authToken ='yourToken'; "
4. In server directory open command line and run "tsc"
5. To start the server run "npm start"
6. Access "http://localhost:3000/dashboard" in browser and you should see the json response displayed there 

To get the app running follow the bellow instructions:
1. Go to "my-app" directory, open command line and run "npm install" and "npm install -g @angular/cli"
2. To start the app open command line and run "ng serve"
3. Access "http://localhost:4200/dashboard" in browser. The app should be running and displaying the dashboard with the required information