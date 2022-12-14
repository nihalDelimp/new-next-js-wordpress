import { gql } from "@apollo/client";
import { client } from "../config";

const getApplicationData = async () => {
    const applicationData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/application-delivery-management") {     
          servicesSection {
      servicesContent {
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection4 {
          fieldGroupName
          heading
          descriptionWithIcon {
            description
            heading
            icon
          }
          image {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection3 {
          fieldGroupName
          heading
          descriptionWithSubHeading {
            description
            heading
            listData {
              listItems
            }
          }
          image {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection2 {
          fieldGroupName
          backgroundImage {
            sourceUrl
          }
          headingWithDescription {
            description
            heading
            listData {
              listItems
            }
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection1 {
          fieldGroupName
          heading
          backgroundImage {
            sourceUrl
          }
          descriptionSection {
            description
            fieldGroupName
          }
          listSection {
            listItems
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider {
          fieldGroupName
          sliderItems {
            sliderItemsContent {
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider_sliderItems_SliderItemsContent_HeadingOne {
                mainHeadingH1
              }
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider_sliderItems_SliderItemsContent_HeadingTwo {
                secondaryHeadingH2
              }
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider_sliderItems_SliderItemsContent_HeadingThree {
                headingLabelThree
              }
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider_sliderItems_SliderItemsContent_DescriptionContent {
                description
              }
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsTextSlider_sliderItems_SliderItemsContent_List {
                fieldGroupName
                listData {
                  listItems
                }
              }
            }
          }
          backgroundImage {
            sourceUrl
          }
        }
      }
    }

        }
      }
    `,
    });
    return applicationData;
};

export default getApplicationData;



