import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavBar } from "./NavBar";

export function RootLayout() {
   return (
      <div>
         <Header />
         <NavBar />
         <Outlet />
         <Footer />
      </div>
   )
}