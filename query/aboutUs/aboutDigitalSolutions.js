import { gql } from "@apollo/client";
import { client } from "../config";

const getAbouDigitalSolutionsData = async () => {
    const applicationData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/about-alfanar-digital-solutions") {

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

      bannerSection {
        banner {
      ... on Page_Bannersection_Banner_Video {
                 video
              } 

            }
      }

      industriesContents {
       industriesPageContent {
      ... on Page_Industriescontents_IndustriesPageContent_IndustrySectionFour {
          fieldGroupName
          heading
          carouselImages {
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

export default getAbouDigitalSolutionsData;



