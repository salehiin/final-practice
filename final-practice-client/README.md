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

# 65.7 - create server, backend setup, 