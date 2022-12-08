
import Card from '../Components/Card'
import { useGlobalState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {data} = useGlobalState()

  return (
    <main className="" >
      {console.log(data[1].name)}
      <h1>Home</h1>
      <div className='card-grid'>
        {data.name.map(() => <Card key={data.id} name={data.name} username={data.username} id={data.id}/>)}
      </div>
    </main>
  )
}

export default Home