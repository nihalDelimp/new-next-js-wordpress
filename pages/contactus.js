import getContactUsData from "../query/aboutUs/contactUs";
import ContactUs from './../components/AboutUs/ContactUs';

const ContactUsPage = ({ contactus }) => {
    const resData = contactus.data.pageBy.aboutSection.aboutUsContent;
    const headerData = contactus.data.pageBy.industriesContents.industriesPageContent

    // const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    // const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    console.log("ContactUsPageresData" , resData)

    return (
        <ContactUs headerData = {headerData}  />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            contactus: await getContactUsData(),
        },
    };
}

export default ContactUsPage;
