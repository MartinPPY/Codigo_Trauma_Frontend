import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound"
import { Login } from "./public/Login"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={ <Navigate to="/login"/> } />
                <Route path="/login" element={ <Login/> } />
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}
