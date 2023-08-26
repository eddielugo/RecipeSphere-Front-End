
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>RecipeSphere-Front-End
</h1>
<h3>◦ EXPLORE. DISCOVER. COOK.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/eddielugo/RecipeSphere-Front-End?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/eddielugo/RecipeSphere-Front-End?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/eddielugo/RecipeSphere-Front-End?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/eddielugo/RecipeSphere-Front-End?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The RecipeSphere-Front-End project is a React-based web application for sharing and discovering recipes. The core functionalities of the project include the ability to add, edit, and view detailed recipe information, search for recipes based on user input, and save favorite recipes. The purpose of the project is to provide a user-friendly platform for recipe enthusiasts to share their favorite recipes and explore new ones. Its value proposition lies in its robust functionality, modern design, and intuitive user experience, which enhance the overall recipe-sharing and discovery process.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows the React architecture, separating the UI into reusable components like AddEditRecipePage, ContactSupportPage, and RecipeCreationPage. The codebase also incorporates the react-router-dom library for routing between different pages. The overall architecture promotes code reuse and modularity.    |
| **📖 Documentation**   | The codebase lacks documentation. It could benefit from adding inline comments explaining complex logic, function parameters, and return values. Detailed documentation would make it easier for new developers to understand and contribute to the project.    |
| **🔗 Dependencies**    | The codebase relies on external libraries like react, react-dom, and react-router-dom, which are essential for building React applications. These libraries provide functionality for creating interactive user interfaces and routing between different pages.    |
| **🧩 Modularity**      | The codebase is modular, with each component contained in its own file. This modular structure allows for easy maintainability and reusability of code. However, there is scope for better separation of concerns, especially in components where styling and functionality are combined.    |
| **✔️ Testing**          | There are a few test files present in the codebase, such as App.test.js and setupTests.js. However, these tests cover only a small portion of the code. Additional tests should be written to ensure robust test coverage, including testing components, business logic, and user interactions.    |
| **⚡️ Performance**      | The performance of the codebase cannot be determined without running benchmarks or profiling the application. However, based on the code analysis, the codebase does not seem to have any evident performance bottlenecks. Depending on the data volume and user load, performance improvements such as lazy loading images and optimizing network requests may be needed.    |
| **🔐 Security**        | The codebase does not show any specific security measures. Typically, security measures include data sanitization, authentication, authorization, and secure communication protocols. Further analysis and implementation are required to ensure the security of user data and protect against common web security vulnerabilities.    |
| **🔀 Version Control** | The codebase uses Git for version control, as seen from the provided GitHub repository link. Using Git allows for effective collaboration, tracking code changes over time, and accommodating multiple developers in the codebase. Branches, commits, and pull requests can help manage the evolution of the codebase.    |
| **🔌 Integrations**    | Based on the available information, the codebase does not seem to have specific integrations with external systems or services. However, given that it is a front-end codebase, integrating with a back-end system or APIs might be necessary to fetch and save data. This needs further investigation.    |
| **📶 Scalability**     | The codebase can potentially handle growth by following React's modular component-based architecture. By separating different functionalities into self-contained components, it becomes easier to add new features, scale the application, and handle increased user traffic. However, scaling the application's performance and infrastructure would require proper planning, optimization, and good server architecture.    |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [index.html](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/public\index.html)                      | This code snippet is an HTML template for a React app. It sets up the basic structure of the webpage and includes meta tags for SEO, a title, and a div container for the React app to be rendered.                                                                                                                                                                                                                                                                                                                                           |
| [AddEditRecipePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\AddEditRecipePage.css)   | The provided code snippet defines the styling for a header and an add-edit recipe page. It uses flexbox for layout, sets background colors, applies padding and border-radius, and styles various form elements. The code provides a clean and modern design for a recipe page.                                                                                                                                                                                                                                                               |
| [AddEditRecipePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\AddEditRecipePage.js)     | This code snippet is a functional component in React that allows users to add or edit recipe information. It uses React hooks to manage the state of the recipe object, including the name, image, ingredients, and instructions. User input is captured through various form elements and saved in the recipe state using event handlers. The handleSubmit function is responsible for handling the form submission logic, and it currently logs the recipe object to the console.                                                           |
| [App.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.css)                               | This code snippet defines the core functionalities of a React app. It centers the text and styles the app header with a logo that spins infinitely. The header has a dark background color and is vertically and horizontally aligned. The text size is responsive, and there is a link with a specified color. The animation is controlled by keyframes, rotating the logo from 0 degrees to 360 degrees. The code also includes a media query for reduced motion preferences.                                                               |
| [App.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.js)                                 | The code snippet is a React component that sets up routing for a web application. It imports various page components and maps them to specific routes using the react-router-dom library. The component also includes a NavigationBar component and sets up the overall structure of the application.                                                                                                                                                                                                                                         |
| [App.test.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.test.js)                       | This code snippet is a test for rendering and checking if the "learn react" link is present in the rendered App component. It uses the render and screen functions from'@testing-library/react' module.                                                                                                                                                                                                                                                                                                                                       |
| [ContactSupportPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ContactSupportPage.css) | This code snippet defines the styles for a contact support page. It sets the font family, maximum width, margin, padding, and box shadow for the container element. It also defines styles for headings, paragraphs, a contact form, input fields, buttons, and a footer. Overall, it creates a visually appealing and user-friendly design for the contact support page.                                                                                                                                                                     |
| [ContactSupportpage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ContactSupportpage.js)   | This code snippet defines a functional component in React for a Contact Support page. It renders a form with fields for Name, Email, and Message, along with a Submit button. The page also displays a heading, a paragraph, and a footer with a response time message.                                                                                                                                                                                                                                                                       |
| [FavoriteRecipePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\FavoriteRecipePage.css) | The code snippet provides CSS styles for a web page with a favorite recipe functionality. It includes styling for the overall page layout, user profile, favorited recipes list, and individual recipe cards. The styles focus on font-family, spacing, background colors, image styling, card design, button styling, and transitions. The code snippet aims to create an aesthetically pleasing and user-friendly experience for a favorite recipe page.                                                                                    |
| [FavoriteRecipePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\FavoriteRecipePage.js)   | The code snippet creates a React component called FavoriteRecipePage. It renders a user profile and a list of favorited recipes. The favorited recipes are passed as props to the FavoritedRecipesList component, which maps over the recipes and renders a RecipeCard component for each. Each RecipeCard contains the recipe's thumbnail, name, description, and buttons to view the recipe or remove it from favorites. The sampleData variable provides dummy data for demonstration purposes.                                            |
| [HomePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\HomePage.css)                     | The provided code snippet defines the styles for a home page with a header, login button, search bar, and sections for popular and new recipes. It uses flexbox, sets colors, padding, and border-radius, and includes hover effects and box-shadow.                                                                                                                                                                                                                                                                                          |
| [HomePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\HomePage.js)                       | The code snippet represents a React application for a home page of a recipe website. It consists of a header with a login button, a search bar, sections displaying popular recipes and new recipes. Each component is responsible for rendering its respective UI elements.                                                                                                                                                                                                                                                                  |
| [index.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\index.css)                           | This code snippet defines the styling for the body element, setting the margin to 0 and the font family to a list of preferred fonts. It also applies antialiasing and grayscale smoothing for better rendering. Additionally, it specifies a font family for code elements, prioritizing source-code-pro and similar monospace fonts.                                                                                                                                                                                                        |
| [index.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\index.js)                             | This code snippet is a React application that renders the "App" component into the root element of the HTML. It also includes a function "reportWebVitals()" for measuring performance metrics in the app. The code is wrapped in "React.StrictMode" for enhanced error detection during development.                                                                                                                                                                                                                                         |
| [NavigationBar.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\NavigationBar.css)           | This code snippet defines the styles for a navigation container and buttons. The container uses flexbox to align items and has a background color and a box shadow. The buttons have padding, font size, a border, and a background color that changes on hover. The code also includes a focus style for the buttons and uses transitions for smooth hover effects.                                                                                                                                                                          |
| [NavigationBar.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\NavigationBar.js)             | This code snippet is for a NavigationBar component in a React application. It uses the useNavigate hook from React Router to handle navigation between different routes. Each button in the navigation menu is associated with a specific route, and when clicked, the navigate function is called to redirect the user to the corresponding page.                                                                                                                                                                                            |
| [ProfilePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ProfilePage.css)               | This code snippet defines the styling for a user profile page. It includes styling for the profile picture, user info, shared recipes, and saved recipes sections. The styling includes the use of flexbox, background colors, borders, and box shadows. Overall, the code aims to create a visually pleasing and organized user profile page.                                                                                                                                                                                                |
| [ProfilePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ProfilePage.js)                 | This code snippet defines a ProfilePage component in a React application. It includes three sub-components: UserInformation, SharedRecipes, and SavedRecipes. UserInformation displays user data and allows image uploads. SharedRecipes and SavedRecipes display lists of recipes.                                                                                                                                                                                                                                                           |
| [RecipeCreationPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeCreationPage.css) | This code snippet defines the styling for a recipe creation page. It sets the font-family, padding, background color, and layout for the page. It also sets the styling for headings, input fields, textarea, and buttons. The button has a hover effect.                                                                                                                                                                                                                                                                                     |
| [RecipeCreationPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeCreationPage.js)   | This code snippet defines a React functional component called RecipeCreationPage. It uses the useState hook to manage the state of recipeName, ingredients, instructions, and image. It provides input fields for the user to enter recipe details, including an image upload field. The handleImageUpload function sets the selected image file as the image state. The handleSubmit function handles the form submission logic. Finally, the component renders a form for creating a recipe with relevant input fields and a submit button. |
| [RecipeDetailPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeDetailPage.css)     | The code snippet defines the styling for a recipe detail page. It includes a flexbox layout, sets fonts, padding, background color and sizes for various elements. Button styling with hover effect is also defined.                                                                                                                                                                                                                                                                                                                          |
| [RecipeDetailPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeDetailPage.js)       | This code snippet defines a React component for the recipe detail page. It includes functionality to generate a PDF version of the recipe, as well as to send the recipe via email. Users can view the recipe details, including the name, image, ingredients, instructions, and comments.                                                                                                                                                                                                                                                    |
| [reportWebVitals.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\reportWebVitals.js)         | This code exports a function called "reportWebVitals" that takes a callback function as an argument. It imports performance metrics from the "web-vitals" library and invokes the callbacks with these metrics if they exist. The purpose is to report on vital web performance metrics like CLS, FID, FCP, LCP, and TTFB.                                                                                                                                                                                                                    |
| [SearchResultsPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SearchResultsPage.css)   | This code snippet defines the styling for a search results page. It includes the layout for a search bar, search results list, and recipe cards. The code utilizes flexbox and includes styling for button hover effects. The layout is responsive and adjusts based on the screen size.                                                                                                                                                                                                                                                      |
| [SearchResultsPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SearchResultsPage.js)     | The code snippet is a React component that represents a search results page. It consists of a search bar, a list of search results, and a recipe card component. The search bar allows users to enter a search query and triggers a search when the search button is clicked. The search results list displays a list of recipes based on the search query, using data fetched from an external source. The recipe card component represents each individual recipe and displays the recipe's name, description, and thumbnail image.         |
| [setupTests.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\setupTests.js)                   | The provided code snippet imports the jest-dom library which enhances Jest tests by providing custom matchers for asserting on DOM nodes. It allows for assertions like checking if an element has specific text content.                                                                                                                                                                                                                                                                                                                     |
| [SignUpLoginPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SignUpLoginPage.css)       | This code snippet defines the styling for a signup and login page.It uses flexbox for layout, sets form sizes and appearance, and applies hover effects to buttons.                                                                                                                                                                                                                                                                                                                                                                           |
| [SignUpLoginPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SignUpLoginPage.js)         | The provided code snippet is a React component called SignUpLoginPage. It renders a sign up form and a login form within a container div. Each form component includes input fields for username/email and password, and a button to submit the form.                                                                                                                                                                                                                                                                                         |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Install nvm for Windows or MacOS`
> - `ℹ️ intsall Node.js`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the RecipeSphere-Front-End repository:
```sh
git clone https://github.com/eddielugo/RecipeSphere-Front-End
```

2. Change to the project directory:
```sh
cd RecipeSphere-Front-End
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using RecipeSphere-Front-End

```sh
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️ ...`
> - [ ] `ℹ️ ...`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  This project was bootstrapped with [Create React App]`

---
