import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.ts';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import Loading from './components/lodaind/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading />} >
    <RouterProvider router={router} />
  </Suspense>

)
