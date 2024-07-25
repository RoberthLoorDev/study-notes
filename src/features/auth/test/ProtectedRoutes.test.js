import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CoursesPage from "../../courses/pages/CoursesPage";
import ProtectedRoutes from "../context/ProtectedRoutes";
import UseAuth from "../context/UseAuth";
import LoginPage from "../pages/LoginPage";

//Mock UseAuth
jest.mock("../context/UseAuth.jsx");

//tests
describe("Protected Routes", () => {
    test("Redirects to login if no authenticated user", () => {
        UseAuth.mockReturnValue({ user: null });

        //render the component with memory router for route handling
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

        expect(screen.getByText("INICIAR SESIÓN")).toBeInTheDocument();
    });

    test("Redirect user if is authenticated", () => {
        UseAuth.mockReturnValue({ user: { name: "Roberth" } });

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

        expect(screen.getByText("ALL COURSES")).toBeInTheDocument();
    });
});
