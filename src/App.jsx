import Header from './Components/Header';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import AddBook from './Components/AddBook';
import About from './Components/About';
import Books from './Components/Books/Books';
import BookDetails from './Components/Books/BookDetails';

function App() {
  
  return <>
    <header>
    <Header/>
    </header>
    <main>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddBook/>} />
          <Route path='/books' element={<Books/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/books/:id' element={<BookDetails/>} />
       </Routes>
    </main>

    
   </>
  
}

export default App
