
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./routes/routes";
import { ChakraProvider, theme } from "@chakra-ui/react";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ChakraProvider>
  </React.StrictMode>,
)

