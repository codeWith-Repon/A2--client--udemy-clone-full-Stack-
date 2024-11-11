import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [setstudentCoursesList, setSetstudentCoursesList] = useState([]);
  return (
    <StudentContext.Provider
      value={{ setstudentCoursesList, setSetstudentCoursesList }}
    >
      {children}
    </StudentContext.Provider>
  );
}
