import Link from 'next/link';

const CallToAction = ({ callToActionData }) => {
  const { title, btnText, btnLink } = callToActionData;
  return ( 
    <>
      <div className='cta-area pb-100'>
        <div className='container'>
          <div className='cta-inner'>
            <h2>{title}</h2>

            <Link href={btnLink}>
              <a className='default-btn'>
                <span>{btnText}</span>
              </a>
            </Link>
            
            {/* Shape Images */}
            <div className='shape9'>
              <img src='/img/shape/shape9.png' alt='shape' />
            </div>
            <div className='shape10'>
              <img src='/img/shape/shape10.png' alt='shape' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
