
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, loading, setLoading, state } = useGlobalStates()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <main className={state.theme}>
      {loading ? 'Cargando...'
        :
        <>
          <h1>Home</h1>
          <div className='card-grid'>
            {data?.map(item => <Link to={'/dentist/' + item.id}> <Card key={item.id} name={item.name} username={item.username} id={item.id} /> </Link>)}
          </div>
        </>
      }
    </main>
  )
}

export default Home;