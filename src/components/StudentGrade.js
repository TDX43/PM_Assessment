import { useState } from "react"

// material-icons
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

export default function StudentGrade({ student }) {
    const [gradeFlag, setGradeFlag] = useState(false)

    // change gradeflag to control expandable list
    const handleClick = () => {
        setGradeFlag(!gradeFlag)
    }


    return (
        <div>
            <ul>
                {gradeFlag && student.grades.map((grade) => (
                    <li key={Math.random()}>Test {student.grades.indexOf(grade) + 1}: {grade}%</li>
                ))}
            </ul>

            <button onClick={handleClick}>
                {gradeFlag ? <MinimizeRoundedIcon /> : <AddRoundedIcon />}
            </button>
        </div>

    )
}
