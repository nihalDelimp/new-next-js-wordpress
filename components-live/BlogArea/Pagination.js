import Link from 'next/link';
import { useRouter } from 'next/router';

const MAX_NUM_PAGES = 9;

const Pagination = ({
  pagesCount,
  currentPage,
  basePath,
  addCanonical = true,
}) => {
  const path = `${basePath}/page/`;
  const router = useRouter();

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    // If the number of pages exceeds the max
    if (pagesCount > MAX_NUM_PAGES) {
      // Set number of pages to the max
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      hasNextDots = !isTail;
      // If the current page is at the head, the start variable remains 0
      if (!isHead) {
        hasPrevDots = true;
        // If the current page is at the tail, the start variable is set to
        // the last chunk. Otherwise the start variable will place the current
        // page at the middle
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

  return (
    <>
      <div className='pagination-area'>
        <div className='nav-links'>
          <Link href={`${path}${currentPage - 1}`}>
            <a
              className={
                currentPage === 1
                  ? 'isDisabled previous page-numbers'
                  : 'previous page-numbers'
              }
              title='Next Page'
            >
              <i className='lni lni-angle-double-left'></i>
            </a>
          </Link>
          <ul className='pagination-flex'>
            {pages.map((page, i) => (
              <li key={i}>
                <Link href={`${path}${page}`}>
                  <a
                    className={
                      page === parseInt(router.query.page)
                        ? 'current page-numbers'
                        : 'page-numbers'
                    }
                    aria-label={`Goto Page ${page}`}
                  >
                    <span>{page}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`${path}${currentPage + 1}`}>
            <a className='next page-numbers' title='Next Page'>
              <i className='lni lni-angle-double-right'></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;
