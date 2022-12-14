import React from 'react';

const PageTitleArea = () => {
  return (
    <>
      <div className='page-title-area'>
        <div className='container'>
          <div className='page-title-content'>
            <span className='sub-title'>Application Security</span>
            <h1>Let’s Talk Something Amazing Together!</h1>

            <div className='contact-form'>
              <form>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <label>Name *</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Eg: Sarah Taylor'
                      />
                    </div>
                  </div>
                  
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <label>Email *</label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='sarah@gmail.com'
                      />
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className='form-group'>
                      <label>Services *</label>
                      <select className='form-select'>
                        <option defaultValue=''>Application Security</option>
                        <option value='1'>Cloud Security</option>
                        <option value='2'>Infrastructure Security</option>
                        <option value='3'>Threat Hunter</option>
                        <option value='4'>Disaster Planning</option>
                        <option value='5'>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <button type='submit' className='default-btn'>
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/img/shape/shape1.png' alt='shape' />
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

export default PageTitleArea;
