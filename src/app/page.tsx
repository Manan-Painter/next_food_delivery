import Feature from "@/components/Feature";
import Offer from "@/components/Offer";
import  Slider  from "@/components/Slider";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Slider/>
      <Feature />
      <Offer />
      <Footer/>
    </main>
  );
}
