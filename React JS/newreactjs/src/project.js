import { styled } from "styled-components"
import './project.css'
import img from'./image-interactive.jpg'
import img1 from "./image-deep-earth.jpg"
import img2 from "./image-night-arcade.jpg"
import img3 from "./image-soccer-team.jpg"
import img4 from "./image-grid.jpg"
import img5 from "./image-from-above.jpg"
import img6 from "./image-pocket-borealis.jpg"
import img7 from "./image-curiosity.jpg"
import img8 from "./image-fisheye.jpg"


const Body=styled.div`
width:100%;
height:100vh;`
const Header=styled.header`
height:26%;
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:auto;
margin-right:auto;`

const ProfileContainer=styled.div`
width:100%;
height:80vh;
display:flex;
// justify-content:center;
flex-direction:column;
`
const Span=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:15px;
font-weight:300;
cursor:pointer;
`
const TitleSpan=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:40px;
font-weight:400;
cursor:pointer;
`
const LetterDiv=styled.div`
width:78%;
height:50%;
display:flex;
align-items:center;
margin-right:auto;
margin-left:auto;
padding:16px;
`
const SubDiv=styled.div`
width:530px;
height:170px;
padding:30px;
border:2px solid white;
// text-align: center;

`

const WordSpan=styled.span`
font-size:58px;
font-family: 'Josefin Sans', sans-serif;
color:hsl(0, 0%, 100%);`

const MiddleContainer=styled.div`
display:flex;
height:105vh;
width:100%;
background-color:hsl(0, 0%, 100%);
justify-content:center;
align-items:center;
`
const ImageDiv=styled.div`
width:40%;
justify-content:center;
align-items:center;`
const Wordings=styled.div`
width:35%;
height:320px;
padding:24px;
background-color:white;
display:flex;
flex-direction:column;
align-item:center;
margin-top:325px;

`
const WordingsSpan=styled.span`
font-size:42px;
margin:32px 32px 0px 32px;
font-family: 'Josefin Sans', sans-serif;
color:black;
padding:24px 24px 0px 24px;
`
const Paragraph=styled.p`
font-family: 'Alata', sans-serif;
margin:24px 24px 24px 56px;
font-size:14px;
color:grey;`
const ThirdContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
`
const Head=styled.header`
width:87%;
height:150px;
display:flex;
// margin:24px;
justify-content:space-between;
`
const CreationSpan=styled.div`
font-size:16px;
font-family: 'Josefin Sans', sans-serif;
font-weight:600;
margin-right:10px
`
const CreationDiv=styled.div`
border:2px solid black;
display:flex;
width:120px;
height:35px;
justify-content:center;
align-items:center;
margin-right:9%;`
const EmptyDiv=styled.div`
width:100px;`

const FourthDiv=styled.div`
width:100%;
display:flex;

justify-content:center;
`
const FourthSubDiv=styled.div`
width:79%;
margin-right:3%;
display:grid;
grid-template-columns: auto auto auto auto;
row-gap:30px;`

const ImageDiv1=styled.div`
background-image: url(${img1});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv2=styled.div`
background-image: url(${img2});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv3=styled.div`
background-image: url(${img3});
width:256px;
height:450px;
display:flex;
align-items:end;


`
const ImageDiv4=styled.div`
background-image: url(${img4});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv5=styled.div`
background-image: url(${img5});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv6=styled.div`
background-image: url(${img6});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv7=styled.div`
background-image: url(${img7});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv8=styled.div`
background-image: url(${img8});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const GridName=styled.span`
color:hsl(0, 0%, 100%,100%);
font-size:24px;
font-family: 'Josefin Sans', sans-serif;
padding:28px;
font-weight:400;
line-height: 1.2;
`
const Footer=styled.footer`
width:100%;
height:150px;
// margin-top:200px;
background-color:black;
display:flex;
justify-content:center;
align-items:center;
`
const SubFooter=styled.footer`
width:80%;
// display:flex;
// justify-content:space-between;
`
const LeftFooter=styled.footer`
height:50px;
display:flex;
// flex-direction:column;
justify-content:space-between;
`
const RightFooter=styled.footer`
height:50px;
display:flex;
// flex-direction:column;
justify-content:space-between;
`
const Empty=styled.div`
height:180px;`
const FooterTitle=styled.span`
color:hsl(0, 0%, 100%,100%);
padding:16px;
font-size:20px;
font-weight:400;
font-family: 'Alata', sans-serif;`

const FooterWord=styled.span`
color:hsl(0, 0%, 100%,100%);
font-size:14px;
font-family: 'Alata', sans-serif;
padding:16px;
cursor:pointer;
`
const IconFooter=styled.span`
padding:16px 8px 8px 8px;
`
const CopyRights=styled.span`
color:hsl(0, 0%, 41%);
font-size:12px;
font-family: 'Alata', sans-serif;
padding:8px;
`
const Icons=styled.div`
margin-top:0.5%;
`

function Project(){
    return(
<Body>
<ProfileContainer id="profileContainer">
<Header>
    <leftDiv>
    <TitleSpan>loopstudios</TitleSpan>
    </leftDiv>
    <rightDiv>
    <Span>About</Span>   
    <Span>Careers</Span>
    <Span>Events</Span>
    <Span>Products</Span>
    <Span>Support</Span>
    <Span></Span> 
    </rightDiv>
</Header>
<LetterDiv>
<SubDiv>
<WordSpan>IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</WordSpan>
</SubDiv>

</LetterDiv>
</ProfileContainer>
<MiddleContainer>
  <ImageDiv>
    <img src={img} alt="image"/>
  </ImageDiv>
  <Wordings>
   <WordingsSpan>THE LEADER IN INTERACTIVE VR</WordingsSpan>
   <Paragraph>Founded in 2011, loopstudios has been producing world-class <br/> virtual reality projects for some of the best companies around the <br/>globe.Our award-winning creations have transformed <br/> businesses through digital experience that bind to their brand</Paragraph>
  </Wordings>
</MiddleContainer>
<ThirdContainer>
<Head>
 <div>
<WordingsSpan>OUR CREATIONS</WordingsSpan>
</div>
<EmptyDiv>

</EmptyDiv>
<CreationDiv>
    <CreationSpan>SEE ALL</CreationSpan>
</CreationDiv>
</Head>
</ThirdContainer>
<FourthDiv>
<FourthSubDiv>
<ImageDiv1><GridName>DEEP <br/> EARTH</GridName></ImageDiv1>
<ImageDiv2><GridName>NIGHT <br/> ARCADE</GridName></ImageDiv2>
<ImageDiv3><GridName>SOCCER <br/> TEAM VR</GridName></ImageDiv3>
<ImageDiv4><GridName>THE<br/> GRID</GridName></ImageDiv4>
<ImageDiv5><GridName>FROM UP <br/> ABOVE VR</GridName></ImageDiv5>
<ImageDiv6><GridName>POCKET <br/> BOREALIS</GridName></ImageDiv6>
<ImageDiv7><GridName>THE<br/> CURIOSITY</GridName></ImageDiv7>
<ImageDiv8><GridName>MAKE IT<br/> FISHEYE</GridName></ImageDiv8>
</FourthSubDiv>
</FourthDiv>
<Empty>

</Empty>
<Footer>
<SubFooter>
<LeftFooter>
<div>
  <FooterTitle>loopstudios</FooterTitle>
  </div>
<Icons>
 <IconFooter><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fill-rule="nonzero"/></svg></IconFooter>
 <IconFooter><svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FFF" fill-rule="nonzero"/></svg></IconFooter>
 <IconFooter><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill="#FFF" fill-rule="nonzero"/></svg></IconFooter>
 <IconFooter><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#FFF" fill-rule="nonzero"/></svg></IconFooter>
</Icons>
</LeftFooter>
<RightFooter>
<div>
 <FooterWord>About</FooterWord>
  <FooterWord>Career</FooterWord>
  <FooterWord>Events</FooterWord>
  <FooterWord>Products</FooterWord>
  <FooterWord>Support</FooterWord>
 </div>
 <div>
 <CopyRights>© 2021 Loopstudios. All rights reserved.</CopyRights>
 </div>
</RightFooter>
</SubFooter>
</Footer>
</Body>

    )
}
export default Project