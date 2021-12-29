import Top from './Top'
import Main from './Main'
import Title from './Title'
import Navbar from './Navbar'
import Article from './Article'
import SideLeft from './SideLeft'
import SideRight from './SideRight'
import Footer from './Footer'


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
