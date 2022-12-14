import Link from 'next/link';

const FourZeroFourArea = () => {
  return (
    <>
      <div className='not-found-area ptb-100'>
        <div className='container'>
          <div className='not-found-content'>
            <img src='/img/error.png' alt='error-image' />
            <h3>Page Doesn't Exist</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href='/'>
              <a className='default-btn'>
                <span>Back to Home</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourZeroFourArea;
