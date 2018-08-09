# GitHub Rendered Tech Docs

## Table of Contents:

### [Who Are We](https://github.com/RecursiveThinking/recursive_thinking_website_tech_docs/blob/master/markdown/whoWeAre.md)

### [Getting Started](https://github.com/RecursiveThinking/recursive_thinking_website_tech_docs/blob/master/GitHub_Rendered_TechDocs.md)

### [Front End](https://github.com/RecursiveThinking/recursive_thinking_website_tech_docs/blob/master/GitHub_Rendered_TechDocs.md)

### [Back End](https://github.com/RecursiveThinking/recursive_thinking_website_tech_docs/blob/master/GitHub_Rendered_TechDocs.md)

## Known Limitations:

#### Response Max Age:

Currently, we are using fetch() to retrieve specific markdown files from GitHub.  The problem is that the GitHub response to the fetch assigns a Cache-Control Header which sets the default cache of the file to 300 seconds (5 minutes).  This means that from uploading a new Markdown file to GitHub, it will take at least 5 min before you'll see those changes in your website running on the local host.  :(
    
#### Image Linking:

This has not be throughly tested yet, but I'm guessing there will be some issues with image linking/reading into the markdown files.  Again, needs testing.  This goes for anything that has links probably...