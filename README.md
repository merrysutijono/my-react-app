# How to view this React App:
- Install [node.js and npm](https://nodejs.org/en/download).
- Then, install live-server. Open your terminal or command prompt and run 'npm install -g live-server'.
- Alternatively, you can install it as a dev dependency within your project by navigating to your project directory and running 'npm install --save-dev live-server'.
- To navigate to your project directory:
  -> Use the cd command in your terminal to go to the folder where your website files are located.
  -> For example, if your folder is named 'my-app' type 'cd my-app' in your terminal.
- To start the live server, type the following command in your terminal:
  -> If you installed it globally, type 'live-server'.
  -> If you installed it as a dev dependency within your project, type 'npx live-server'.
  -> You can also configure an npm script in your package.json file (if you have one) to run live-server. For example:
json
"scripts": {
  "start": "live-server"
}
  -> Then, run the server with: 'npm start'.
- You can access your website which will open automatically in your browser at localhost:3000 (or another port). 
