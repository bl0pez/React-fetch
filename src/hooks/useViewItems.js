import { useMemo, useState } from "react";

export const useViewItems = (data) =>{ 

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const totalPages = useMemo(() => {
        return Math.ceil(data.length / pageSize);
    }, [data]);

    const currentPageData = useMemo(() => {
        const firstPageIndex = (page - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [data, page, pageSize]);

    const handlePageChange = (page) => {
        setPage(page);
    }

    const handlePageSizeChange = (pageSize) => {
        setPageSize(pageSize);
        setPage(1);
    }

    
    
    return {
        //Properties
        currentPageData,
        page,
        totalPages,

        //Methods
        handlePageChange,
        handlePageSizeChange
    }

}
