import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router  } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Header />
			<App/>
			<Footer/>
		</React.StrictMode>
	</Router>,
  document.getElementById('root')
);

reportWebVitals();
