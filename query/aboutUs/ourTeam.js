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

            aboutSection {
           aboutUsContent {
        ... on Page_Aboutsection_AboutUsContent_AboutUsWithCounter {
          description
          fieldGroupName
          counterItems {
            icon
            number
            title
          }
          heading
        }
        ... on Page_Aboutsection_AboutUsContent_DownloadBusinessProfile {
          downloadLink
          fieldGroupName
          downloadImgIcon {
            sourceUrl
          }
          heading
        }
        ... on Page_Aboutsection_AboutUsContent_Testimonials {
          description
          fieldGroupName
          sectionHeading
          carouselItems {
            author
            fieldGroupName
            itemTitle
            testimonialBy
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

export default getOurTeamData;



