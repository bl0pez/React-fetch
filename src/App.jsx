import { Card } from './components/Card';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';
import { useViewItems } from './hooks/useViewItems';

function App() {
  const { data, loading, error } = useFetch();
  const { currentPageData, handlePageChange, handlePageSizeChange, page, totalPages } = useViewItems(data);


  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return <h1>Error</h1>
  }


  return (
    <div className="container my-3">
      <div className="grid-responsive">
        {
          currentPageData.map(item => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>



      <div className='d-flex gap-2 justify-content-center my-4 flex-wrap'>
        <div>
          <select class="form-select" value={page} onChange={(e) => handlePageChange(e.target.value)}>
            {Array.from(Array(totalPages), (_, i) => (
              <option key={i + 1} value={i + 1}>
                Page {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-outline-primary' disabled={page === 1} onClick={() => handlePageChange(1)}>Primera página</button>
        <div className='d-flex gap-2'>
        <button className='btn btn-outline-primary' disabled={page === 1} onClick={() => handlePageChange(page - 1)}><i className="fas fa-arrow-left"></i></button>
        <button className='btn btn-outline-primary' disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}> <i className="fas fa-arrow-right"></i></button>
        </div>
        <button className='btn btn-outline-primary' disabled={page === totalPages} onClick={() => handlePageChange(totalPages)}>Última página</button>


      </div>

    </div>
  )
}

export default App;