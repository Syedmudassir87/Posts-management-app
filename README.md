# Express + EJS Chat Project

A Node.js project using Express and EJS. The app has been run locally with `node index.js` and the chats page at `http://localhost:8080/chats`.

## Requirements

- Node.js and npm
- MongoDB Community Server running locally, or a MongoDB connection URI you are authorized to use

## Setup

1. Open a terminal in this project folder.
2. Install the dependencies listed in `package.json`:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root (next to `index.js`) with settings like:

   ```env
   PORT=8080
   MONGODB_URI=mongodb://127.0.0.1:27017/chats_app
   SESSION_SECRET=replace_with_a_long_random_secret
   ```

   The `.env` file is intentionally excluded from Git. Do not commit passwords, tokens, or secret keys.

4. If the project does not already load environment variables, install dotenv:

   ```bash
   npm install dotenv
   ```

   Then add this at the very top of `index.js`:

   ```js
   require('dotenv').config();
   ```

5. Make sure your app actually reads `process.env.PORT` and `process.env.MONGODB_URI`. These names must match the code. If your existing code uses different variable names, keep them consistent.

6. Start the app:

   ```bash
   node index.js
   ```

7. Open `http://localhost:8080/chats` in your browser.

## Project notes

- EJS templates are usually stored in a `views/` directory and use the `.ejs` extension.
- `MONGODB_URI` above is an example local MongoDB URI. If your project uses MongoDB Atlas, put your own Atlas URI in `.env` instead; never publish it.
- The exact database name and required packages depend on the existing project code and `package.json`.

## Push to GitHub

Before committing, check that `.env` is ignored:

```bash
git status
```

If `.env` was already tracked in Git, `.gitignore` alone will not untrack it. Run:

```bash
git rm --cached .env
```

Then commit and push the project. Never upload real credentials.
