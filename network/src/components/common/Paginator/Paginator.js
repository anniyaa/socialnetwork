import React from "react";
import './Paginator.scss'

const Paginator = ({ currentPage = 1, totalItemsCount, pageSize, onPageChanged, portionSize = 10 }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let startPage = Math.max(1, currentPage - Math.floor(portionSize / 2));
    let endPage = Math.min(pagesCount, startPage + portionSize - 1);
    if (endPage - startPage < portionSize - 1) {
        startPage = Math.max(1, endPage - portionSize + 1);
    }

    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
    }

    return (
        <div className="users-pagination__buttons">
            {startPage > 1 && (
                <div className="pag-but" onClick={() => onPageChanged(1)}>1...</div>
            )}
            {visiblePages.map(p => (
                <div
                    key={p}
                    className={`pag-but${currentPage === p ? ' pag-but__selected' : ''}`}
                    onClick={() => onPageChanged(p)}
                >
                    {p}
                </div>
            ))}
            {endPage < pagesCount && (
                <div className="pag-but" onClick={() => onPageChanged(pagesCount)}>...{pagesCount}</div>
            )}
        </div>
    );
};

export default Paginator;