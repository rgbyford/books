This may sound like an excuse, and maybe it is.
My Google books project is a complete disaster.
All was going OK until I attempted on Sat 12 to deploy to Heroku.  Whenever I did "git push heroku master," I got errors saying that "if-env" and "PUBLIC_URL" were undefined.  This was a mystery to me, and also to Brandon, who did his all to help me.  At the end of the class we decided I should just rebuild the app from scratch.  I did so (using create-react-app).  I copied my source files into the project, and tried deploying again to Heroku. Same flipping errors.  I decided to try editing the package.json file to get around the errors I was seeing.  Did so, and eventually got the app to deploy successfully to Heroku.  Deploy yes, run no (the app was running fine locally all the while, by the way).

I decided to try and deploy the app to my own server.  Not at all clear how to do that for a client-server React app (I successfully deployed the React "clicky game" a week or so back).  Suffice it to say I had no success.

So the code is in git, and that's about it.  The app does the following:
    Successfully accesses the Google Books api (I used google-books-search), searches for and retrieves books.  
    
    Displays the thumbnails, the summary and all that stuff.
    
    Allows one to save the books to mongo.

    What I have not done (lack of time!) is to allow one to delete books from Mongo.  I have written most of the code, but not tested it.  And (as is usual for me) the app right now is plug-ugly.

I will keep trying to get the deployment to my own server working, but I'm not holding my breath.

