
import Card from '../Components/Card'
import { useGlobalState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data } = useGlobalState()

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id} />)}
      </div>
    </main>
  )
}

export default Home;