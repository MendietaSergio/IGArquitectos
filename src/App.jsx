import { Header } from "./Components/Header/Header";

import "./App.css";
import { Presentation } from "./Components/Presentation/Presentation";
import { Galery } from "./Components/Galery/Galery";
import { OurTeam } from "./Components/OurTeam/OurTeam";
import { Proyects } from "./Components/Proyects/Proyects";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Galery />
        <OurTeam />
        <Proyects />
      </main>
      <Footer/>
    </>
  );
}

export default App;
