import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Components/Banner/Banner";
import TabSection from "./Components/TabSection/TabSection";

export default function Home() {
  return (
   <>
  <Navbar/>
  <Banner/>
  <TabSection/>
   
   </>
  );
}
