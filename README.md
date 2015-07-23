##MEAN Seed Project
***
A starter to start build your own project with Angular, Node, Express and MongoDB.  
Node will provide RESTful API. Angular provides the frontend and accessablity to the API. MongoDB stores all the data.
   
###Project Structure
***

```
.
├── README.md
├── bower.json
├── client						#frontend res
│   ├── css
│   ├── img
│   ├── js 						#code for angular
│   │   ├── controllers
│   │   └── services
│   ├── libs                      #js libs 
│   ├── templates
│   │   ├── index.html            #main entry
│   │   ├── javascript.html       #compress all js refs
│   │   └── stylesheets.html      #compress all css refs
│   └── views
├── config
│   └── db.js
├── main.js
├── package.json
└── server
    ├── middlewares
    ├── models
    └── routes
```
  
###Requirements And Tools
***
* [Node and npm](http://nodejs.org/)
* [Bower](http://bower.io/)
* [Gulp](http://www.gulpjs.com.cn/)

###Installation
***
1. Clone the repository
2. Install the dependency: `npm install`
3. Install frontend libs: `bower install`
4. Start the server: `node server.js`
5. View in browser at `http://localhost:8080`
