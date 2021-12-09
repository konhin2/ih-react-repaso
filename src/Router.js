import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import CRUD from './components/CRUD'
import Layout from './components/Layout'
import Countries from './components/Countries'
import Country from './components/Countries/Country'
import data from './countries.json'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='crud' element={<CRUD />} />
                        <Route path='countries' element={<Countries allCountries={data} />}>
                            <Route path={':id'} element={<Country allCountries={data} />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router