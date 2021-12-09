import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import CRUD from './components/CRUD'
import Layout from './components/Layout'
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='crud' element={<CRUD />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router