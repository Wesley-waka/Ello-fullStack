import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client';
import client from './services/api-client.ts';
import './index.css';
import store from './redux/store/store.ts';
import { Provider } from 'react-redux';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#5acccc',
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ApolloProvider client={client}>
    <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
    </Provider>
  </ApolloProvider>
  </>,
)
