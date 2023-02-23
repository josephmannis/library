import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/home/home";
import theme from "./theme";

const queryClient = new QueryClient();
const manager = createLocalStorageManager("theme");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} colorModeManager={manager}>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
