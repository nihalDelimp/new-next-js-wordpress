import { gql } from "@apollo/client";
import { client } from "../config";

const getNewHomeData = async () => {
  const newHomeBannerData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home/") {     
          bannerSection {
            banner {
              ... on Page_Bannersection_Banner_AddBanner {
                fieldGroupName,
                bannerItems{
                  bannerTitle
                  bannerDescription
                  bannerUrl
                  bannerButtonLabel
                  bannerImage{
                    sourceUrl
                  }
                }
              }
              ... on Page_Bannersection_Banner_Video {
                 video
              }
              ... on Page_Bannersection_Banner_Image{
                fieldGroupName,
                singleImage{
                  sourceUrl
                }
              }
             ... on Page_Bannersection_Banner_ReferencesSection {
              fieldGroupName,
                referencesSectionItems{
                  title
                  description
                 images{
                  sourceUrl
                 }
                }
              }
              ... on Page_Bannersection_Banner_FooterTopSection{
                fieldGroupName,
               footerSection{
                title
                description
                image{
                  sourceUrl
                }
                buttonLabel
                url
               }
              }

            }
          }
        }
      }
    `,
  });
  return newHomeBannerData;
};

export default getNewHomeData;



