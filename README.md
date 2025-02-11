# reactrouter.com - tutorial
1. npm create vite@latest name-of-your-project -- --template react
2. npm install react-router-dom
3. npm install localforage match-sorter sort-by

# tailwindcss.com - framework guide - vite 
# https://tailwindcss.com/docs/guides/vite
1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
4. @tailwind base; @tailwind components; @tailwind utilities;

# daisyUI - https://daisyui.com/docs/install/
1. npm i -D daisyui@latest
2. plugins: [require('daisyui')]

# eslint
1. node: true,

# App.jsx
1. clean App.jsx

# Work on site body start
# Work on site body start

# main.jsx - reactrouter.com - tutorial
1. <RouterProvider router={router} />
2. import {
  RouterProvider,
  } from "react-router-dom";
8. max-w-screen-xl mx-auto  


# Routes.jsx  - reactrouter.com - tutorial
1. import {
  createBrowserRouter,
  } from "react-router-dom";
2. export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: []
    },
]);    
4. <Main></Main>
5. children: [
            {
                path: '/', 
                element: <Home></Home>
            }
        ]
6. <Home></Home>        


# Main.jsx
9. <NavBar/>
3. <Outlet></Outlet>
7. <Footer/>

# Home.jsx
11. <Banner/>

# Footer.jsx

# NavBar.jsx
10. const navOptions = <>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </>

# 64.3 - react awesome component, dwn image use, banner over navbar

# Banner.jsx

# 64.4 - swiper slider

# 64.5 - react prop types, dynamic shared component

# 64.6 - data fetch - have to clear *** 33.3/45.6

# 64.7 - background image, custom css, parallax
# 64.8 - review, rating, data fetch
# 64.9 - summary
# 65.1 - fevicon, helmet
# 65.2 - use dynamic image as cover photo, parallax
# 65.3 - custom hook, data load - fetch
# 65.4 - have to watch again
# 65.5 - tabs - category wise
# 65.6 - positioning, when click on the order now item it redirects dynamically to respective category tabs, params
# 65.7 - create server, backend setup, create database, dotenv - environment veriable, database connection
<!-- https://cdn.saksfifthavenue.com/is/image/saks/0400014759900_RED?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0 -->

# 65.8 - database with connection ready, pagination
# 65.9 - module summary, pagination

# 66.1 - login page ready, navbar/footer shared in all page or not
# 66.2 - captcha
# 66.3 - firebase setup, firebase environment variables, auth provider, auth context
# 66.4 - create login functionality, signup page ready, navbar/footer shared in all page or not
# 66.5 - react hook form - create user using signup,
# - formik.org/react-hook-form.com - alternative of form
# 66.6 - password validation - regex, helmet, signup complete
# 66.7 - user ? logout : login, logout, sweetalert, login error handle, captcha error handle
# 66.8 - private route
# 66.9 - add user photo, user profile update, form reset, if login show user name/image, sweetalert

# 67.1 - state management - context API/Redux/Local Storage/Database, icons, how to find any component, add to cart
# - tanstack.com
# 67.2 - naming convention, add to cart, can't add if not logged in
# - mongodb.com - usage examples
# 67.3 - after logged in dynamically redirect to desired location, axios, item add to cart, sweetalert
# 67.4 - added number display in cart, tanstack query intro
# 67.5 - recap previous module and show cart data in respect to user, refetch - update cart data in UI without reload
# 67.6 - dashboard layout, route ready
# 67.7 - display my cart/read data, reduce - calculte total price or total reading hours of cart data, display cart data in tablular format in cart section in admin panel
# 67.8 - numbering - index, delete cart item, delete api create and auto remove from UI without reload
# 67.9 - idea share
# - doc-house-resources

# 68.1 - save user info to databae by sign up, make dashboard private
# 68.2 - google login, 
# 68.3 - user saved in database, if already exist not saved(like; from google), who will be the first admin, start make admin 
# 68.4 - admin & user panel differentiate, all user data show in admin panel
# 68.5 - user data table design in admin panel, user delete by admin api and button functionality ready, make admin
# 68.6 - admin created, jwt 
# - jwt.io/libraries
# require('crypto').randomBytes(64).toString('hex')
# f9c4a6a45e98096da80c1d8fa14cdbe9d52ec4c0f9eeacf83e563847381c0c12f697b3536c2041816cd769236eb399f5415518db554d973227b784fe0761a072
# 68.7 - jwt api, important concep, jwt set in frontend, important concep
# 68.8 - jwt plus - handle 401/403, control access using jwt
# 68.9 - access control auto logout
# 68.10 - frontend access control

# 69.1 - describe & why use - jwt/tanstackQuery/axios/refetch/interceptors, recap adminRoute
# 69.2 - add any item by admin, page security control - important concep, if not admin then access control - AdminRoute, formik, reack hook form, form ready to add items/books
# - formik.org 
# 69.3 - form ready, data collect by forms
# 69.4 - options/select some concept, host image in imageBB
# 69.5 - frontend prepare for data save to database, admin can save data to database using form - frontend & backend validation check
# 69.6 - manage books/items page ready - admin can delete or update any data
# 69.7 - books/menu item delete functionality and backend api ready - delete functionality done, tanstack query
# 69.8 - route & page ready for update book/item, backend api ready, loader - fetch data to load, params, form & backend api ready to update data
# 69.9 - remaining works of upadate data

# 70.1 - payment page ready, pay button disabled if no items in cart
# 70.2 - stripe install, checkout form ready
# 70.3 - stripe account open, PK & SK set in environment veriable, test payment originated
# read - https://docs.stripe.com/sdks/stripejs-react
# https://www.npmjs.com/package/@stripe/react-stripe-js
# https://github.com/stripe/react-stripe-js
# 70.4 - error handle while make payment, backend api ready for payment
# 70.5 - more works of payment
# 70.6 - remaining works of payment
# 70.7 - save payment data in database, delete item from cart after payment - cart empty - refetch
# 70.8 - remaining works, payment history page 7 api done
# 70.9 - payment details show in tebular data in payment history page and auto redirect to payment history page after payment

# 71.1 - admin & regular user dashboard home ready, nested ternary
# 71.2 - error handle - race condition - important - wacth frequently
# 71.3 - api ready for user stats/analytics display in admin dashboard, important concep
# 71.4 - remaining - user statistics display in admin dashboard - not doing completely
# 71.5 - data display in chart/diagram, aggrigate pipelin - very important concep - advance topic - have watch again - not doing completely
# 71.6 - order stats - important concep - not doing completely
# 71.7 - display chart data - rechart - not doing completely
# 71.8 - deploy vercel & firebase
# 71.9 - to build a project - should  check
# - jerins-parlour-website
# - sudio3t.com

<!-- https://i.postimg.cc/JhZTpvm9/a.png -->



<!-- btslv2-main-wrapper ht-adj-fc -->
<!-- sl-media-container-wrapper -->
<!--cameron highlands - https://www.bing.com/th?id=OBTQ.BTE865B274EB00814C7E0A64D582440EB9709C1FFC441AFF79EADB662715301EF0&rs=2&c=1 -->

The phrase "connecting the travel dots" is grammatically correct but may sound a bit unusual. If you are referring to connecting different travel experiences, destinations, or plans, you might consider alternative phrasing:

Better Alternatives:
✅ "Connecting the Dots of Travel" – More natural and commonly used.
✅ "Connecting Travel Dots" – Shorter and still makes sense.
✅ "Connecting Travel Experiences" – More descriptive and clear.
✅ "Linking Travel Destinations" – If talking about places.

If you’re using it as a brand name, tagline, or slogan, the original phrase might work depending on the context. Let me know how you’re planning to use it! 😊
