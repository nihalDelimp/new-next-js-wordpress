import { gql } from "@apollo/client";
import { client } from "../config";

const getConsultationServicesData = async () => {
    const consultationServicesData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/consultation-services") {     
            servicesSection {
                servicesContent {
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection1 {
          fieldGroupName
          bgImageName
          heading
          descriptionSection {
            description
            fieldGroupName
          }
          listSection {
            fieldGroupName
            listItems
          }
          backgroundImage {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection2 {
            fieldGroupName
            bgImageName
          backgroundImage {
            sourceUrl
          }
          headingWithDescription {
            description
            fieldGroupName
            heading
            listData {
              fieldGroupName
              listItems
            }
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection3 {
          fieldGroupName
          bgImageName
          descriptionWithSubHeading {
            description
            fieldGroupName
            heading
            listData {
              fieldGroupName
              listItems
            }
          }
          heading
          image {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection4 {
          fieldGroupName
          heading
          bgImageName
          image {
            sourceUrl
          }
          descriptionWithIcon {
            description
            fieldGroupName
            heading
            icon
          }
        }
    
            }
          }
        }
      }
    `,
    });
    return consultationServicesData;
};

export default getConsultationServicesData;



