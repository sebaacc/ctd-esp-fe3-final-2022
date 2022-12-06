import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import { useGlobalState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state, data, loading, setLoading} = useGlobalState()
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    setTimeout(( ) => {
      setLoading(false)
  }, 2000)
  }, [state.api])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favoritos))
}, [favoritos])

const addFav = (imagen) => {
  setFavoritos([...favoritos, imagen])
}

  return (
    <main className="" >
      {console.log(data[1].name)}
      <h1>Home</h1>
      <div className='card-grid'>
        {data.name.map((id) => <Card key={id} name={data.name} username={data.username} id={data.id}/>)}
        <button onClick={() => addFav()}>⭐</button>
      </div>
    </main>
  )
}

export default Home