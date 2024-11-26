import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemsList/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { ItemsContextProvider } from "./Context/ItemsContextProvider";

function App() {





  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header/>
          <ItemList/>
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App
