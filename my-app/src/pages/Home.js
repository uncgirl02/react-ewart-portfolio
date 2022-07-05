import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


export function Home() {


return (
    <div>
      <Header></Header> 
        <main>
          <Hero></Hero>
          <AboutMe></AboutMe>
          <ContactForm></ContactForm>
        </main>
      <Footer></Footer>
    </div>
  );

}

export default Home;