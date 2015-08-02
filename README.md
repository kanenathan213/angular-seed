Angular Seed App
========

What I start with for new Angular projects

## Installing the tools (if you don't already have them)

1. [Download and install Node](https://nodejs.org/). 
2. Go back to the command line and enter each of the following commands.
3. Install Bower: `npm install -g bower`
4. Install Sass: `sudo gem install sass`

### Setup

1. `git clone https://github.intuit.com/nkane/angular-seed.git`. It may be handy to know [common Git commands](http://rogerdudler.github.io/git-guide/).
2. `cd angular-seed/` once the download is done to step into the the seed app folder
3. `sudo npm install` (you may need to enter your password)
4. `sudo bower install` (you may need to enter your password)

## Development workflow

You're going to have three different command line tabs open while developing, each doing something different. So, for each for each of the following, make sure you're in a new command line tab by hitting `Cmd-t` and typing `bash` before doing each step.

1. Start a local server. I use http-server, an npm packge. To get that, use do `sudo npm install http-server -g`. Then, type `http-server`. You should now have a server running; in a new browser tab, go to http://localhost:8080/#/ . If you see 'Hello world', it's working.

2. `grunt` in a new command line tab. Now, anytime you add or edit Sass files (ending with a .scss) in the src/styles/ folder, the browser-ready CSS file that the seed app uses will be updated. It will also catch CSS errors for you in the Terminal. Leave this process running while developing.

3. Open the the seed app folder in your favorite code editor. Mine is [Sublime Text](http://www.sublimetext.com/3).
	- All the needed HTML is in **src/views**. Edit as needed for your prototype.
	- All the needed Sass is in **src/styles**. Edit as needed for your prototype.
	- The AngularJS app is **src/app.js**. This is where you'd put new components (directives with HTML templates) and new routes (for custom URL's).

4. When you make a change, wait 2-3 seconds for Grunt to compile the CSS, then refresh the browser tab with localhost open to see your changes show up.

Contribute
--------------------
Feel free to create pull requests. Please follow Todd Moto's style guide: https://github.com/toddmotto/angularjs-styleguide