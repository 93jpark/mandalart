import Top from './Top'
import Content from './Content'
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
      
      <Content>
        <SideLeft></SideLeft>
        <Article></Article>
        <SideRight></SideRight>
      </Content>
        
      <Footer>

      </Footer>
      

    </>
  );
}

export default App;
