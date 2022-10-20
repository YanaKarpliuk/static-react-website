import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function SharedLayout(props) {
  return (
    <div className={props.darkMode ? "container dark" : "container"}>
      <Header toggleDarkMode={props.toggleDarkMode} darkMode={props.darkMode}/>
      <Outlet />
      <Footer />
    </div>
  );
}
