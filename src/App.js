import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		{/* <Route path='/about' element={<About/>} /> */}
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
	</Routes>
	</Router>
);
}

export default App;
