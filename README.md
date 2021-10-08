

<h1>Static Node.js and Express Site</h1>
<br>
<p align="center">Authored by Shawn Daugherty Calhoun</p>



## About the Project
This is a portfolio site to showcase the projects I've built. The site contains a modern landing page, an about page where I share contact info and give a little background and a series of project pages from the TeamTreehouse Techdegree.

A JSON file stores all the data about the projects.

Pug was used to complete templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

Node.js and Express were used to:

  - Import the required dependencies and link the JSON with the Pug templates. 
  - Set up routes to handle requests. 
  - Set up the middleware to utilize static files. 
  - Set up a server to serve the project. 

The live paged was deployed using Heroku.
Here's the link: https://shauncy-portfolio.herokuapp.com/
<br>


### Built With

* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [NPM](https://www.npmjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [VisualStudio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [JSON](https://www.json.org/json-en.html)

## USING THIS APPLICATION
- This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
- After installing node, navigate to the root directory of the cloned repo in a as Command Prompt or Git Bash.
- Open app.js. On line 70 (app.listen) replace "port" with 3000.
- Type  "npm install".
- Type "npm start" to run app.

## Notes Regarding Exceeds Expectations
- Running "npm start" serves the app when app.listen set to port 3000.
- Style changes in styles.css: 
    * CSS bounce hover effect, 
    * Box shadows
    * Dotted borders
    * Text shadows 
    * Font changes and centering text in header and project grid
    * Optimization for mobile screen viewing
- The error.pug template and the page-not-found.pug template have been created and added to the views folder.
- When the app is pointed at undefined routes such as /noroute and /project/noroute, the app displays either the page-not-found or the error template, both of which should display   the error's status and message properties.




## Acknowledgements
 * [Othneil Drew | Best-README-Template](https://github.com/othneildrew/Best-README-Template) 
* [Ha Link on CodePen | CSS Bounce Hover Effect| ](https://codepen.io/halink0803/pen/qdVXqm) 
* [CSS Generator - AngryTools.com](https://angrytools.com/css-generator/)

## License

Distributed under the MIT License. (https://opensource.org/licenses/MIT)
