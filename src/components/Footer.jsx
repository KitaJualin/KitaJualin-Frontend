import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from '../assets/logoo.png'

const Footer = () => {
  return (
    <footer>
      <MDBFooter  className='text-center text-lg-start'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <img className='mb-4' src={logo} alt='logo' />
              <p>
              KitaJualin is an online marketplace that helps you sell and find preloved or used items that are still in good condition.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Category</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Fashion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Automotive
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Daily Usage
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Lifestyle
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Contact</h6>
              <p>
                kitajualimn@email.com
              </p>
              <p>
                 + 01 234 567 88
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Address</h6>
              <p>
              Silicon Valley, CA, USA
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
    </footer>
  );
};
export default Footer;
