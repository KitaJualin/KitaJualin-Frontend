import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'KitaJualin | Online Marketplace Preloved',
  description: 'online marketplace for preloved or second hand things',
  keywords: 'preloved, seccond',
};

export default Meta;
