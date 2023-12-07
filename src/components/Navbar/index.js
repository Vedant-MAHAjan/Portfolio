import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, GmailButton } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  // Replace 'your-email@gmail.com' with your actual Gmail address
  // const handleEmailButtonClick = () => {
  //   window.location.href = 'mailto:mahajanvedant226@gmail.com';
  // };

  return (
    <Nav>
      <NavbarContainer>
        {/* <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo> */}
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          {/* <NavLink href='#experience'>Experience</NavLink> */}
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton style={{ marginRight: '50px' }} href={Bio.github} target="_blank">GitHub </GitHubButton>
          <GitHubButton href={Bio.linkedin} style={{ marginRight: '50px' }} target="_blank">LinkedIn </GitHubButton>          
          {/* <GmailButton onClick={handleEmailButtonClick}>Email</GmailButton> */}
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;' }}>
            <Span>mahajanvedant226@gmail.com</Span>
          </a>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
              <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, margin_right: '20px', color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">GitHub</GitHubButton>
              <GitHubButton href={Bio.linkedin} style={{ padding: '10px 16px', background: `${theme.primary}`, margin_right: '20px', color: 'white', width: 'max-content' }} target="_blank">LinkedIn </GitHubButton>
              {/* <GmailButton onClick={handleEmailButtonClick}>Email</GmailButton> */}
              <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;' }}>
                <Span>mahajanvedant226@gmail.com</Span>
              </a>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar