import ReactDOM from "react-dom/client";
import { FormDataProvider } from "./context/FormContext.tsx";
import App from "./App.tsx";
import "./index.css";
import './i18n.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FormDataProvider>
    <App />
  </FormDataProvider>
);
