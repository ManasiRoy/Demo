import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../Components/Layout';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import commonBg from "../images/bg.jpg";
import "../scss/styles.scss";

const data = graphql`
{
 allContentfulPortfolio {
    nodes {
      logo {
        fluid {
          src
        }
        title
      }
    }
  }
}
`
const Portfolio = () => {
    const profiledata = useStaticQuery(data);
    const options = {
        settings: {
            overlayColor: "rgb(25, 136, 124)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(126, 172, 139, 0.8)",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Raleway, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase",
        }
    };

    return (
        <Layout>
            <section className='common-bg'>
                <img src={commonBg} alt='portfolio' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='display-1'> Portfolio </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mainSpacing logowrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center mb-5'>
                            <h2 className='display-3'> Logo </h2>
                        </div>
                    </div>
                    <SimpleReactLightbox options={options} key="unique-value">
                        <SRLWrapper>
                            <div className="row">
                                {profiledata.allContentfulPortfolio.nodes[0].logo.map((e, index) => (
                                    <div className='col-md-4 mb-3' key={index}>
                                        <figure className='imageborder'><img src={e.fluid.src} alt={e.fluid.title} srl_gallery_image="true" alt={e.title} /></figure>
                                    </div>
                                ))}
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
            </section>


        </Layout>
    )
};

export default Portfolio;
