import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'

const FooterPage = () => {
  return (
    <MDBFooter color='blue' className='footer font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <div className='links'>
          <ul className='social-list'>
            <li className='social-list__item'>
              <a
                className='social-list__link'
                href='https://www.linkedin.com/in/nicolas-iniesta-417653b0/'
              >
                <LinkedInIcon style={{ fontSize: 40 }} />
              </a>
            </li>
            <li className='social-list__item'>
              <a
                className='social-list__link'
                href='https://www.instagram.com/piixn/'
              >
                <InstagramIcon style={{ fontSize: 40 }} />
              </a>
            </li>
            <li className='social-list__item'>
              <a
                className='social-list__link'
                href='https://github.com/inicolas69'
              >
                <GitHubIcon style={{ fontSize: 40 }} />
              </a>
            </li>
            <li className='social-list__item'>
              <a
                className='social-list__link'
                href='https://www.facebook.com/PiiXN'
              >
                <FacebookIcon style={{ fontSize: 40 }} />
              </a>
            </li>
          </ul>
        </div>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Créé par:{' '}
          <a href='https://www.nicolasiniesta.com/' target='blank'>
            {' '}
            Nicolas Iniesta{' '}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default FooterPage
