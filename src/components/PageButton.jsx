export const PageButton = ({ page, onClick, currentPage }) => {

  console.log({page, onClick, currentPage});

  const btnActive = page === currentPage ? 'active' : '';

  return (
    <button 
    className={`page-item ${btnActive}`}
    onClick={() => onClick(page)}>
      <span className="page-link">{page + 1}</span>
    </button>
  )
}
