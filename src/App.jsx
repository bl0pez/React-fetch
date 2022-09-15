import { Card } from "./components/Card";
import { Spinner } from "./components/Spinner";
import { useFetch } from "./hooks/useFetch";

function App() {

  const url = import.meta.env.VITE_URL_API
  const options = {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_URL_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_URL_HOST
    }
  }

  const {items, loading, error} = useFetch(url, options);

  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return <h1>Error</h1>
  }


  return (
    <div className="d-flex flex-wrap container justify-content-between py-4">
      {
        items.map(item => (
          <Card key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default App;