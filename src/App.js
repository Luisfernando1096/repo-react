import { DataContextProvider } from "./contexts/DataContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <DataContextProvider>
      <AppRouter />
    </DataContextProvider>
  );
}

export { App };
