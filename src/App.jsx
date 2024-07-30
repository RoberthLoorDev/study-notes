import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import AuthProvider from "./features/auth/context/AuthContext";
import ProtectedRoutes from "./features/auth/context/ProtectedRoutes";
import LoginPage from "./features/auth/pages/LoginPage";
import SignUpPage from "./features/auth/pages/SignUpPage";
import CoursesPage from "./features/courses/pages/CoursesPage";

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} Route />
                    <Route path="/sign-up" element={<SignUpPage />} Route />
                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoutes>
                                <CoursesPage />
                            </ProtectedRoutes>
                        }
                        Route
                    />
                </Routes>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            background: "#D3D3D3",
                        },
                    }}
                />
            </AuthProvider>
        </div>
    );
}

export default App;
