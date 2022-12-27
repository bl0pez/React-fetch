import { Card } from './Card';
import { PageButton } from './PageButton';

const pageSize = 10;

export const Paginacion = ({ pageCount, currentPage, pageRange, onPageChange, data }) => {

  // console.log({ currentPage, pageRange, pageSize});

  // const startPage = Math.floor(pageRange / pageSize);
  // const endPage = startPage + pageRange - 1;
  // const pages = Array.from(Array(pageCount).keys()).slice(startPage, endPage + 1);

  // console.log({ startPage, endPage, pages });

  // // Calculate the data to display on the current page
  // const startIndex = currentPage * pageSize;
  // const endIndex = startIndex + pageSize;

  return (
    <div>



      <div className="grid-responsive">
        {data.slice(startIndex, endIndex).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <div className='paginacion'>
        <button
          onClick={() => onPageChange(currentPage - 1)} >
          Anterior
        </button>

       
          {pages.map((page) => (
            <button key={page} onClick={() => onPageChange(page)}>{page}</button>
          ))}
        

        <button onClick={() => onPageChange(currentPage + 1)}>Siguiente</button>
      </div>

    </div>
  )
}
