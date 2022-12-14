import { gql } from "@apollo/client";
import { client } from "../config";

const getIndustryInsightsData = async () => {
    const applicationData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/industry-insights") { 
          industriesContents {
         industriesPageContent {
        ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionOne {
          description
          fieldGroupName
          heading
          image {
            sourceUrl
          }
        }
      }
      }    
          insights {
          tabSection {
        ... on Page_Insights_TabSection_TabItems {
          fieldGroupName
          tabContainer {
            fieldGroupName
            tabData {
                buttonLabel
              buttonLink
              by
              description
              title
              fieldGroupName
              image {
                sourceUrl
              }
            }
            tabMenuId
          }
          tabMenuItems {
            fieldGroupName
            tabId
            tabName
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

export default getIndustryInsightsData;



