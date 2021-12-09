import {useParams} from 'react-router-dom'

const Country = ({allCountries}) => {
    const { id } = useParams()
    const filtered = allCountries.filter(element => id === element.cca3)[0]
    return (
        <>
            <h1> {filtered.name.common} </h1>
        </>
    )
}

export default Country
