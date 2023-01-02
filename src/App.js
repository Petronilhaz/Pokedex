import GlobalStyle from './styles/global'
import { PokeList } from "./components/PokeList";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <PokeList />
    </>
  );
}

export default App;
