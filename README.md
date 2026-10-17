# Node.js Posts Management App

A beginner-friendly web application built using Node.js, Express.js, and EJS to create, view, edit, and delete posts.

About the Project

This project is a simple posts management application that demonstrates the basic CRUD operations in web development. Users can create new posts, view post details, edit existing post content, and delete posts through a web interface.

Features

- View Posts: Display all available posts on the home page.
- Create Posts: Add new posts with a username and content.
- View Details: Open an individual post to see its details.
- Edit Posts: Update the content of an existing post.
- Delete Posts: Remove a post using the Delete Post button.
- Express Routing: Handle requests for creating, viewing, editing, updating, and deleting posts.
- EJS Templates: Render dynamic pages using server-side templates.

Tech Stack

- Node.js — JavaScript runtime
- Express.js — Server and routing
- EJS — Dynamic HTML templates
- HTML — Web page structure
- JavaScript — Application logic
- Git and GitHub — Version control and source code management

Project Structure

- "index.js" — Main application and routes
- "views/index.ejs" — Displays the list of posts
- "views/new.ejs" — Form to create a new post
- "views/show.ejs" — Displays individual post details
- "views/edit.ejs" — Form to edit a post
- "public/" — Static assets, if used

How It Works

The application uses Express routes to handle user actions. EJS templates display post information and provide forms for creating, editing, and deleting posts. The application currently manages post data using a JavaScript array rather than a database.

Note: Since posts are stored in memory, the data may reset when the server restarts.

What I Learned

- Creating routes with Express.js
- Rendering dynamic pages using EJS
- Handling form submissions
- Using route parameters to identify posts
- Implementing CRUD operations
- Updating and filtering arrays using JavaScript
- Handling errors and redirecting after actions
- Debugging routes and application logic

Future Improvements

- Store posts permanently in a database
- Add input validation and better error handling
- Improve the user interface and responsiveness
- Add user authentication and authorization
