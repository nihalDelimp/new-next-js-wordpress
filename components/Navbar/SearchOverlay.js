import React,{useState} from 'react';
import { useRouter } from "next/router";

const SearchOverlay = ({display,handleSearchOvelay}) => {
  const [keyword, setKeyword] = useState("");

  	//navbar search
	const router = useRouter();

	const handleChange = (e) => {
		const { value } = e.target;
		setKeyword(value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (keyword) {
			router.push(`/search/?query=${keyword}`);
		} else {
			router.push("/");
		}
	};

  return (
    <>
      <div className={display ? 'search-overlay search-overlay-active':'search-overlay'}>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-close' onClick={handleSearchOvelay}>
              <span className='search-overlay-close-line'></span>
              <span className='search-overlay-close-line'></span>
            </div>
            <div className='search-overlay-form'>
              <form onSubmit={handleSearch}>
                <input
                  type='text'
                  className='input-search'
                  placeholder='Enter your keywords...'
                  name="search"
                  onChange={handleChange}
                />
                <button type='submit'>
                  <i className='lni lni-search-alt'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
