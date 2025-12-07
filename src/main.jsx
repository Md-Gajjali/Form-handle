import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import { store } from './store/Store.jsx'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: "About", Component: About },
      { path: "Service", Component: Service },
      { path: "Contact", Component: Contact },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
