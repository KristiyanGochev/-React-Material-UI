## My Docomentation

 ### Sources : 
   * YouTubeVideo : https://www.youtube.com/watch?v=rIoflwHFd6o&list=PLcCp4mjO-z9_4Wak3Uq8dEWC6H1fbSNgL
   * React Router : https://github.com/ReactTraining/react-router
   * Json-Server  : https://github.com/typicode/json-server
### Installation : 
##### 1. Install Touch : `npm install touch-cli -g`
##### 2. Install Router: `npm install --save react-router-dom`
##### 3. Install Yarn: `npm install yarn -g`
##### 4. Add json-server: `yarn add --dev json-server`
##### 5. Create JSON file:`store.json` and include some data in it
##### 6. Run the json-server by using the following command : `.\node_modules\.bin\json-server --watch store.json --port 4000`

  ###### Note: if you just run `json-server --watch store.json` the json server will not be recognized


##### 7. As the Json-server is running on background we are allowed to use it, so lets do some test:
#### GET :
   `curl localhost:4000/writers/` : will return a list of all writers
   
   `curl localhost:4000/writers/{id}` : will return an single item with a specified id  
  
#### POST :
  The command bellow will send post requist to the server: 
   * -H content-type: application/json
   * -X method: POST
   * -d {"name":"myName","id":"123"}
   * ip:port/writers
   
   `curl -H "Content-Type: application/json" -X POST -d {"name":"Allan Watts","id":"allan-watts"} localhost:4000/writers`
  
  #### PUT :
  The command bellow will send put/update requist to the server: 
   * -H content-type: application/json
   * -X method: PUT 
   * -d DataSet:{"name":"myName"}
   * ip:port/writers{id}: the id stays for the indetificator for which item we want to update
   
  `curl -H "Content-Type: application/json" -X POST -d {"name":"My new Name",} localhost:4000/writers/{id}`
  
  #### DELETE :
  The command bellow will send delete requist to the server:
   * -X method: Delete 
   * ip:port/writers{id}: the id stays for the indetificator for which item we want to delete
   
  `curl -X DELETE localhost:4000/writers/{id}`
  
  ### In order to start the ReactJs server and Json-Server use the below commands:
  
  `npm start : will run the ReactJs server`
  
  `npm run jsonServer : will run the json-server on port 4000`
  
  package.json :
  
    "jsonServer":"json-server --watch store.json --port 4000",
    "start": "react-scripts start ",
###

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
