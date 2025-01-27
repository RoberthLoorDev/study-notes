import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CoursesPage from "../../courses/pages/CoursesPage";
import ProtectedRoutes from "../context/ProtectedRoutes";
import UseAuth from "../context/UseAuth";
import LoginPage from "../pages/LoginPage";

vi.mock("../context/UseAuth", () => ({
    __esModule: true,
    default: vi.fn(),
}));

// Tests
describe("Protected Routes", () => {
    it("Redirects to login if no authenticated user", () => {
        // Configurar el mock para que devuelva un usuario nulo
        UseAuth.mockReturnValue({ user: null });

        // Renderizar el componente con MemoryRouter para el manejo de rutas
        render(
            <MemoryRouter initialEntries={["/courses"]}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoutes>
                                <CoursesPage />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
            </MemoryRouter>
        );

        // Verificar que se redirige al usuario a la página de inicio de sesión
        expect(screen.getByText("INICIAR SESIÓN")).toBeInTheDocument();
    });

    it("Redirect user if authenticated", () => {
        // Configurar el mock para que devuelva un usuario autenticado
        UseAuth.mockReturnValue({ user: { name: "Roberth" } });

        // Renderizar el componente con MemoryRouter para el manejo de rutas
        render(
            <MemoryRouter initialEntries={["/courses"]}>
                <Routes>
                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoutes>
                                <CoursesPage />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
            </MemoryRouter>
        );

        // Verificar que se muestra la página de cursos
        expect(screen.getByText("ALL COURSES")).toBeInTheDocument();
    });
});
