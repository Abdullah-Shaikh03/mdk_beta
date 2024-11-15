import "./globals.css";
import Foot from "@/components/Foot";
import HeaderNav from "@/components/HeaderNav";
import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'
import Head from "next/head";
export const metadata = {
  title: "Mother's Doon Kitchen",
  description: "Mother's Doon Kitchen is a leading manufacturer of commercial kitchen equipment in Dehradun, India.", 
  keywords: "commercial kitchen equipment, kitchen equipment, kitchen equipment manufacturer, kitchen equipment supplier, kitchen equipment in dehradun, kitchen equipment in india", 
  image: "/home/mdkbg-removebg-preview.png",
  url: "https://mothersdoonkitchen.in",
  type: "website",
  siteName: "Mother's Doon Kitchen",
  locale: "en_IN",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight : ["400", "700"],
  display: "swap",
});

const craletto = localFont({
  name: "craletto",
  //public\fonts\craletto\Craletto.ttf
  src: "./fonts/craletto/Craletto.ttf",
  weight: "400",
});


export default function RootLayout({ children }) {

  // function to randomize the position of the gradient circles
  function randomize() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <html lang="en" className={`${ubuntu.className} `}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Mother's Doon Kitchen, Commercial Kitchen Manufacturing </title>
        <meta name="description" content="Mother's Doon Kitchen is a leading manufacturer of commercial kitchen equipment in Dehradun, India. With a legacy of excellence spanning 21 years, we are the go-to choice for businesses seeking state-of-the-art kitchens that redefine culinary spaces." />
        <meta name="keywords" content="commercial kitchen equipment, kitchen equipment, kitchen equipment manufacturer, kitchen equipment supplier, kitchen equipment in dehradun, kitchen equipment in india, kitchen, dehradun kitchen, commercial kitchen, stainless steel fabrication, oven, four burner, kitchen for restaurant, hotel kitchen , chimney, bar equipment, korean kitchen, chinese kitchen, sushi counter, display counter" /> 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#b91d47"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className={`text-font bg-background scrollbar overflow-x-hidden`}>
     
               <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" style={{ pointerEvents: 'none' }}>
        {/* randomize position of these blobs */}
        <div
          className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 rounded-full blur-[45.36px] absolute w-96 h-96 animate-random-11"
          style={{ top: randomize() + '%', left: randomize() + '%' }} 
        />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 rounded-full blur-[70.36px] absolute w-96 h-96 animate-random-21"
        style={{top: randomize() + '%', left: randomize() + '%'}}
      />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 hidden md:block rounded-full blur-[90.36px] absolute w-48 h-48 animate-random-31"
        style={{ top: randomize() + '%', left: randomize() + '%' }}
      />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 rounded-full blur-[65.36px] absolute w-60 h-60 animate-random-41"
        style={{ bottom: randomize() + '%', right: randomize() + '%' }}
      />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 hidden md:block rounded-full blur-[150.36px] absolute w-90 h-90 animate-random-51"
        style={{ bottom: randomize() + '%', right: randomize() + '%' }}
      />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/40 rounded-full blur-[115.36px] absolute w-96 h-96 animate-random-61"
        style={{ bottom: randomize() + '%', right: randomize() + '%' }}
      />
      <div
        className="bg-gradient-to-br from-[#FFE600]/40 to-[#EF3CD2]/20 hidden md:block rounded-full blur-[150.36px] absolute w-80 h-80 animate-random-71"
        style={{ bottom: randomize() + '%', right: randomize() + '%' }}
      />
        {/* <div className="bg-gradient-to-br from-[#FFE600]/20 to-[#EF3CD2]/20 rounded-full blur-[345.36px] absolute w-96 h-96 left-[-221px] top-[-263px]"  />  */}
        </div>
        <HeaderNav />
        <div className="w-full">
             {children}

        </div>
             {/* <div className="fixed bottom-0 left-0 w-full h-full -z-10 opacity-70 blur-md" style={{ pointerEvents: 'none' }}>
              <BackgroundGradientAnimation />
            </div> */}
        
        <Foot />
      </body>
    </html>
  );
}
