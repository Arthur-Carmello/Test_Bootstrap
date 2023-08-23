import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/section3';
import Form from './components/Form';

function App() {
  return (
    <>
    <body id="page-top">
       {/*  <!-- Header--> */}
       <Header/>
       {/*  <!-- Content section 1--> */}
       <Section1/>
        {/* <!-- Content section 2--> */}
        <Section2/>
        {/* <!-- Content section 3--> */}
        <Section3/>
       {/*  <!-- Footer--> */}
       <Form/>
       {/*  <!-- Form--> */}
        <Footer/>
    </body>
    </>
  );
}

export default App;