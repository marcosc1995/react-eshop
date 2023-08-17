import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const productos = [
    {
      title: "Drone",
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_995397-MLU47677853028_092021-O.webp",
    },
    {
      title: "Notebook",
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_693497-MLA48980724534_012022-O.webp",
    },
    {
      title: "Notebook",
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_693497-MLA48980724534_012022-O.webp",
    },
    {
      title: "Notebook",
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_693497-MLA48980724534_012022-O.webp",
    },
    {
      title: "Notebook",
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_693497-MLA48980724534_012022-O.webp",
    },
  ];
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer productos={productos}></ItemListContainer>
    </div>
  );
}

export default App;
