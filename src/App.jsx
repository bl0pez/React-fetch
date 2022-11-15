import { Card } from './components/Card';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';

function App() {
  const {items, loading, error} = useFetch();

  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return <h1>Error</h1>
  }


  return (
    <div className="container mt-2">
      <div className="grid-responsive">
      {
        items.splice(0,10).map(item => (
          <Card key={item.id} {...item} />
        ))
      }
    </div>
    </div>
  )
}

export default App;