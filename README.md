
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>RecipeSphere-Front-End
</h1>
<h3>◦ Unlock the flavors with RecipeSphere!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
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

The RecipeSphere-Front-End project is a React application that offers a range of functionalities related to recipe creation, editing, search, and management. It provides users with the ability to create and edit recipes, search for recipes using keywords, view detailed recipe information including ingredients and instructions, save favorite recipes, and generate a printable PDF of a recipe. The project aims to provide a user-friendly and visually appealing interface for users to explore and interact with recipes, making it easier for users to discover, create, and manage their favorite recipes.

---

## ⚙️ Features

| Feature                | Description                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a modular architecture with separate components for different features of the application.                                                |
| **📖 Documentation**   | In depth documentation coming soon.             |
| **🔗 Dependencies**    | The codebase relies on React, React Router, React Testing Library, and web-vitals for its core functionality and testing.                                                |
| **🧩 Modularity**      | The codebase is well-organized into smaller components, facilitating reusability and maintenance.                                                       |
| **✔️ Testing**          | The codebase includes unit tests with React Testing Library. Further tests could be added to improve code coverage.                                   |
| **⚡️ Performance**      | The performance of the system depends on various factors, and it's challenging to assess without further analysis or benchmarks.                             |
| **🔐 Security**        | The codebase does not have specific security measures mentioned. Basic React guidelines for handling user data security need to be followed.                      |
| **🔀 Version Control** | The codebase employs Git for version control. However, branching strategies and code review processes are not visible in the repository.                           |
| **🔌 Integrations**    | The codebase does not integrate with any external systems or services as per the provided information.                                                     |
| **📶 Scalability**     | The codebase does not explicitly show scalability considerations.                                                                         |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [index.html](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/public\index.html)                      | The provided code snippet is an HTML template for a React application. It includes metadata, icons, a manifest file, and the root element where React components will be rendered. JavaScript must be enabled for the app to run.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [AddRecipePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\AddRecipePage.css)           | This code snippet provides styling for a header section, a add/edit recipe page container, form, input fields, file input, and buttons on the page. It follows a responsive layout, uses flexbox for alignment, and adds various visual elements like padding, background color, border, and border-radius.                                                                                                                                                                                                                                                                                                                                                  |
| [AddRecipePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\AddRecipePage.js)             | The code snippet is a React component for adding a new recipe. It uses useState hook to manage the state for recipe details. The component includes handlers to update the state when text inputs change or an image is selected. It also has a handleSubmit method to handle form submissions and console.log the recipe details. The component renders an add recipe form with inputs for name, image, ingredients, and instructions, and buttons to submit or cancel the form.                                                                                                                                                                            |
| [App.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.css)                               | This code snippet provides the styling for an App component. It includes centering the text content, animating the logo element, styling the header, links, and applying responsive font size. The export statement makes these styles available for use within the component.                                                                                                                                                                                                                                                                                                                                                                               |
| [App.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.js)                                 | The provided code snippet is a React application with routing functionality. It imports necessary modules and components, and defines routes for different pages, including a home page, sign-up/login page, profile page, search results page, recipe creation page, recipe detail page, add and edit recipe pages, contact support page, and favorite recipes page. The Router component wraps the entire application to enable routing. The NavigationBar component is included at the top of all pages.                                                                                                                                                  |
| [App.test.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\App.test.js)                       | The provided code snippet imports necessary utilities for testing, such as rendering and screen functions. It then tests the App component by rendering it and searching for an element with the text "learn react". Finally, it checks that the element is indeed present in the document.                                                                                                                                                                                                                                                                                                                                                                  |
| [ContactSupportPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ContactSupportPage.css) | This code snippet provides comprehensive styling for a Contact Support page. It includes styling for the overall page structure, headings, paragraphs, contact form, input fields and textarea, submit button, and the footer section. The code implements responsive design, with flexbox used for layout, and adds subtle styling effects on hover. The design aims to provide an attractive and user-friendly interface for contacting support.                                                                                                                                                                                                           |
| [ContactSupportpage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ContactSupportpage.js)   | The code snippet is a React functional component that renders a Contact Support page. It includes a heading, a brief description, a form for users to submit queries, and a footer note. The form requires users to input their name, email, and a message/query, and they can submit the form to contact support.                                                                                                                                                                                                                                                                                                                                           |
| [EditRecipePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\EditRecipePage.css)         | This code snippet provides styling for the edit recipe page. It includes formatting for the page container, images, headings, sections, textareas, and buttons, all with appropriate spacing, colors, and layout.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [EditRecipePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\EditRecipePage.js)           | The code snippet is a React component called EditRecipePage. It fetches a recipe from a list of sample data based on the recipeId provided in the URL parameters. The component allows users to edit the recipe details such as name, ingredients, instructions, and comments. When the user saves the changes, the handleSave function is called. The edited recipe is rendered in an HTML form, and any change in the input fields will update the recipe state using useState hook.                                                                                                                                                                       |
| [FavoriteRecipePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\FavoriteRecipePage.css) | This code snippet defines the styles for a favorite recipes page. It includes styles for the user profile section, list of favorited recipes, and individual recipe cards. These styles help create a visually appealing and user-friendly interface.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [FavoriteRecipePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\FavoriteRecipePage.js)   | This code snippet contains a React component that displays a user's favorite recipes. It includes components for user profile information, a list of favorited recipes, and individual recipe cards. It also provides a function to handle editing a recipe. Sample data is used for demonstration purposes.                                                                                                                                                                                                                                                                                                                                                 |
| [HomePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\HomePage.css)                     | This code snippet defines the styles for a home page. It includes styling for the header, search bar, and sections for popular and new recipes. The styles focus on layout, spacing, typography, colors, and hover effects to provide a clean and visually appealing design.                                                                                                                                                                                                                                                                                                                                                                                 |
| [HomePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\HomePage.js)                       | The provided code snippet is a React component that represents the main landing page of an application. It includes a site header, a login button, a search bar, a section for displaying popular recipes, and a section for displaying new recipes. The code also includes components for the login button, search bar, popular recipes, and new recipes sections.                                                                                                                                                                                                                                                                                          |
| [index.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\index.css)                           | The provided code snippet sets the styling for the body element and code element. It defines font families, enables font smoothing, and specifies fallback fonts for code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [index.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\index.js)                             | This code snippet is a React application bootstrapper that renders the `<App />` component into the'root' element of the document. The use of `<React.StrictMode>` enforces strict mode behavior for potential issues and unused APIs. Additionally, it includes a function call `reportWebVitals()` to track app performance.                                                                                                                                                                                                                                                                                                                               |
| [NavigationBar.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\NavigationBar.css)           | This code snippet provides styles for a navigation bar. It uses flexbox to create a container to hold the buttons, with equal spacing and center alignment. The buttons have rounded corners, transition effects, and hover/focus effects. The active button has a different color to indicate the current page.                                                                                                                                                                                                                                                                                                                                             |
| [NavigationBar.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\NavigationBar.js)             | This code snippet is a React component that renders a navigation bar with buttons that have active state styling. It uses the React Router hooks `useNavigate` and `useLocation` to enable navigation between different routes in the application. The `isActive` function is used to check if the current path matches a given path and adds the `active` class if they match. When a button is clicked, it uses the `navigate` function to navigate to the corresponding route. The component is exported for use in other parts of the application.                                                                                                       |
| [ProfilePage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ProfilePage.css)               | This code snippet provides styling for a profile page. It includes a container for the profile picture, styling for the profile image and file input, as well as common styling for user info, shared recipes, and saved recipes containers. The code also centers the headings and adjusts the styling for shared and saved recipes lists. Overall, the code snippet focuses on layout, appearance, and organization of elements on the profile page.                                                                                                                                                                                                       |
| [ProfilePage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\ProfilePage.js)                 | The code is a React component that represents a profile page. It consists of three sub-components: UserInformation for displaying personal information and handling image uploads, SharedRecipes for displaying a list of recipes shared by the user, and SavedRecipes for displaying a list of saved or favorited recipes. Each sub-component has sample data for demonstration purposes. The ProfilePage component is exported for use in other parts of the application.                                                                                                                                                                                  |
| [RecipeCreationPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeCreationPage.css) | This code snippet provides styles for a recipe creation page. It creates a centered layout using flexbox and sets consistent font, padding, and background color. It also styles headings, text inputs/areas, and buttons with relevant properties like width, border, padding, and color. The buttons have a hover effect that darkens their background color.                                                                                                                                                                                                                                                                                              |
| [RecipeCreationPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeCreationPage.js)   | The code snippet represents a React component that allows users to create a new recipe by inputting the recipe name, ingredients, instructions, and uploading an image. The component uses useState to handle the user input and includes functions for handling image upload and form submission.                                                                                                                                                                                                                                                                                                                                                           |
| [RecipeDetailPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeDetailPage.css)     | The code snippet provides styles for a recipe detail page including layout, font, background, image, headers, sections, buttons. It uses flexbox for layout, sets background colors, borders, padding, margins, and hover effects for various elements. The intention is to create a visually appealing and user-friendly recipe detail page.                                                                                                                                                                                                                                                                                                                |
| [RecipeDetailPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\RecipeDetailPage.js)       | The code snippet is a React component that displays detailed information about a specific recipe. It extracts the recipeId from the route parameters and finds the matching recipe. If no match is found, it falls back to the first recipe from sampleData. The component renders the recipe details, including an image, name, ingredients, instructions, and comments. It also provides functionality to generate a printable PDF of the recipe and share it via email.                                                                                                                                                                                   |
| [reportWebVitals.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\reportWebVitals.js)         | The code snippet exports a function called "reportWebVitals". It takes in a callback function as a parameter, for which it checks if it is a function. It then imports functions from the "web-vitals" module and calls them with the provided callback function as an argument.                                                                                                                                                                                                                                                                                                                                                                             |
| [sampleData.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\sampleData.js)                   | The code snippet provides a sample data array representing recipes. Each object in the array represents a recipe with its details, such as id, name, image path, ingredients, cooking instructions, and user comments. This data can be replaced or fetched from a database.                                                                                                                                                                                                                                                                                                                                                                                 |
| [SearchResultsPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SearchResultsPage.css)   | The provided code snippet includes CSS styles for a search results page. It defines styles for the page layout, search bar, search input field, search button, search results container, individual recipe cards, and buttons within recipe cards.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [SearchResultsPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SearchResultsPage.js)     | The provided code snippet is a React component that implements a search results page. It includes a search bar component, a search results list component, and a recipe card component. Users can enter search queries, which will be used to filter and display a list of recipes. The search results list component maps through the filtered results and displays each recipe as a recipe card. Each recipe card includes a thumbnail, recipe name, description, and a link to view the full recipe details. The search results are initially populated with sample data but should be replaced with actual data fetching logic in a real-world scenario. |
| [setupTests.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\setupTests.js)                   | The provided code snippet imports'@testing-library/jest-dom' which adds custom matchers to Jest for asserting on DOM nodes. It extends Jest functionality to allow assertions like'expect(element).toHaveTextContent(/react/i)' for testing React components with the Testing Library. It enhances the testing capabilities and provides a detailed documentation reference for further knowledge.                                                                                                                                                                                                                                                           |
| [SignUpLoginPage.css](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SignUpLoginPage.css)       | The provided code snippet contains main styling for a signup and login page. It styles the signup and login forms, including their titles, input fields, and buttons. The forms are centered, with spacing and padding added to improve the visual appearance. The code also includes hover effects for the buttons.                                                                                                                                                                                                                                                                                                                                         |
| [SignUpLoginPage.js](https://github.com/eddielugo/RecipeSphere-Front-End/blob/main/src\SignUpLoginPage.js)         | The provided code snippet defines a sign-up and login page using React. It consists of three main components: SignUpLoginPage, SignUpForm, and LoginForm. The SignUpLoginPage component renders the sign-up and login forms, which are separate components. Each form includes input fields for username, email, and password, as well as a submit button. The code exports the SignUpLoginPage component for use in other parts of the application.                                                                                                                                                                                                         |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
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

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  `
> - [ ] `ℹ️  `
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

> - `ℹ️  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).`

---
