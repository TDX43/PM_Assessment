// hooks
import useFetch from "../hooks/useFetch"

// components
import StudentsList from "../components/StudentsList"

export default function Home() {
    const url = "https://api.hatchways.io/assessment/students"

    const { data, isPending, error } = useFetch(url)

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && <StudentsList data={data} />}
        </div>
    )
}
