import React, { useCallback, useEffect, useState } from "react";
import UseAuth from "../../auth/context/UseAuth";
import { getCoursesByUser } from "../api/api";

export default function UseGetCourses() {
    const { user } = UseAuth();
    const [courses, setCourses] = useState([]);

    const fetchCourses = useCallback(async () => {
        const dataCourses = await getCoursesByUser(user);
        setCourses(dataCourses);
    }, [user]);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return { courses, fetchCourses };
}
