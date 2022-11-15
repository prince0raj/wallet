import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { FaRupeeSign } from 'react-icons/fa'
import styled from 'styled-components'
const First = () => {
    return (
        <Wrap>
            <Container>
                <Lin>
                    <p>UI/UX <SlArrowRight /> <Link to={'/'}>Refer & Earn</Link><SlArrowRight /><Link to={'/sec'}>Friends Referred</Link> </p>
                </Lin>
                <Second>
                    <Box1>
                        <p>
                            Your Referral Code
                        </p>
                        <h5>
                            E C D H 5 4
                        </h5>
                    </Box1>
                    <Box2>
                        <p>Your Wallet</p>
                        <h5><FaRupeeSign />500</h5>
                    </Box2>
                </Second>
                <Boxes>

                    <h4>
                        Friends who enrolled <span> (3)</span>
                    </h4>
                    <Div>
                        <Card>
                            <C1>
                                <h5>Dishraj Saxena</h5>
                                <p>14 sep, 2022</p>
                            </C1>
                            <C2>
                                <h5>Courses Enrolled (6)</h5>
                                <Cmain>
                                    <p>UI/UX</p>
                                    <p>PhotoShop</p>
                                    <p>Illustrator</p>
                                    <p>Python</p>
                                    <p>Mearn</p>
                                    <p>Java</p>
                                </Cmain>
                            </C2>
                            <C3>
                                <p>Referral Amount</p><h2><FaRupeeSign />185</h2>
                            </C3>
                        </Card>
                        <Card>
                            <C1>
                                <h5>Dishraj Saxena</h5>
                                <p>14 sep, 2022</p>
                            </C1>
                            <C2>
                                <h5>Courses Enrolled (6)</h5>
                                <Cmain>
                                    <p>UI/UX</p>
                                    <p>PhotoShop</p>
                                    <p>Illustrator</p>
                                    <p>Python</p>
                                    <p>Mearn</p>
                                    <p>Java</p>
                                </Cmain>
                            </C2>
                            <C3>
                                <p>Referral Amount</p><h2><FaRupeeSign />185</h2>
                            </C3>
                        </Card>
                        <Card>
                            <C1>
                                <h5>Dishraj Saxena</h5>
                                <p>14 sep, 2022</p>
                            </C1>
                            <C2>
                                <h5>Courses Enrolled (6)</h5>
                                <Cmain>
                                    <p>UI/UX</p>
                                    <p>PhotoShop</p>
                                    <p>Illustrator</p>
                                    <p>Python</p>
                                    <p>Mearn</p>
                                    <p>Java</p>
                                </Cmain>
                            </C2>
                            <C3>
                                <p>Referral Amount</p><h2><FaRupeeSign />185</h2>
                            </C3>
                        </Card>
                    </Div>
                    <Term>
                        <p>Term & Condition</p>
                    </Term>
                </Boxes>
            </Container>
        </Wrap>
    )
}

export default First;
const Wrap = styled.div`
`
const Term = styled.div`
margin:40px 0;
p{
    font-weight: 500;
font-size: 16px;
color: #800080;
}
`
const Div = styled.div`
display:flex;
flex-wrap:wrap;
gap:3rem;
justify-content:center;
margin-bottom:20px;
`

const Card = styled.div`
width: 358px;
background: linear-gradient(270deg, #800080 0%, #FF864C 100%);
border-radius: 20px;
padding:20px 15px;
display:flex;
flex-direction:column;
gap:0.3rem;
`
const Cmain = styled.div`
margin:4px 0;
display:flex;
flex-wrap:wrap;
gap:5px;
p{
    font-weight: 400;
font-size: 14px;
color: #FFFFFF;
border:1px solid #ffffff8f;
padding:5px;
border-radius:8px;
}
`
const C2 = styled.div`
h5{
    font-weight: 500;
font-size: 14px;
color:white;
margin-bottom:6px;
}
`
const C3 = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
p{
    color:white;
    font-weight: 300;
font-size: 16px;
}
h2{
color:white;
font-weight: 600;
font-size: 24px;
display:flex;
align-items: center;
}
`
const C1 = styled.div`
display:flex;
justify-content:space-between;
align-item:center;
h5{
    font-weight: 500;
    font-size: 16px;
    color:white;
}
p{
    color:white;
    font-weight: 400;
font-size: 14px;
}
`
const Container = styled.div`
width:80vw;
margin:0 auto;
`
const Boxes = styled.div`
margin-top:60px;
h4{
    font-weight: 600;
    font-size: 20px;
    color: #800080;
    margin:20px 0;
    span{
        color:#626262;
        font-weight: 400;
        font-size:16px;
}
}
`
const Box1 = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
gap:13px;

p{
    font-weight: 400;
font-size: 16px;
color: #800080;
}
h5{
 font-weight: 500;
font-size: 16px;
border:1px solid #0000002b;
border-radius:5px;
padding:5px;
text-align:center;
}
`
const Box2 = styled.div`
gap:3px;
display:flex;
flex-direction:column;
justify-content: center;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(128, 0, 128, 0.15);
border-radius: 20px;
padding:16px;
p{
    font-weight: 400;
font-size: 16px;
color: #800080;
}
h5{
    font-weight: 500;
   font-size: 16px;
   text-align:center;
   display:flex;
   align-items:center;
   justify-content:center;
}
`
const Second = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
const Lin = styled.div`
padding:36px 0;
p{
    display:flex;
    gap:0.2rem;
    align-items:center;
    font-weight: 400;
font-size: 14px;
a:hover{
    text-decoration: underline;

}
}
`
