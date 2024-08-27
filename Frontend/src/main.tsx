import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import { Provider } from 'react-redux'
import { persistor, store} from './Redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "@/components/theme-provider"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>
      
    <App />
   
    <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
