import App from "./App"
import { AppRouter } from "./AppRouter"
import { AuthContextProvider } from "./context"
import { initAxios } from "./services/axios.service"

export const AppHookContainer = () => {
    initAxios()
    return (
        <AuthContextProvider>
            <App>
                <AppRouter />
            </App>
        </AuthContextProvider>
    )
}
