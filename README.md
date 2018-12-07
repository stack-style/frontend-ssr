### Frontend for Stack Style with Server-Side-Rendering
This is a custom project setup for Rendering React on Server as well as Client.
- npm command to start the server is `npm start`.
- Checkout `package.json` for the installed dependencies and version of the tools used.
- Checkout `webpack.*.js` for getting an idea about the build process.

#### Rules
1. All the files except **react components**, will be written with the usual `.js` extension.
1. All the `react` components file will have `.jsx` extension so that we have a clear distinction 
   between other javaScript files and react components.

#### Folder Structure
- All the codes will be written inside `src` directory.
- All the codes inside `src/index.js` and `src/server` will be written for a renderer server which will act as a proxy to the API server.
- `src/index.js` is the main file and entry point to the project.
- `index.js` is also the file where our `express` server code will be written.
- All the react components will reside inside the `client` folder including redux.
- All the helper functions for server related code will reside inside of `server` folder.

#### Build Process
- bundle for all the server rendering app will be build into `dist` folder.