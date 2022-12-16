import { gql } from "@apollo/client";
import { client } from "../config";

const getOurTeamData = async () => {
  const applicationData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/our-team") {

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

      ourTeamProfile {
      candidateProfile {
        about
        candidateName
        department
        profileImage {
          sourceUrl
        }
      }
    } 
        }
      }
    `,
  });
  return applicationData;
};

export default getOurTeamData;