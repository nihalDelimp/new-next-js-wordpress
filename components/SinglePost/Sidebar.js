import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Sidebar = ({ widgets }) => {
  const [keyword, setKeyword] = useState('');
  const { postWidgets, categories, tags } = widgets;

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
      router.push('/');
    }
  };

  return (
    <>
      <aside className='widget-area'>
        <div className='widget widget_search'>
          <form className='search-form' onSubmit={handleSearch}>
            <input
              type='search'
              className='search-field'
              placeholder='Search...'
              name='search'
              onChange={handleChange}
            />
            <button type='submit'>
              <i className='lni lni-search-alt'></i>
            </button>
          </form>
        </div>

        {postWidgets && (
          <div className='widget widget_author'>
            {postWidgets.postAuthorImage && (
              <img src={postWidgets.postAuthorImage.sourceUrl} alt='author' />
            )}

            <h3>{postWidgets.postAuthorName}</h3>
            <span>{postWidgets.postAuthorDesignation}</span>
            <p>{postWidgets.postAuthorDescription}</p>
          </div>
        )}

        <div className='widget widget_follow_us'>
          <h3 className='widget-title'>
            <span>Follow Us</span>
          </h3>
          <ul>
            {postWidgets.postSocialWidget &&
              postWidgets.postSocialWidget.map((social, index) => (
                <li key={index}>
                  <Link href={social.socialProfileLink && social.socialProfileLink }>
                    {social.socialProfile}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
 
        <div className='widget widget_categories'>
          <h3 className='widget-title'>
            <span>Categories</span>
          </h3>
          <ul>
            {categories &&
              categories.edges.map((cat, index) => (
                <li key={index}>
                  <a>{cat.node.name}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className='widget widget_tag_cloud'>
          <h3 className='widget-title'>
            <span>Tags</span>
          </h3>
          <div className='tagcloud'>
            {tags && tags.nodes.map((tag, index) => <a key={index}>{tag.name}</a>)}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
