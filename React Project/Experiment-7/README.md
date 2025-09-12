# ProductCard Component Using Props – Experiment 7

## Introduction

This experiment implements a **reusable React component** that displays product information. It demonstrates the core React principle of **"props"** (properties) to pass dynamic data from a parent component to a child component. The goal is to create a single, flexible component (`ProductCard`) that can render different products without any changes to its internal code.

## Components Used

*   **Parent Component:** `App.jsx` - The main application component that holds the product data and renders multiple instances of `ProductCard`.
*   **Child Component:** `ProductCard.jsx` - A presentational component responsible for receiving data via props and rendering the product card UI.

## Core React Concepts

*   **Component-Based Architecture:** Breaking down the UI into independent, reusable pieces.
*   **Props (Properties):** The primary mechanism for passing read-only data from a parent to a child component.
*   **JSX:** A syntax extension for JavaScript that allows writing HTML-like code within React.

## Code Explanation

### `App.jsx` (The Parent Component)
This component defines the product data and passes it down to the `ProductCard` components.

**Breakdown:**
- `import ProductCard from './ProductCard'`: Imports the child component to be used in the parent component
- The `<div>` with `display: "flex"` creates a flexible container that arranges the product cards in a horizontal row
- Each `<ProductCard />` tag represents an instance of the component
- The `product={...}` attribute is the **prop** being passed down to each component instance, containing unique product data

### `ProductCard.jsx` (The Child Component)
This component receives data through its product prop and uses it to render the UI.
**Breakdown:**
- `function ProductCard({ product })`: Uses object destructuring to directly extract the product prop from the function parameters
- The component returns JSX that defines the card structure with inline styling
- `{product.name}`, `{product.price}`, `{product.status}`: JSX expressions that dynamically insert the prop values into the HTML structure
- The component exports itself as the default export for use in other files

# ProductCard Component Using Props – Experiment 1

## Data Flow Summary

1. **Data Origin**: Product data is defined as JavaScript objects within the App component
2. **Prop Passing**: App passes each product object to a ProductCard instance via the product prop
3. **Rendering**: Each ProductCard receives its unique data and renders it according to the component's template
4. **Output**: The browser displays a list of consistently styled product cards, each showing different information

## Limitations

- **Static Data**: All product information is hard-coded directly in the App component
- **Basic Styling**: Relies on simple inline styles rather than more scalable CSS solutions
- **No Interactivity**: The cards function as display-only components without any user interaction capabilities.

## Real-World Applications

- **E-commerce Product Listings**: Foundation for online shopping platforms and marketplaces
- **Service Catalogs**: Displaying available services with pricing and availability information
- **Dashboard Cards**: Presenting summary information and metrics in a consistent visual format

## What I Learned

- The fundamental concept and practical usage of props in React applications
- How to structure React applications using parent-child component relationships
- Techniques for creating reusable components that render dynamic content
- The practical application of object destructuring in function parameters
- How to properly embed JavaScript expressions within JSX syntax
- Component composition patterns and best practices in React development