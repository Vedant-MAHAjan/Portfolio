import React from 'react'
// import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './BlogsStyle'
import BlogCards from '../Cards/BlogCards'
import { blogs } from '../../data/constants'
import { Bio } from '../../data/constants'
import styled from 'styled-components';

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center; 
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Blogging = ({ }) => {
    // const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Blogs</Title>
                <Desc>
                    Exploring Tech, Sharing Insights, and Navigating Digital Landscape
                </Desc>                
                <CardContainer>
                    {blogs
                        .map((blog) => (
                            <BlogCards blog={blog}/>
                        ))}
                    {/* {blogs                        
                        .map((blog) => (
                            <BlogCards blog={blog} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}                     */}
                </CardContainer> 
                <ButtonContainer>
                    <GitHubButton href={Bio.hashnode} target="_blank">View More </GitHubButton>
                </ButtonContainer>
            </Wrapper>            
        </Container>
    )
}

export default Blogging