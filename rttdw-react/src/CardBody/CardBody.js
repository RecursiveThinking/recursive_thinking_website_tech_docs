import React from 'react';
import './CardBody.css';
import SimpleModalLauncher from '../SimpleModal/SimpleModalLauncher'


const CardBody = () => {

  return(
    <div className='CardBody'>
      <div id='whoWeAre'></div>
      <div className='pageCard'>
        {/* <SimpleModalLauncher/> */}
        <div className='pageBody'>
          <h4 >What is Recursive Thinking?</h4>
          <hr></hr>
          <p>
            Recursive Thinking (RT) is a collective of people dedicated to career development in the technology space. In order to learn from others, members needed a website to showcase their skillsets to establish connections in and out of RT meetings. As a way to build skills, developers, designers and technical writers work on the website together.
          </p>
          <br></br>
          <p>By participating, you will provide RT collaborators with:</p>
          <ul> 
            <li className="openCircleListDecor">A schedule of upcoming meetings</li>
            <li className="openCircleListDecor">A place to provide lesson requests and vote for lessons</li>
            <li className="openCircleListDecor">Documentation of interview questions and answers</li>
            <li className="openCircleListDecor">A professional profile</li>
          </ul>
          <br></br>
          <p>
            If you would like to work on the website, keep reading our user guide below for information about how to get started.
          </p>
        </div>
      </div>
      <div id='gettingStarted'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Getting Started</h4>
          <hr></hr>
          <p>
            Before you begin, you will need to have a few tools to work on the site. Make sure you have the ones listed in the section below.
          </p>
          <ul className='undecorated'>
            <li>
              <h5><a href="#gettingStartedGetConnected" className="getStartedLink"><span className="linkText">Get Connected</span> </a></h5>
              <p>Learn how we stay in communication and where we do our work. We will cover steps to get connected to the RT Slack channel, the Zeplin page for website mockups and the GitHub page. Slack is the best way to stay in contact. Zeplin shows the RT website mockups. The GitHub page allows you to get the code and start contributing once you have the prerequisites.
              </p>
            </li>
            <br></br>
            <li>
              <h5><a href="#gettingStartedGetPreReqs" className="getStartedLink"><span className="linkText">Get Prerequisites</span></a></h5>
              <p>
                Once you are set up with the tools above, you can start contributing to the website. Keep reading to learn about how to get started on the project.
              </p>
            </li>
            <br></br>
            <li>
                <h5><a href="#gettingStartedGetTheProject" className="getStartedLink"><span className="linkText">Getting The Project from Git</span></a></h5>
                <p>Now that you are connected, find out how to clone the project repository to your local machine and start up a dev server.</p>
            </li>
            <br></br>
            <li>
              <h5><a href="#gettingStartedGetItRight" className="getStartedLink"><span className="linkText">Creating Changes and Additions</span></a></h5>
              <p>Here are some best practices for how to actively contribute. We will show you how to add, commit and push your work back to our GitHub repository.
              </p>
            </li>
            <br></br>
            <li>
              <h5><a href="#gettingStartedGettingThroughConflicts" className="getStartedLink"><span className="linkText">Dealing with Merge Conflicts</span></a></h5>
              <p>
                If multiple people are working on the same file, you may encounter situations where the master branch has different changes than what you have locally. When this occurs, you are going to need to resolve these conflicts. Read more for a merge conflict tutorial.
              </p>
            </li>
            <br></br>
            <li>
              <h5><a href="#gettingStartedBackEndPreRequisites" className="getStartedLink"><span className="linkText">Back End Prerequisites</span></a></h5>
              <p>
                Before working on the back end, you will need to make sure you are set up with the tools in this section.
              </p>
            </li>
            <br></br>
            <li>
              <h5> <a href="#gettingStartedBackEndDeployStack" className="getStartedLink"><span className="linkText">Deploy Back end stack</span></a></h5>
              <p>
                Find out how to work with the back end AWS stack deployment.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id='getConnected'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Get Connected</h4>
          <hr></hr>
          <h5>Join Recursive Thinking on Slack</h5>
          <a href="https://recursivethinking.slack.com" target="/"><span className="linkFormatting">Slack</span></a>
          <p>
            Use this link to join the Recursive Thinking Slack group. Slack is a collaborative message platform where RT members share news, schedule meetup dates and ask and answer questions. If you do not have an account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to join our channel.
          </p>
          <h5>Join Recursive Thinking on GitHub</h5>
          <a href="https://github.com/RecursiveThinking" target="/"><span className="linkFormatting">GitHub</span></a>
          <p>
            Use this link to access the Recursive Thinking GitHub page, which you will need in order to contribute to the website. If you do not have a GitHub account, you will need to create one. Please talk to Hailey Skelcher or Austin Nevins at Dev Day to be invited to the group page.
          </p>
          <h5>Access Site Mockups</h5>
          <a href="https://app.zeplin.io/project/5a35b3271068e9760ef79fc6" target="/"><span className="linkFormatting">Zeplin</span></a>
          <p>Use this link to access Zeplin, a collaborative platform for designers and developers. You will need to sign up to use the web app (or version of your choice). Contact Hailey Skelcher at Dev Day to get invited to see the mockups for this project.</p>
        </div>
      </div>
      <div id='prerequisites'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Prerequisites</h4>
          <hr></hr>
          <p>
            To be able to view and make changes to this project, you will need to install some tools.
          </p>
          <h5>Integrated Development Environment (IDE):</h5>
          <p>
            An IDE is where you write and edit code. If you are just getting started, it is recommended to pick one to learn on, since you can switch to a different IDE at any time. Visual Studio Code (VS Code) is a great one to start with. Note that the following tutorials are specific to VS Code, but if you are more comfortable with another IDE, please use that one. Depending on your preference, you can download one of these IDE options.
          </p>
          <ul>
            <h6>Download Visual Studio Code at </h6>
            <li>
              <p><a href="https://code.visualstudio.com/" target="/" className="linkFormatting">https://code.visualstudio.com</a></p> 
            </li>
            <h6>Download Brackets at </h6>
            <li>
              <p><a href="http://brackets.io/" target="/" className="linkFormatting">http://brackets.io</a></p>
            </li>
            <h6>Download SublimeText at </h6>
            <li>
              <p>
                <a href="https://www.sublimetext.com/" target="/" className="linkFormatting">https://www.sublimetext.com</a>
              </p>
            </li>
            <h6>Download WebStorm at </h6>
            <li>
              <p>
                <a href="https://www.jetbrains.com/webstorm/" target="/" className="linkFormatting">https://www.jetbrains.com/webstorm</a>
              </p>
            </li>
          </ul>
          <h5>Download Node.js</h5>
          <p> 
            Select the version for your OS at <a href="https://nodejs.org/en/" target="/"><span className="linkFormatting">https://nodejs.org/en</span></a>. Node.js is needed to install helper modules (libraries) for JavaScript.
          </p>
          <p>
            You can check if Node and npm (bundled with Node) are installed by opening your terminal/command line and typing:
          </p> 
          <p>
            <span className="codeSnippetGitCommand">node -v</span> or <span className="codeSnippetGitCommand">npm -v</span>
          </p>
          <p>
            Then, hit the 'enter' key. This is how you run commands. It will return a version number (for Node or npm) below if correctly installed, such as v8.11.3 (or whatever the recommended version is at your time of install).
          </p>
          <h5>Download Git</h5>
          <p> 
            Select the version for your OS at <a href="https://git-scm.com/downloads" target="/"><span className="linkFormatting">https://git-scm.com/downloads</span></a>. Git is a version control system to help track changes made to code. Git makes it possible for multiple people to work on the RT site, even at the same time.
          </p> 
          <p>
            *Windows Users: Note that Mac (OS X) has a built-in terminal that supports Bash. Windows does not. When you install Git on Windows, it should, by default, install <a href="https://stackoverflow.com/questions/17807485/what-is-the-exact-meaning-of-git-bash" target="_blank" rel='noopener noreferrer' alt=''><span className="linkFormatting">Git Bash</span></a>, which is the terminal most often used to run git commands. Windows users can check for a Git Bash installation simply by searching for it in their start bar or Windows Explorer. However, in the next year, people with a current copy of Windows 10 could see native support for Git Bash. 
          </p>
        </div>
      </div>
      <div id='getTheProject'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Getting the Project from GitHub</h4>
          <hr></hr>
          <p>
            To work on the Recursive Thinking website project, you will need to transfer the project files from the RT GitHub repository to your computer. This is done through a git clone.
            There are two different repositories you will need to clone from the Recursive Thinking GitHub Page.      
          </p>
          <h6>Front End:</h6>
          <ul>
            <li>
              <p>
                <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website" target="/">recursive-thinking-website</a>
              </p>
            </li>
          </ul>
          <h6>Back End:</h6>
          <ul>
            <li>
              <p>
                <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_server" target="/">recursive-thinking-server</a>
              </p>
            </li>
          </ul>
          <p>
            First, we will work on the front end.
          </p>
          <h5>Git Clone</h5>
          <ol className='numberedList'>
            <li>
              <p>
                Before you begin, run:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git --version</span>
              </p>
              <p>
                This command should return the version number of Git that you installed. If it does not, you need to repeat the download and installation of Git (see <a className="linkFormatting" href="#gettingStartedGetPreReqs">Prerequisites</a> ). If this command returns a version of Git that your machine is running, you are all set to continue (e.g. vX.X.X.windows.X).
              </p> 
            </li>
            <li>
              <p>
                Next, make sure you are in the directory/folder where you want the files to go. For example, if you have a web projects directory, navigate into that folder before you start running the git commands. This is important because when the git commands are executed, the repository will be created in the current working directory (where you are in the terminal).
              </p>
            </li>
            <li>
              <p>
                Third, go to the the <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website" target="/">Recursive Thinking Website</a> GitHub Page. To the far right, you should see a green "Clone or download" button. Click the button to find the address, which will, depending on your configuration, be either in https:// or ssh. Since https:// is the default protocol (and using ssh requires special setup), we will only cover how to use https:// in this section.
                The https:// address for the Recursive Thinking Website is:            
              </p>
              <p>
                <a className="linkFormatting" href="https://github.com/RecursiveThinking/recursive_thinking_website.git" target="_blank" alt='' rel='noopener noreferrer'>https://github.com/RecursiveThinking/recursive_thinking_website.git</a>
              </p>
              <img src={require("./images/git-clone.jpg")} alt="Click the green “Clone or download” button to find the website URL."></img>
              <p className="img-caption">
                Click the green “Clone or download” button to find the website URL.
              </p>
            </li>
            <li>
              <p>
                Perform a git clone by running:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git clone https://github.com/RecursiveThinking/recursive_thinking_website.git</span>
              </p>
              <p>
                After executing this command, you should see some additional status reports in your terminal indicating the current progress as well as the success/failure of this command. If the command was successful, you should see a folder named "recursive-thinking-website" in the directory where you executed the git clone command. If you do not get a successful clone, and you do not see the folder in your directory, please re-run these steps until you do.
              </p>
            </li>
            <li>
              <p>
                The Recursive Thinking website uses <a className="linkFormatting" href="https://webpack.js.org/" target="_blank" alt='' rel='noopener noreferrer'>webpack</a> to compile all of the separate HTML, CSS and JavaScript files into a single page application.
              </p>
              <p>
                webpack is a part of <a className="linkFormatting" href="https://www.npmjs.com/" target="_blank" alt='' rel='noopener noreferrer'>Node Package Manager</a> (npm), which allows users from all over to share "building blocks" of JavaScript code.
              </p>
              <p>
                In the Recursive Thinking Website folder, you will see a file called package.json. The package.json file contains all the npm modules needed to run the website.
              </p>
              <p>
                Install the required node modules to run webpack by running:  
              </p>
              <p>
                <span className="codeSnippetGitCommand">npm install</span>
              </p>
              <p>
                If all the required node packages are installed successfully, you should now see a "node_modules" folder in the recursive_thinking_website directory. If not, please repeat the last step.
              </p>
              <p>
                Once you have the node_modules folder, run: 
              </p>
              <p>
                <span className="codeSnippetGitCommand">npm run start</span>
              </p>
              <p>
                This command causes a lot of output in the terminal, so please wait a few seconds for webpack to build/bundle the site files. It will then open a tab in your default browser, at localhost://8000, and will load the website.
              </p>
              <ol className="alpha-list">
                <li>
                  <p>
                    Learn more about npm install <a className="linkFormatting" href="https://docs.npmjs.com/cli/install"  target="_blank" alt='' rel='noopener noreferrer'>here</a>.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                Run the webpack dev server.
              </p>
              <ol className="alpha-list">
                <li>
                  <p>
                    Kick off the build sequence to open a tab in your browser that will show the website by running:
                  </p>
                  <p>
                    <span className="codeSnippetGitCommand">npm run dev-server</span> 
                  </p>
                </li>
                <li>
                  <p>
                    Now the project should be up and running on your local host.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                Check the mockups.
              </p>
              <ol className="alpha-list">
                <li>
                  <p>
                    In order to see the mockups, you will need to be added to the Zeplin site. Email <a className="linkFormatting" href="mailto:haileyskelcher@hotmail.com">haileyskelcher@hotmail.com</a> to gain access.
                  </p>
                </li>
                <li>
                  <p>
                    Find the mockups at <a className="linkFormatting" href="https://app.zeplin.io/project/5a35b3271068e9760ef79fc6" target="_blank" alt='' rel='noopener noreferrer'>https://app.zeplin.io/project/5a35b3271068e9760ef79fc6</a>. 
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <h5>Other Prerequisites</h5>
          <p>At this point, you will be able to run the front end of the Recursive Thinking website, but you will not be able to log in, as logging in requires the AWS back end. We will cover back end installation later on in the documentation.</p>
        </div>
      </div>
      <div id='contributing'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Creating Changes and Additions</h4>
          <hr></hr>
          <p>
            Now that you are all set up, you can learn how to do work on the site.
          </p>
          <h5>Committing Changes</h5>
          <p>
            If you have done some work on the website and you want to push your changes to the repository, perform the following commands.
          </p>
          <ol>
            <li>
              <p>Make sure that the terminal is in the correct project directory, and that project directory is a valid repository.  This can be done by running:</p> 
              <p><span className="codeSnippetGitCommand">git status</span></p>
              <p>There are two possible outcomes:</p>
            </li>
              <ol className="alpha-list">
                <li>
                  <p>
                    The terminal is not in a valid repository/location.  If this is the case, you will see the error “<span className='errorStyle'>fatal: Not a git repository (or any of the parent directories): .git</span>”
                    <br></br>
                    If you see this, please navigate into a valid project/repository folder in your terminal.
                  </p>
                </li>
                <img src={require("./images/git_check_01_git_status_error.jpg")} alt="The fatal status"></img>
                <p className="img-caption">
                  The fatal status.
                </p>
                <li>
                  <p>
                    The terminal is in a valid respository/location.  If this is the case, you will see some notifications about the status of that repository and the current status of any tracked/untracked files that have not yet been committed.
                  </p>
                </li>
                <img src={require("./images/git_check_02_git_status_success.jpg")} alt="The successful status"></img>
                <p className="img-caption">
                  The successful status.
                </p>
              </ol>
              <li>
                Add untracked files. 
              </li>
              <ol className="alpha-list">
                <li>
                  <p>
                    If you have created new files or made changes to existing ones, you will need to add your changes.
                  </p>
                  <ol className="roman-list">
                    <li>
                      <p>
                        First, run the command:
                      </p> 
                      <p>
                        <span className="codeSnippetGitCommand">git status</span> 
                      </p>
                      <p>
                        This is to make sure that you are on the master branch, which reflects the production-ready state. This will also allow you to see what files have not yet been added, as they will appear in red. Added files will appear in green. 
                      </p>
                    </li>
                    <img src={require("./images/committing1.jpg")} alt="The untracked files are displayed in red."></img>
                    <p className="img-caption">
                      The untracked files are displayed in red.
                    </p>
                    <li>
                      <p>
                        To add files, run: 
                      </p>
                      <p><span className="codeSnippetGitCommand">git add -filename-</span></p>    
                      <p>For example, if you created or edited a file named “readMe1,” you would add the file by running the command:</p>
                      <p><span className="codeSnippetGitCommand">git add readME1.md</span>
                      </p>
                      <br></br>
                      <img src={require("./images/committing2.jpg")} alt="Add each file (readMe1, readMe2 and readMe3)."></img>
                      <p className="img-caption">
                        Add each file (readMe1, readMe2 and readMe3).
                      </p>
                      <p>
                        Once added, they will appear green when you run: 
                      </p>
                      <p><span className="codeSnippetGitCommand">git status</span></p>
                      <img src={require("./images/committing3.jpg")} alt="Now that the files have been added, they will appear in green when you check their status."></img>
                      <p className="img-caption">
                        Now that the files have been added, they will appear in green when you check their status.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    When you are ready to commit your changes, you can run the commit command, which includes a mandatory message detailing what action you have taken. Do this by running:
                  </p>
                  <p><span className="codeSnippetGitCommand">git commit -m “”</span></p>
                  <p>
                    Inside of the quotation marks, you will type your message details. 
                  </p>
                  <p>
                    For example, once you are ready to commit readMe1.md, you would run:
                  </p>
                  <p>
                    <span className="codeSnippetGitCommand">git commit -m “now I have pushed the files where we have resolved conflicts”</span>
                  </p>
                  <p>
                    You may choose whatever message makes the most sense for your commit.
                  </p>
                  <img src={require("./images/committing4.jpg")} alt="The files have been committed and include a message detailing the action taken."></img>
                  <p className="img-caption">
                    The files have been committed and include a message detailing the action taken.
                  </p>
                </li>
              </ol>
              <li>
                <p>
                  Push up your changes.
                </p>
              </li>
              <ol className="alpha-list">
                <li>
                  <p>
                    To make the final step in pushing your changes to Git, where they will show up in your commit history and in the project directory on GitHub, run:
                  </p>
                  <p>
                    <span className="codeSnippetGitCommand">git push origin master</span>
                  </p>
                  <img src={require("./images/committing5.jpg")} alt="The files have been pushed to master."></img>
                  <p className="img-caption">
                    The files have been pushed to master.
                  </p>
                </li>
                <li>
                  <p>
                    If successful, when future collaborators pull the repository, your changes will have been included. 
                  </p>
                </li>
              </ol>
          </ol>
        </div>
      </div>
      <div id='mergeConflicts'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Dealing with Merge Conflicts</h4>
          <hr></hr>
          <p>
            Merge conflicts occur when someone pushes changes to master after another person has pushed changes to that same file to
            master. More specifically, if Person A and Person B start working on the same file and Person A pushes changes
            to that file, but Person B pushes changes to the same file without rebasing their branch to pick up the changes
            from Person A’s commit, then you may have a merge conflict.
          </p>
          <p>
            The screenshots below show the local computer, which does not have the most recent changes from master. In this example,
            Person B has done the git commands mentioned in the previous section (status, add, commit). They made a commit
            annotated as “this commit will error when pushed - as the head is one commit further than this local.”
          </p>
          <img src={require("./images/merge1.jpg")} alt="All files have been committed."></img>
          <p className="img-caption">
            All files have been committed.
          </p>
          <p>
            When the user runs
            the following command, they encounter an error because of a merge conflict:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git push origin master</span>
          </p>
          <img src={require("./images/merge2.jpg")} alt="The user encounters a merge conflict, noted by the “! [rejected]” message."></img>
          <p className="img-caption">
            The user encounters a merge conflict, noted by the “! [rejected]” message.
          </p>
          <p>
            If you are experiencing a merge conflict, follow the steps below.
          </p>
        </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Resolving Conflicts</h4>
          <hr></hr>
          <p>
            Follow this 8-step tutorial to resolve your merge conflicts.
          </p>
          <br></br><br></br>
          <p>
            In order to resolve this conflict, run the following commands:
          </p>
          <p>
            1. To download all commits from the remote repository (GitHub) that your local computer
            does not have, run:
          </p>
          <p><span className="codeSnippetGitCommand">git fetch --all</span></p>
          <img src={require("./images/merge3.jpg")} alt="The user should see “Fetching origin” after running the command."></img>
          <p className="img-caption">
            The user should see “Fetching origin” after running the command.
          </p>
          <br></br><br></br>
          <p>
            2. Now you will need to rebase your local computer to master. This command allows you to walk through all changes (Person
            A’s and Person B’s) and let you decide which to keep. To do this, run:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git rebase origin/master</span>
          </p>
          <img src={require("./images/merge4.jpg")} alt="After running this rebase command, you will see everyone’s changes made to each respective file."></img>
          <p className="img-caption">
            After running this rebase command, you will see everyone’s changes made to each respective file.
          </p>
          <br></br><br></br>
          <p>
            3. For each file that contains a merge conflict, you will be presented with three options.
          </p>
          <p>
            Part 1/3- Accept Current Changes
          </p>
          <p>
            This means that you are accepting the changes from origin/master. (This most recent version of a branch, in this case master,
            is known as HEAD.)
          </p>
          <img src={require("./images/merge5.jpg")} alt="Accepting current changes, or HEAD, would mean the user chooses to accept “readme 3 Warren” as the final changes."></img>
          <p className="img-caption">
            Accepting current changes, or HEAD, would mean the user chooses to accept “readme 3 Warren” as the final changes.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge6.jpg")} alt="ReadMe 1: Accept Current Changes (origin) result."></img>
          <p className="img-caption">
            ReadMe 1: Accept Current Changes (origin) result.
          </p>
          <br></br><br></br>
          <p>
            3.
          </p>
          <p>
            Part 2/3- Accept Incoming Changes
          </p>
          <p>
            This means you are accepting the changes you have made locally.
          </p>
          <img src={require("./images/merge7.jpg")} alt="Accepting incoming changes, or the changes from your local computer, would mean the user chooses to accept “Changes from
          Local1” as the final changes."></img>
          <p className="img-caption">
            Accepting incoming changes, or the changes from your local computer, would mean the user chooses to accept “Changes from
            Local1” as the final changes.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge8.jpg")} alt="ReadMe 1: Accept Incoming Changes (local) result."></img>
          <p className="img-caption">
            ReadMe 1: Accept Incoming Changes (local) result.
          </p>
          <br></br><br></br>
          <p>
            3.
          </p>
          <p>
            Part 3/3- Accept Both Changes
          </p>
          <p>
            This means you are accepting the changes from origin/master and your local changes.
          </p>
          <img src={require("./images/merge9.jpg")} alt=" Accepting both changes, or the changes from your local computer and from master, would mean the user chooses to accept “readme
          3 Warren” and “Changes from Local1” as the final changes."></img>
          <p className="img-caption">
            Accepting both changes, or the changes from your local computer and from master, would mean the user chooses to accept “readme
            3 Warren” and “Changes from Local1” as the final changes.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge10.jpg")} alt="ReadMe 1: Accept Both Changes (origin and local) result."></img>
          <p className="img-caption">
            ReadMe 1: Accept Both Changes (origin and local) result.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge11.jpg")} alt="ReadMe 2: Accept Both Changes (origin and local) result."></img>
          <p className="img-caption">
            ReadMe 2: Accept Both Changes (origin and local) result.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge12.jpg")} alt="ReadMe 3: Accept Both Changes (origin and local) result."></img>
          <p className="img-caption">
            ReadMe 3: Accept Both Changes (origin and local) result.
          </p>
          <br></br><br></br>
          <p>
            4. To apply your commits, you will first need to add your files. Begin this by running:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git rebase --continue</span>
          </p>
          <img src={require("./images/merge13.jpg")} alt="The user is shown a message instructing them to add the files."></img>
          <p className="img-caption">
            The user is shown a message instructing them to add the files.
          </p>
          <br></br><br></br>
          <p>
            5. To see what file changes are untracked, run:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git status</span>
          </p>
          <img src={require("./images/merge14.jpg")} alt="Untracked files are noted in red."></img>
          <p className="img-caption">
            Untracked files are noted in red.
          </p>
          <br></br><br></br>
          <p>
            6. For each file, run:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git add {'{'}filename{'}'}
            </span>
          </p>
          <img src={require("./images/merge15.jpg")} alt="You can add each file individually, or you can add all files using the git add . command."></img>
          <p className="img-caption">
            You can add each file individually, or you can add all files using the
            <span className="commentCodeSnippetCommand">git add .</span> command.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge16.jpg")} alt="Adding ReadMe2."></img>
          <p className="img-caption">
            Adding ReadMe2.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge17.jpg")} alt="Adding ReadMe3."></img>
          <p className="img-caption">
            Adding ReadMe3.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge18.jpg")} alt="Running the
          git status command shows that all three files have been added successfully, noted in green."></img>
          <p className="img-caption">
            Running the
            <span className="commentCodeSnippetCommand">git status</span> command shows that all three files  have been added successfully, noted in green.
          </p>
          <br></br><br></br>
          <p>
            7. Continue the rebase in order to apply your commits by running:
          </p>
          <p>
            <span className="codeSnippetGitCommand">git rebase --continue</span>
          </p>
          <img src={require("./images/merge19.jpg")} alt="The original commit is being pushed, noted with the user’s original message “this commit will error when pushed - as the
          head is one commit farther than this local.”"></img>
          <p className="img-caption">
            The original commit is being pushed, noted with the user’s original message “this commit will error when pushed - as the
            head is one commit farther than this local.”
          </p>
          <br></br><br></br>
          <img src={require("./images/merge20.jpg")} alt="Save ReadMe 1."></img>
          <p className="img-caption">
            Save ReadMe 1.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge21.jpg")} alt="Save ReadMe 2."></img>
          <p className="img-caption">
            Save ReadMe 2.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge22.jpg")} alt="Save ReadMe 3."></img>
          <p className="img-caption">
            Save ReadMe 3.
          </p>
          <br></br><br></br>
          <p>
            8. Continue by committing and pushing your changes as usual.
          </p>
          <img src={require("./images/merge23.jpg")} alt="Run the
          git status command."></img>
          <p className="img-caption">
            Run the 
            <span className="commentCodeSnippetCommand">git status</span> command.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge24.jpg")} alt="Run the
          git add command for ReadMe 1."></img>
          <p className="img-caption">
            Run the 
          <span className="commentCodeSnippetCommand">git add</span> command for ReadMe 1.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge25.jpg")} alt="Run the
          git add command for ReadMe 2 and 3."></img>
          <p className="img-caption">
            Run the 
            <span className="commentCodeSnippetCommand">git add</span> command for ReadMe 2 and 3.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge26.jpg")} alt="Files have been successfully added, noted in green."></img>
          <p className="img-caption">
            Files have been successfully added, noted in green.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge27.jpg")} alt="Run the
          git commit command."></img>
          <p className="img-caption">
            Run the 
            <span className="commentCodeSnippetCommand">git commit</span> command.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge28.jpg")} alt="Run the
          git push origin master command."></img>
          <p className="img-caption">
            Run the 
            <span className="commentCodeSnippetCommand">git push origin master</span> command.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge29.jpg")} alt="Here is the commit history. The second commit is where the conflict occurs, the third commit is where the user is presented
          with an error message upon pushing, and the final commit is after the conflicts have been resolved."></img>
          <p className="img-caption">
            Here is the commit history. The second commit is where the conflict occurs, the third commit is where the user is presented
            with an error message upon pushing, and the final commit is after the conflicts have been resolved.
          </p>
          <br></br><br></br>
          <img src={require("./images/merge30.jpg")} alt="When you click on a commit, you can see what changes have been accepted. This visual shows the code of the final commit."></img>
          <p className="img-caption">
            When you click on a commit, you can see what changes have been accepted. This visual shows the code of the final commit.
          </p>
          <br></br><br></br>   
        </div>
      </div>
      <div id='backEndPrereqs'></div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Back End PreRequisites</h4>
          <hr></hr>
          <p>
            The following are the back end prerequisites for the Recursive Thinking website.
          </p>
          <h5>
            Install Python 
          </h5>
          <p>
            Select the version for your OS at <a href="https://www.python.org/" target="/"><span className="linkFormatting">https://www.python.org</span></a>. Our deployment script (deployrtw.py), which runs the Amazon Web Services Command Line Interface (AWS CLI) and processes the template.yml file into different Amazon Web Services, runs on Python.
          </p>
          <p>
            A quick way to test if you have Python installed is to run the following command in the CLI/terminal:
          </p>
          <p>
            <span className="codeSnippetGitCommand">python --version</span> 
          </p>
          <p>
            If you do not see "Python X.X.X" (where the X's are version/release numbers), then you do not have Python installed. If this is the case, click on the link above to go to the Python Software Foundation's website and download a copy for your version of OS.
          </p>
          <p>
            *Note: Currently, some of the code in deployrtw.py requires modules only available in Python 3, so please download a Python 3 version to prevent errors in running the script.
          </p>
          <h5>
            Install AWS CLI
          </h5>
          <p>
            Select the version for your OS at <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html" target="/"><span className="linkFormatting">https://docs.aws.amazon.com/cli/latest/userguide/installing.html</span></a>. The deployment script executes AWS CLI commands in order to build the back end stack of component services.
          </p>
          <p>
            A quick way to test if you have AWS CLI installed is to run the following command in the CLI/terminal:
          </p>
          <p>
            <span className="codeSnippetGitCommand">aws --version</span>
          </p>
          <p>
            This should return a message with your version, such as:
            <br></br><br></br> aws-cli/1.11.84 Python/3.5.2 Linux/4.4.0-59-generic botocore/1.5.47
          </p>
          <h5>
            Create an AWS Account
          </h5>
          <p>
            Create your account at <a href="https://aws.amazon.com/free/" target="/"><span className="linkFormatting">https://aws.amazon.com/free</span></a>. You will use AWS to create your own back end for the website.
          </p>
          <h5>
            Configure AWS CLI
          </h5>
          <p>
            Once you install AWS CLI, you will need to configure it so that it points to your AWS account. Find the instructions to do this at <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html" target="/"><span className="linkFormatting">https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html</span></a>.
          </p>
          <p>
            Please note that there has been some confusion with the instructions regarding Identity and Access Management (IAM) user names. This is addressed in the section "To get the access key ID and secret access key for an IAM user" under step 3 ("Choose your IAM user name"). To cover creating an IAM resource and setting permissions more thoroughly, you will find a step-by-step guide below.
          </p>
          <ul>
            <li>
              <h5>Creating an IAM Resource and Setting Permissions</h5>
              <p>
                It is recommended that you check the AWS credentials and config file as described in the documentation.
              </p>
              <p>
                The credentials file should contain the AWS access key ID and the AWS secret access key.
              </p>
              <p>
                The config file should contain the region name and default output format.
              </p>
              <p>
                If these files have both these keys and the correct values from your account, you should have a properly configured AWS CLI.
              </p>
            </li>
            <li>
              <h5>
                Begin Valid Git Email Configuration
              </h5>
              <p>
                All Amazon Simple Storage Service (S3) buckets and folders need to have unique names. deployrtw.py creates a unique bucket name using both the stack name (recursive-thinking-server) and the email address provided in your Git configuration.
              </p>
              <p>
                Because of this, the local Git config needs a valid email.
              </p>
              <p>
                First, check to see if a valid email is configured in Git by running:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email</span>
              </p>
              <p>
                What should log to the screen is a properly formatted email address like:
              </p>
              <p>
                -yourNameHere-@-anEmailServiceProvider-.com
              </p>
              <p>
                If you do not see a valid email returned, then set it running:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email -yourNameHere-@-anEmailServiceProvider-.com"</span>
              </p>
              <p>
                Please note that -yourNameHere- and -anEmailServiceProvider- represent unique information that you provide (braces not included).
              </p>
              <p>
                Test this again by running:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email</span>
              </p>
              <p>
                At this point, you should have a valid email input.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Creating an IAM Resource and Setting Permissions</h4>
          <hr></hr>
          <ul>
            <li>
              <p>1. Open the IAM console.</p>
              <p>Select "Users" from left menu.</p>
              <p>Click the "Add user" button.</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_00_Add_User.jpg")} alt=""></img>
            </li>
            <li>
              <p>2. Fill in your desired name.</p>
              <p>Select "Programatic access" checkbox.</p>
              <p>Click "Next: Permissions."</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_01_Name_and_Type.jpg")}alt=""></img>
            </li>
            <li>
              <p>3a. Select the "Attach existing policies directly" div (an HTML element).</p>
              <p>In the policy table, click the "AdministratorAccess" checkbox.</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_02_01_Permissions.jpg")} alt=""></img>
              <p>3b. Under "Set permissions boundary," select "Create user without a permissions boundary."</p>
              <p>Click "Next: Review."</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_02_02_Permissions.jpg")} alt=""></img>
            </li>
            <li>
              <p>4. Make sure configuration matches the image below.</p>
              <p>If so, select "Create user."</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_03_Review.jpg")} alt=""></img>
            </li>
            <li>
              <p>5. If user creation is successful, you will see the following page.</p>
              <p>*IMPORTANT NOTE: This is the only place where you can copy your AWS secret access key!</p>
              <p>Copy your access key (see note above), or download the .csv file (which contains both codes) for future use.</p>
              <br></br>
              <img src={require("./images/creating_IAM_user_04_Success.jpg")} alt=""></img>
            </li>
          </ul>
        </div>
      </div>
      <div id='deployBackEnd'></div>
      <div className='pageCard'>
          <div className='pageBody'>
            <h4>Deploy Back End Stack</h4>
            <hr></hr>
            <p>
              Please make sure that all the prerequisites are properly installed and configured.  If there is any doubt, please review the previous tab, <a href="#gettingStartedBackEndPreRequisites"><span
                className="linkFormatting">Back End Prerequisites</span></a>.
              <br></br><br></br>
              There are three major components to the back end AWS stack deployment.
            </p>
            <ol>
              <li>
                <h6>deployrtw.py</h6>
                <p>
                  deployrtw.py contains several different AWS CLI commands that will execute the configuration options contained inside the template.yml file.
                  <br></br><br></br>
                  In addition to building the AWS stack, the deployrtw.py file also:
                </p>
                <ol className="alpha-list">
                  <li>
                    <p>
                      Autofills our DynamoDB tables with values, providing default inputs for the skills table.
                    </p>  
                  </li>
                  <li>
                    <p>
                      Exports a .json file of credentials for Cognito and S3, both of which are used to connect our front end and back end components.
                    </p>
                  </li>
                  <li>
                    <p>
                      Uploads all of our Lambdas.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h6>template.yml</h6>
                <p>
                  This file is a CloudFormation (the Amazon Web Service which will build our stack) template containing the configuration options for all services we will use for our site.  These include:
                </p>
                <ol className="alpha-list">
                  <li>
                    <p>API Gateway</p> 
                  </li>
                  <li>
                    <p>Lambda</p>
                  </li>
                  <li>
                    <p>DynamoDB</p>
                  </li>
                  <li>
                    <p>Cognito</p>
                  </li>
                  <li>
                    <p>S3</p>
                  </li>
                </ol>
              </li>
              <li>
                <h6>Supporting files which include:</h6>
                <ol className="alpha-list">
                  <li>
                    <p>
                      Lambdas
                    </p>
                  </li>
                  <li>
                    <p>
                      .json files of default information for DynamoDB Tables
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>CloudFormation Configuration</h4>
          <hr></hr>
          <p>
            Follow this 4-step tutorial to help configure CloudFormation in AWS services. This will help you determine if your stack has been built yet.
          </p>
          <p>
            1. Log in to your AWS account, and select “CloudFormation” from the list of AWS services.  
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_01a_CloudFormation.jpg")} alt="CloudFormation in the list of AWS services."></img>
          <p className="img-caption">
            CloudFormation in the list of AWS services.
          </p>
          <p>
            2. If CloudFormation is not easily visible, just type it into the search bar.
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_01b_CloudFormation_Search.jpg")} alt="CloudFormation appears in the dropdown.
          "></img>
          <p className="img-caption">
            CloudFormation appears in the dropdown.
          </p>
          <p>
            3. Once in CloudFormation, you will see a list of available stacks. In this case, however, there will be no stacks, because we have not deployed yet.   
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_02_CloudFormation_Stacks.jpg")} alt="No stacks will appear at this time."></img>
          <p className="img-caption">
            No stacks will appear at this time.
          </p>
          <p>
            4. At the end of these instructions, expect to see "recursive-thinking-server" as a row on the page. If you see that, you were successful.
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_06_CloudFormation_Stacks_Success.jpg" )}alt="Recursive-thinking-server is now a stack."></img>
          <p className="img-caption">
            Recursive-thinking-server is now a stack.
          </p>
        </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Deployment Process</h4>
          <hr></hr>
          <p>
            Follow this 4-step tutorial on deploying the back end. The tutorial will walk you through running the Python script to build the back end and error troubleshooting.
          </p>
          <br></br>
          <p>
            1. Make sure that you are inside recursive_thinking_server in your terminal/CLI. 
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_03_terminal.jpg")} alt="In recursive_thinking_server."></img>
          <p className="img-caption">
            In recursive_thinking_server.
          </p>
          <p>
            2. Run the command:
          </p>
          <p>
            <span className="codeSnippetGitCommand">./deployrtw.py</span>  
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_04_deployrtw_py.jpg")} alt="Run: ./deployrtw.py"></img>
          <p className="img-caption">
            Run: <span className="codeSnippetGitCommand">./deployrtw.py</span>
          </p>
          <p>
            3. Watch the CLI/terminal output.  Make sure that all the commands in the script execute successfully and do not error. 
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_05_deployrtw_py_secrets.jpg")} alt="Successful command execution."></img>
          <p className="img-caption">
            Successful command execution.
          </p>
          <p>
            4. When all the commands execute successfully, log in to your AWS account again and select CloudFormation.  “recursive-thinking-server” should now be an available stack. Make sure the message reads “CREATE_COMPLETE,” and is green.  A different message, especially one in red, generally indicates an error. Continue the tutorial if the stack is not displaying correctly.
          </p>
          <br></br>
          <img src={require("./images/stack_deployment_06_CloudFormation_Stacks_Success.jpg")} alt="Recursive-thinking-server is now a stack."></img>
          <p className="img-caption">
            Recursive-thinking-server is now a stack.
          </p>
          <h5>
            Stack Creation Errors
          </h5>
          <p>
            You may go through the entire setup process above, run the script, receive a message that says “Successfully created/updated stack - recursive-thinking-server” in your terminal, but when you go to the AWS CloudFormation console, the stack does not appear. Read below to successfully find the stack.
          </p>
          <br></br>
          <img src={require("./images/where_is_my_stack_00_no_stack.jpg")} alt="The recursive-thinking-server stack does not appear."></img>
          <p className="img-caption">
            The recursive-thinking-server stack does not appear.
          </p>
          <p>
            AWS has many regions (at the time of writing there are 15 regions worldwide). For the back end stack, it is possible to have the same stack in multiple locations, as the stack has a region identifier in its stack ID.  (This can be seen by clicking the checkbox for a stack, and looking for the stack ID in the Overview tab.)
          </p>
          <p>
            The AWS region where the stack gets published to is held in the .config file created during the AWS CLI configuration steps. If the current AWS CLI profile is set to a default region of us-west-2, then the stack is going to be in the CloudFormation console for just that AWS region.
          </p>
          <p>
            The problem here is that when you first create an AWS account, it always defaults to AWS region us-east-1.
          </p>
          <p>
            To fix this, if you know your stack was created successfully, and you know what AWS region is specified in your .config file, go the CloudFormation console, and click on the dropdown menu button that is second from the right. Clicking this button will reveal a dropdown of all AWS regions.
          </p>
          <br></br>
          <img src={require("./images/where_is_my_stack_01_aws_stack_regions.jpg")} alt="A list of all AWS regions."></img>
          <p className="img-caption">
            A list of all AWS regions.
          </p>
          <p>
            In this dropdown, select the region that corresponds to your .config file setting.  In this case, the user would select “US West (Oregon)” as this option is us-west-2, which is the region specified in this user’s .config file.
          </p>
          <p>
            For more information on region name to region code translation, read <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html" target="_blank" rel='noopener noreferrer'><span
              className="linkFormatting">this guide</span></a>.
          </p>
          <br></br>
          <img 
          src={require("./images/where_is_my_stack_02_aws_stack_correct_region.jpg")} alt="The recursive-thinking-server stack is successfully shown."></img>
          <p className="img-caption">
            The recursive-thinking-server stack is successfully shown.
          </p>
        </div>
      </div>
      <div className='pageCard'>
        <div className='pageBody'>
          <h4>Deploy Back End- Terminal/CLI Output Breakdown</h4>
          <hr></hr>
          <p>
            Below is an image of the current back end deployment, with major blocks highlighted and labeled. This is provided to help as a general understanding of how the script works and its major components.
          </p>
          <br></br>
          <div>
            <img src={require("./images/stack_deployment_script_component_breakdown.jpg")} alt="Back end deployment."></img>
            <p className="img-caption">
              Back end deployment.
            </p>
          </div>
        </div>
      </div>
      <div id="deployBackend"className='pageCard'>
        <div className='pageBody'>
          <h4>Deploy Back End- Errors and Solutions</h4>
          <hr></hr>
          <ol>
            <li>
              <h6>Error:</h6>
              <p>
                upload failed: .\-LambdaFolderNameHere-.zip to s3://recursive-thinking-assets-us-west-2-<span className='red'>{'{'}Custom Folder Name Based on Users GitHub Email Address{'}'}/{'{'}Dated Folder{'}'} ({'{'}Time of Running Script{'}'}/{'{'}LambdaFolderNameHere{'}'}</span>.zip Parameter validation failed:
              </p>
              <p>
                Invalid bucket name “recursive-thinking-assets-us-west-2-<span className="red">-Custom Folder Name Based on Users GitHub Email Addresses-</span>”: Bucket name must match the regex “^[a-zA-Z0-9.\-_]{'{'}1, 255{'}'}$”
              </p>
              <h6>Context:</h6>
              <p>
                No S3 bucket (or folder in a bucket) can have the same name. This is across all buckets in all users S3. deployrtw.py creates a unique bucket name using both the stack name and the email address provided in your Git configuration.
              </p>
              <h6>Problem:</h6>
              <p>
                The user running the script either has no email in the Git configuration, or has one that is invalid (fails the regex).
              </p>
              <h6>Solution:</h6>
              <p>
                Check to see if a valid email is configured in Git by running: 
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email</span>
              </p>
              <p>
                What should log to the screen is a properly formatted email address, like: 
              </p>
              <p>
              {'{'}yourNameHere{'}'}@{'{'}anEmailServiceProvider{'}'}.com
              </p>
              <p>
                If you do not see a valid email returned, then please set it by running: 
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email "{'{'}yourNameHere{'}'}@{'{'}anEmailServiceProvider{'}'}.com"</span>
              </p>
              <p>
                Please note that {'{'}yourNameHere{'}'} and {'{'}anEmailServiceProvider{'}'} represent unique information that you provide.  Do not enter these as your actual values.
              </p>
              <p>
                Test this again by running:
              </p>
              <p>
                <span className="codeSnippetGitCommand">git config --global user.email</span>
              </p>
              <p>
                At this point, you should have a valid email input.
              </p>
              <p>
                Re-run the script with the valid email, at which point you should not see this error message. If the message persists, you may have invalid characters in the email string which fails the regex.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default CardBody;