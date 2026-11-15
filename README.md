# Assignment 2 – Express Portfolio Website

**Course:** INFR3120 – Web and Scripting Programming  
**Student:** Tayyab Farooq

## About the Project

For this assignment, I built a personal portfolio website using Node.js, Express, and EJS. It is based on the portfolio I made for Assignment 1, but I changed the structure so the pages are displayed through Express routes instead of opening separate HTML files. The website has four pages: Home, About Me, Projects, and Contact Me.

## Pages

- **Home:** Introduces me and gives visitors links to the other pages.
- **About Me:** Talks about my interest in networking, information technology, and cybersecurity. I also included space for my picture and introduction video.
- **Projects:** Shows some of the work I have done, including my portfolio, a network configuration lab, programming work, a database exercise, and cybersecurity research.
- **Contact Me:** Includes a form with name, email, optional phone number, and message fields. The form checks the entries in the browser, but it does not send an email or save the information.

## Tools I Used

- **Node.js:** Runs the website on the server.
- **Express:** Handles the page routes.
- **EJS:** Displays the pages using templates.
- **HTML and CSS:** Organize and style the content.
- **Bootstrap:** Helps with the layout and makes the pages responsive.
- **Font Awesome:** Adds icons to the website.
- **JavaScript:** Handles the contact form's browser-side behavior.
- **VS Code:** Used to work on the project files.

## How the Website Works

The routes are in `routes/index.js`. When someone visits a page, Express uses `res.render()` to display the matching EJS file from the `views` folder.

| Address | EJS File |
| --- | --- |
| `/` | `views/index.ejs` |
| `/about` | `views/about.ejs` |
| `/projects` | `views/projects.ejs` |
| `/contact` | `views/contact.ejs` |

I used shared files in `views/partials` for the header and footer so I do not have to repeat the same navigation and footer code on every page. The `public` folder contains the stylesheet, JavaScript, pictures, and video.

## Project Structure

```text
assignment-02-portfolio/
├── app.js
├── bin/
│   └── www
├── package.json
├── routes/
│   └── index.js
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── contact.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── public/
    ├── stylesheets/
    │   └── style.css
    ├── javascripts/
    │   └── contact.js
    ├── images/
    └── videos/
```

## How to Run the Website

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the Terminal in VS Code.
4. Install the required packages:

   ```bash
   npm install
   ```

5. Start the website:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in a browser.

The website needs to be started through Express. The **Go Live** button in VS Code does not run the EJS pages correctly.

## What I Learned

This assignment helped me understand the difference between a regular HTML website and a website that uses a server. I learned how Express routes connect to EJS files, how shared templates keep the code organized, and how the `public` folder is used for CSS, JavaScript, pictures, and videos. I also practiced running and checking the website using the VS Code Terminal.

## Links

- **GitHub repository:** [Add your Assignment 2 repository URL]
- **Live website on Render:** [Add your Render URL]

## References and Assistance

- [Express documentation](https://expressjs.com/)
- [EJS documentation](https://ejs.co/)
- [Bootstrap documentation](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- ChatGPT (OpenAI) was used to help prepare and explain parts of the project code and setup. I reviewed and tested the project as I worked on it.
