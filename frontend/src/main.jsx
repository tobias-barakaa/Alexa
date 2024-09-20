import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<QueryClientProvider client={queryClient}>

    <PayPalScriptProvider deferLoading={true}>
    <App />
    </PayPalScriptProvider>
    </QueryClientProvider>

</Provider>
)
