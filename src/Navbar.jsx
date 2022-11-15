import React from 'react'
import styled from 'styled-components'
import {FaUserCircle} from 'react-icons/fa'
import {FiChevronDown} from 'react-icons/fi'
const Navbar = () => {
  return (
    <Wrap>
        <Content>
            <Logo>
               <img src="./images/logo.png" alt="logo" />
            </Logo>
            <Text>
              <First>
                <p>My Assigment</p>
                <p>Chat With Mentor</p>
              </First>
              <Second>
                 <FaUserCircle className='dis'/><p>profileName</p><FiChevronDown/>
              </Second>
            </Text>
        </Content>
    </Wrap>
  )
}

export default Navbar;
const Wrap=styled.div`
`
const Content=styled.div`
width:90vw;
display:flex;
justify-content: space-between;
    margin: 0 auto;
    align-items:center;
`
const Text=styled.div`
display:flex;
align-items:center;
gap:30px;
`
const Second=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:6px;
color: #800080;
svg{
    color: #800080;
    path{
        color: #800080;
    }
}
p{
  font-weight: 500;
font-size: 16px;
}
@media (max-width:698px){
padding:10px 13px;
background: #800080;
border-radius: 10px;

p{
  color:white;
}
svg{
  color: #fff;
  path{
      color: white;
  }
}
}
`
const First=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:30px;
p{
    color: rgba(128, 0, 128, 0.35);
}
@media (max-width:698px){
  display:none;
}
`
const Logo=styled.div`
padding:4px 0;
img{
    width: 150px;
    height: 57px;
}
`