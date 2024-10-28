import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { showErrorMessage } from './helpers/Alerts'

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 400) {
      console.log("getting unauthorized");
      localStorage.removeItem("token");
      location.href = "/login";
    }
    let message = error.message;
    if (error.response?.data?.errorDetails?.message) {
      message = error.response?.data?.errorDetails?.message;
    }    
    showErrorMessage(message);
    throw error;
  }
);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <Suspense fallback={<div></div>}>
      <Provider store={store}>
        <>
          <RouterProvider router={router} />
          <Toaster gutter={1} position="bottom-left" />
        </>
      </Provider>
    </Suspense>
  </QueryClientProvider>
)
