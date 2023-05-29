import { useState, useEffect } from 'react'
import Header from './components/header'
import Table from './components/Table'
function App() {
    const MY_API = 'https://jsonplaceholder.typicode.com/'
    const [contType, setContType] = useState('posts')
    const [constent, setContent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const request = async () => {
            try {
                setIsLoading(true)
                const respons = await fetch(`${MY_API}${contType}`)
                const items = await respons.json()
                setContent(items.slice(0, 20))
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false)
            }
        }
        request()
    }, [contType])
    return (
        <div className='app'>
            <Header setContType={setContType} />
            {!isLoading ? <Table items={constent} /> : <span className='loading'>loading...</span>}
        </div>
    )
}

export default App