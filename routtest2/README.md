## Docomentation

 ### Sources : 
   * YouTubeVideo : https://www.youtube.com/watch?v=rIoflwHFd6o&list=PLcCp4mjO-z9_4Wak3Uq8dEWC6H1fbSNgL
   * React Router : https://github.com/ReactTraining/react-router
   * Json-Server  : https://github.com/typicode/json-server
### Installation : 

##### 1. Install ReactApp : `nom install create-react-app <YourAppName>`
  - Delete useless files :
    * App.css
    * App.test.js
    * index.css
    * logo.svg
    * registerServiceWorker.js
    
##### 2. Install Touch : `npm install touch-cli -g`
##### 3. Install Router: `npm install --save react-router-dom`
##### 4. Install Yarn: `npm install yarn -g`
##### 5. Add json-server: `yarn add --dev json-server`
##### 6. Create JSON file:`store.json` and include some data in it
##### 7. Run the json-server by using the following command : `.\node_modules\.bin\json-server --watch store.json --port 4000`

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
###
