import { useState } from 'react';
import { Card } from './components/Card';
import { Paginacion } from './components/Paginacion';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch();

  
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
      {/* <div className="grid-responsive">
        {
          items.slice(firstPage, lastPage).map(item => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
      <div className='d-flex gap-2 justify-content-center my-4'>
        <button className="btn btn-primary" onClick={handlePrevPage}>Prev</button>
        <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
      </div> */}

      {/* <Paginacion
        pageCount={pageCount}
        onPageChange={(page) => setCurrentPage(page)}
        data={data}
        currentPage={currentPage}
        pageRange={pageRange}
        /> */}

    </div>
  )
}

export default App;