import { gql } from "@apollo/client";
import { client } from "../config";

const getEnterPriceData = async () => {
    const enterPriceData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/enterprise") {     
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
    return enterPriceData;
};

export default getEnterPriceData;



