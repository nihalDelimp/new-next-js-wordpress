import { gql } from "@apollo/client";
import { client } from "../config";

const getHealthcareData = async () => {
  const newHealthcareData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/healthcare") {     
            industriesContents {
                industriesPageContent {
              ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionOne {
          description
          heading
          image {
            sourceUrl
          }
        }
        ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionTwo {
          description
          fieldGroupName
          heading
          listItems {
            description
            fieldGroupName
            icon
          }
        }
        ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionThree {
          description
          fieldGroupName
          heading
          cardBox {
            description
            fieldGroupName
            image {
              sourceUrl
            }
          }
        }

        ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionFour {
          fieldGroupName
          heading
          carouselImages {
            sourceUrl
          }
        }
            }
          }
        }
      }
    `,
  });
  return newHealthcareData;
};

export default getHealthcareData;



