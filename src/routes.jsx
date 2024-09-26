import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import Layout from "./pages/Layout";


function AppRoutes(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/sobre" element={<Sobre/>}></Route>
                    <Route path="/projetos" element={<Projetos/>}></Route>
                    <Route path="/contatos" element={<Contatos/>}></Route>
                    <Route path="*" element={<Page404/>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes