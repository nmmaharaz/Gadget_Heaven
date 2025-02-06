# Gadget Heaven

## Introduction
Gadget Heaven is a seamless, user-centric platform offering a curated collection of the latest gadgets. With easy navigation, users can explore different categories, dive into detailed product specifications, and keep track of their favorite items. Perfect for tech lovers, Gadget Heaven is the go-to place for discovering and enjoying the newest gadgets on the market.

## Table of Contents
- [Live Demo](#live-demo)
- [Requirement Document](#requirement-document)
- [Features](#features)
- [React Fundamental Concepts Used](#react-fundamental-concepts-used)
- [Data Management](#data-management)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributors](#contributors)
- [License](#license)

## Live Demo
[Project Live Link](#) _(Replace with actual link)_

## Requirement Document
[Requirement Document Link](#) _(Replace with actual link)_

## Features
- **Explore Gadgets**: Users can browse a collection of gadgets sorted into categories, with detailed information available for each item.
- **Save Favorites**: Users can click on the heart icon to save their favorite gadgets, making it easy to find and compare them later.
- **Gadget Details**: Each gadget has its own page with full information, including images and descriptions.
- **Easy Navigation**: The app has a simple and intuitive navigation system, allowing users to move between different sections smoothly.
- **Quick Shopping**: Users can add gadgets to their cart and quickly check out, making the buying process smooth and simple.

## React Fundamental Concepts Used
- **JSX (JavaScript XML)**: Used to build HTML-like syntax within JavaScript, making it easier to define the UI structure.
- **Components**: The application is built using reusable functional components that encapsulate specific parts of the UI.
- **State Management (`useState`)**: Utilized to handle local state within components, allowing for dynamic updates based on user interactions.
- **Effect Hook (`useEffect`)**: Employed to handle side effects such as fetching data from APIs and updating the UI based on dependencies.
- **Event Handling**: React's synthetic event system is used to manage user interactions, such as clicks and form submissions.
- **React Router**: Enables navigation between different pages for a single-page application (SPA) experience, allowing users to navigate without full page reloads.
  - **`useNavigate`**: Facilitates programmatic navigation, allowing components to redirect users based on actions.
  - **`useParams`**: Extracts URL parameters for rendering dynamic content, such as detailed information about gadgets.
  - **`NavLink`**: Creates navigation links with automatic active styling, improving the navigation experience and indicating the current page.

## Data Management
Gadget Heaven uses **Local Storage** for managing user data:
- **Shopping Cart & Wishlist**: 
  - Functions `getStoredCart` and `getStoredWishList` retrieve respective data from Local Storage.
  - `addToStoredCart` and `addToStoredWishList` add items to the cart and wishlist while ensuring no duplicates.
  - If an item is already in the cart or wishlist, a toast notification alerts the user.
  - `removeCart` and `removeWishlist` allow users to remove items, updating the Local Storage accordingly.
- This approach ensures **persistent data across sessions**, retaining cart and wishlist information even after page reloads.

## Installation
To run Gadget Heaven locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/gadget-heaven.git
