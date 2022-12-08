
import React, { useEffect } from 'react'
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
    <main className={state.data}>
      {loading ? 'Cargando...'
        :
        <>
          <h1>Home</h1>
          <div className='card-grid'>
            {data?.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id} />)}
          </div>
        </>
      }
    </main>
  )
}

export default Home;