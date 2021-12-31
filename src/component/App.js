import Top from './Top/Top'
import Main from './Main/Main'
import Title from './Top/Title'
import Navbar from './Top/Navbar'
import Article from './Main/Article'
import SideLeft from './Side/SideLeft'
import SideRight from './Side/SideRight'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Top>
        <Title></Title>
        <Navbar></Navbar>
      </Top>
      
      <Main>
        <SideLeft></SideLeft>
        <Article></Article>
        <SideRight></SideRight>
      </Main>
        
      <Footer>

      </Footer>
      

    </>
  );
}

export default App;
