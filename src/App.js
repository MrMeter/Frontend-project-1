import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductsP from './components/ProductsP';
import ContactP from './components/ContactP';
import ProductP from './components/ProductP';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare, faPenToSquare, faTrashCan, faTag, faSquarePollVertical } 
from '@fortawesome/free-solid-svg-icons';
library.add(faArrowUpRightFromSquare, faPenToSquare, faTrashCan, faTag, faSquarePollVertical);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<ProductsP/>}/>
                    <Route path="/contact" element={<ContactP/>}/>
                    <Route path="/product/:id" element={<ProductP/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
