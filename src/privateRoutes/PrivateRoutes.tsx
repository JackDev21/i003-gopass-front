import React from "react"
import { Routes, Route } from "react-router-dom"
import UserProfile from "../app/pages/UserProfilePage"
import ComprarEntrada from "../app/pages/ComprarEntradaPage"
import PagarEntrada from "../app/pages/PagarEntradaPage"
import VerificarEntradaComponent from "../app/components/VerificarEntrada/EntradaAutenticada"
import VenderEntrada from "../app/pages/VenderEntradaPage"
import Contact from "../app/pages/ContactPage"
import Ticket from "../app/pages/TicketPage"
import LandingView from "../app/pages/LandingViewPage"
import PrivateRoute from "./PrivateRoute"

import isAuthenticated from "./isAuth"

const PrivateRoutes: React.FC = () => {
  const authStatus = isAuthenticated()

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<LandingView />} isAuthenticated={authStatus} />} />
      <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} isAuthenticated={authStatus} />} />
      <Route
        path="/comprar-entrada"
        element={<PrivateRoute element={<ComprarEntrada />} isAuthenticated={authStatus} />}
      />
      <Route path="/pagar-entrada" element={<PrivateRoute element={<PagarEntrada />} isAuthenticated={authStatus} />} />
      <Route path="/contact" element={<PrivateRoute element={<Contact />} isAuthenticated={authStatus} />} />
      <Route path="/ticket" element={<PrivateRoute element={<Ticket />} isAuthenticated={authStatus} />} />
      <Route
        path="/verificar-entrada"
        element={<PrivateRoute element={<VerificarEntradaComponent />} isAuthenticated={authStatus} />}
      />
      <Route
        path="/vender-entrada"
        element={<PrivateRoute element={<VenderEntrada />} isAuthenticated={authStatus} />}
      />
    </Routes>
  )
}

export default PrivateRoutes
