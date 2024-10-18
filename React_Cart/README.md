# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-------------------------------------------------------------------------------------------------------------------------------------------------


Task explaination:
-- First fetching data from API usinmg axios and stored in data state variable and if it shows error will display error message and till loading completes it displays loading text.
-- handleAddToCart() calls when add to cart button clicks it checks existing item id if it matches will display alert as already exists if new will store that item in a stste variable 
-- handleRemoveFromCart() calls when user clicks remove button in cart modal it filters the id of clicked item and removes the matched id from the variable.
-- in return we are displaying fetched products by mapping each item 
-- And importing another component and cart items,onRemove,onClose functions are passed as prop to second component called cart.jsx
-- In second component all propes were get from first component and displaying a modal if length is 0 displaying Empty message and if not displaying selected products with remove button and close button for which onRemove,onClose functions were send as prop