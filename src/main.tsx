import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </>
);
