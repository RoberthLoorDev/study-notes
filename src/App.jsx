import { Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import SignUpPage from "./features/auth/pages/SignUpPage";
import { Toaster } from "sonner";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} Route />
                <Route path="/sign-up" element={<SignUpPage />} Route />
            </Routes>
            <Toaster
                toastOptions={{
                    style: {
                        background: "#D3D3D3",
                    },
                }}
            />
        </div>
    );
}

export default App;
