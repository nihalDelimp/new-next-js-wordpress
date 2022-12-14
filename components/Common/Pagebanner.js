import Link from 'next/link';

const Pagebanner = ({ pageName }) => {
  return (
    <>
      <div className='page-title-area'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>{pageName}</h1>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
        <div className='shape1'>
          <img src='/img/shape/shape1.png' alt='shape' />
        </div>
        <div className='shape2'>
          <img src='/img/shape/shape2.png' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/img/shape/shape4.png' alt='shape' />
        </div>
        <div className='shape5'>
          <img src='/img/shape/shape5.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default Pagebanner;
