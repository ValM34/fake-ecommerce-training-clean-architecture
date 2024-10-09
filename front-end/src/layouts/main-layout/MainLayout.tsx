import MainMenu from "../main-menu/MainMenu";
import Footer from "../footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <MainMenu />
      {children}
      <Footer />
    </div>
  )
}
