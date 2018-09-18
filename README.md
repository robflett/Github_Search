# Github Search

Github Search

# Rob Flett 

# Brief 
Build a website allowing the user to search Github repositories, using the Github search API. Ensure that there are no globally installed dependencies required to build/run your app.

# Tools:
- React (via create-react-app bootstrap tool)
- Node.js

# Development
I used the create-react-app bootstrap to generate the skeleton of the website. Create-react-app automates the installation of Webpack, Babel (for transpiling) and testing tools. This speeds up development and avoids seperate set-up (which I have done in other  React projects such as the BoozeTracker app). 
I have been working to introduce a 'search-by-topic' feature and this is in place - the user can use dev tools to confirm that a user-entered topic is being searched for and returned in an array. However, the data is not being presented correctly which will require more investigation to correct.


# Future
I would like to develop the functionality further. Currently the user can only search for user profiles and by repository topic. It would be good to build on this to offer more search options. Large number of results could then be filtered with a series of options (most forked, starred, by language) which would improve the utility of the app.
I would also like to improve the look and feel of the website - I would use CSS with Flexbox to do this. 

  
# Setup 
Unzip the file into your chosen directory.
To set up the node server - In the root level type:
```
npm install
```

Once complete type to start the server: 
```
npm start
```

You should be taken directly to the app in your browser but, if not, go to this address to see the GithubSearch app: 
```
localhost:3000/
```