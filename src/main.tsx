import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import "./styles/global.css"

const root = document.getElementById("root") as HTMLElement

createRoot(root).render(<App />)
