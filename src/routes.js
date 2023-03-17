import Padrao from "componentes/padrao";
import Rodape from "componentes/rodape";
import ScrollToTop from "componentes/scroll";
import NaoEncontrado from "paginas/naoEncontrado";
import Post from "paginas/post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobre-mim";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />

      <Routes>

        <Route path="/" element={<Padrao />}>
          {/*Rotas aninhadas dentro da padrão  */}
          <Route index element={<Inicio />} />
          <Route path="/sobrenos" element={<SobreMim />} />
        </Route>

        <Route path="/posts/:id/*" element={<Post/>} />
        {/* Rota de erro 404 */}
        <Route path="*" element={<NaoEncontrado/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
