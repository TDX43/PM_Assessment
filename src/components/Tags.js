import { useState } from "react"

// hooks
import { useStudentContext } from '../hooks/useStudentContext'

//styles
import './Tags.css'


export default function Tags({ student }) {
    const [currentTag, setCurrentTag] = useState('')
    const { allTags, dispatch } = useStudentContext()

    // update allTags in state
    const handleSubmit = (e) => {
        e.preventDefault()

        allTags[student.id].push(currentTag)
        dispatch({ type: 'ADDTAG', payload: allTags })

        setCurrentTag("")
    }

    return (
        <form className="addTag" onSubmit={handleSubmit}>
            <div>
                {allTags[student.id] && allTags[student.id].map((tag) => (
                    <span key={Math.random()}>{tag}</span>
                ))}
            </div>
            <input
                type="text"
                onChange={e => { setCurrentTag(e.target.value) }}
                placeholder="Add a tag"
                value={currentTag}
                required
            />
        </form>
    )
}
