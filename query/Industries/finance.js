import { gql } from "@apollo/client";
import { client } from "../config";

const getFinanceData = async () => {
  const financeData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/finance") {     
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
  return financeData;
};

export default getFinanceData;



