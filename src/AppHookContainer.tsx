import App from "./App"
import { AppRouter } from "./AppRouter"
import { AuthContextProvider } from "./context"

export const AppHookContainer = () => {
    return (
        <AuthContextProvider>
            <App>
                <AppRouter />
            </App>
        </AuthContextProvider>
    )
}
