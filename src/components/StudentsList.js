import { useEffect, useState } from "react"

// hooks
import { useStudentContext } from "../hooks/useStudentContext";

// components
import Tags from './Tags'
import StudentGrade from "./StudentGrade";

//styles
import './StudentsList.css'


export default function StudentsList({ data }) {
    const [searchName, setSearchName] = useState("")
    const [searchTag, setSearchTag] = useState("")

    const { allTags, dispatch } = useStudentContext()

    // convert the string array to int and calculate the average 
    const calAverage = (grades) => {
        return (
            grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / grades.length
        )
    }

    // initialize allTags in state
    useEffect(() => {
        data.students.map((student) => (allTags[student.id] = []))
        dispatch({ type: 'INIT', payload: allTags })
    }, [allTags, data.students, dispatch])


    return (
        <div>
            <div className="searchByName">
                <input
                    type="text"
                    onChange={e => setSearchName(e.target.value)}
                    placeholder="Search by name"
                    required
                />
            </div>
            <div className="searchByTag">
                <input
                    type="text"
                    onChange={e => setSearchTag(e.target.value)}
                    placeholder="Search by tag"
                    required
                />
            </div>

            <div className="studentsList">
                {data && data.students.filter((student) => {
                    return (searchName === ""
                        || student.firstName.toLowerCase().includes(searchName.toLocaleLowerCase())
                        || student.lastName.toLowerCase().includes(searchName.toLocaleLowerCase())) &&
                        (searchTag === ""
                            || allTags[student.id].find((tag) => tag.match(searchTag))
                        )
                }).map((student) => (
                    <div className="student-container" key={student.id}>
                        <div className="student-list">
                            <img src={student.pic} alt={student.lastName} />
                            <div className='student-info'>
                                <ul>
                                    <li className="student-name">{student.firstName} {student.lastName}</li>
                                    <li>Email: {student.email}</li>
                                    <li>Company: {student.company}</li>
                                    <li>Skill: {student.skill}</li>
                                    <li>Average: {calAverage(student.grades)}%</li>
                                </ul>

                                <StudentGrade student={student} />

                                <Tags student={student} />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    )
}
