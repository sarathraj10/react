import Header from "./components/Header/Header";
import Table from "./components/Table/Table_wrap";
import {TableProvider} from "./store/table-context"

function App() {
  return (
    <TableProvider>
      <Header />
      <main>
        <Table />
      </main>
    </TableProvider>
  );
}

export default App;
