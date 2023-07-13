import "./App.css";
import MainRoutes from "./routes/MainRoutes.routes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AuthProvider>
          <BrowserRouter>
            <MainRoutes />
            <Toaster />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
