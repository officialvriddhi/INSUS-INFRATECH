import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image="https://ik.imagekit.io/officialvriddhi/insus-infratech/logo3.jpeg?updatedAt=1765982258636"
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Google */}
      <link rel="canonical" href={url} />

      {/* OpenGraph (WhatsApp, Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
