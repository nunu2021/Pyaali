import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Blogs from './pages/blogs';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	{/* <Navbar /> */}
	<Routes>
		<Route exact path='/'  element={<Home />} />
		<Route path='/contact' exact element={<Contact/>} />
		<Route path='/blogs' exact element={<Blogs/>} />
	</Routes>
	</Router>
);
}

export default App;
