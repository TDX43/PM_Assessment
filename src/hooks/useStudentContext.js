import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export const useStudentContext = () => {
    const context = useContext(StudentContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}
