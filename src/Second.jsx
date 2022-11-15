import React from 'react'
import styled from 'styled-components'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { TbCurrencyRupee } from 'react-icons/tb'

const Second = () => {
    return (
        <Wrap>
            <Container>
                <Lin>
                    <p>UI/UX <SlArrowRight /> <Link to={'/sec'}>Refer & Earn</Link><SlArrowRight /></p>
                </Lin>

                <Fm>
                    <Mid>
                        <FirstMid>
                            <Amount>
                                <Tag>
                                    <p>
                                        Referral Earning
                                    </p>
                                    <h2>
                                        <TbCurrencyRupee /> 2500
                                    </h2>
                                </Tag>
                                <Tag>
                                    <p>
                                        Total Refferal
                                    </p>
                                    <h2>
                                        7
                                    </h2>
                                </Tag>
                                <Tag>
                                    <p>
                                        Wallet Amount
                                    </p>
                                    <h2>
                                        <TbCurrencyRupee /> 500
                                    </h2>
                                </Tag>
                            </Amount>
                        </FirstMid>
                        <button>Withdraw Balance</button>
                    </Mid>
                    <Sm>
                        <h2>Your Referral Code</h2>
                        <p>E D C H 5 4</p>
                    </Sm>
                </Fm>
                <Des>
                    <h4>How it Works ?</h4>
                    <Detail>
                        <F1>


                            <Det>
                                <Img>
                                    <img src="./images/user.png" alt="" />
                                </Img>
                                <Par>
                                    <h6>Invite your friend</h6>
                                    <p>share the link tutedude.com with <br /> your friend</p>
                                </Par>
                            </Det>
                            <Det>
                                <Img>
                                    <img src="./images/tag.png" alt="" />
                                </Img>
                                <Par>
                                    <h6>Friend purchase any course</h6>
                                    <p>Using your REFERRAL CODE in the <br /> paymant page</p>
                                </Par>
                            </Det>

                            <Det>
                                <Img>
                                    <img src="./images/wallet.png" alt="" />
                                </Img>
                                <Par>
                                    <h6>Transfer money tp your wallet</h6>
                                    <p>Total purchase made width the friend <br /> makes, in your wallet</p>
                                </Par>
                            </Det>
                        </F1>
                        <F2>
                            <Det>
                                <Img>
                                    <img src="./images/per.png" alt="" />
                                </Img>
                                <Par>
                                    <h6>Your friend will get <TbCurrencyRupee /> 200 off</h6>
                                    <p>Total purchase made width the friend <br /> makes, in your wallet</p>
                                </Par>
                            </Det>
                            <Det>
                                <Img>
                                    <img src="./images/rupees.png" alt="" />
                                </Img>
                                <Par>
                                    <h6>You get <TbCurrencyRupee /> 200 as referal money</h6>
                                    <p>Total purchase made width the friend <br /> makes, in your wallet</p>
                                </Par>
                            </Det>
                        </F2>
                    </Detail>
                </Des>
                <Term>
                    <p>Friend who Enrolled</p>
                    <p>Term & Condition</p>
                </Term>
            </Container>
        </Wrap>
    )
}

export default Second

const Wrap = styled.div`
`
const F2 = styled.div`
`
const F1 = styled.div`
`
const Term = styled.div`
margin:40px 0;
p{
    font-weight: 500;
font-size: 14px;
padding:10px 0;
color: #800080;
}
`
const Detail = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
gap:30px;
@media (max-width:914px){
    flex-direction:column;
    gap:0px;
}
`
const Par = styled.div`
h6{
    display:flex;
    align-items:center;
}
`
const Img = styled.div`

    background: rgba(217, 217, 217, 0.25);
    border-radius:50%;
    width:65px;
    padding:15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Det = styled.div`
display:flex;
align-items:center;
gap:30px;
margin:15px 0;
h6{
    font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #000000;
}
p{
    font-weight: 400;
font-size: 13px;
line-height: 24px;

color: #4D4D4D;
}

`
const Des = styled.div`
width: 764px;
margin:40px 0;
h4{
    font-weight: 600;
font-size: 24px;
color: #800080;
}
@media (max-width:914px){
    width:80vw;
    margin:40px auto;
}
`
const Fm = styled.div`
display:flex;
justify-content:space-between;
`
const Sm = styled.div`
width: 358px;
h2{
    font-weight: 400;
    font-size: 22px;
    line-height: 36px;
    color: #800080;
    margin-bottom:12px;
}
p{
    border: 1px solid black;
    border-radius: 10px;
        font-weight: 500;
font-size: 16px;
line-height: 30px;
color: #800080;
text-align:center;
padding:8px 16px;
}
@media (max-width:1095px){
    display:none;
}
`
const FirstMid = styled.div`
`
const Container = styled.div`
width:80vw;
margin:0 auto;

`
const Mid = styled.div`
width: 486px;
background: #FFFFFF;
box-shadow: 0px 3px 100px rgba(0, 0, 0, 0.1);
border-radius: 20px;
display:flex;
gap:30px;
flex-direction:column;
align-items:center;
justify-content:center;
padding:30px;
button{
font-weight: 500;
font-size: 16px;
color:white;
border:none;
background: #800080;
border-radius: 20px;
padding:8px 16px;
width: 180px;
margin:0 auto;
}
`
const Amount = styled.div`
display:flex;
align-item:center;
gap:60px;
justify-content:center;
flex-wrap:wrap;
@media (max-width:621px){
    gap:20px;
}
`
const Tag = styled.div`
p{
    font-size: 14px;
color: #800080;
font-weight:400;
}
h2{
    display:flex;
    justify-content:cenetr;
    align-items:center;
font-weight: 300;
font-size: 28px;
line-height: 48px;
color: #000000;
svg{
  font-size:28px;
}
}
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