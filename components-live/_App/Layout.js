import Head from 'next/head';
import { useState, useEffect } from 'react';
// import generalSettingsData from '../../query/generalSettings/generalSettingsData';

const Layout = ({ children }) => {
  const [generalData, setGeneralData] = useState({});
  // useEffect(() => {
  //   const genData = async () => {
  //     const data = await generalSettingsData();
  //     setGeneralData(data.data.generalSettings);
  //   };
  //   genData();
  // }, []);

  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* <title>{generalData.description}</title> */}
      </Head>

      {children}
    </>
  );
};

export default Layout;
