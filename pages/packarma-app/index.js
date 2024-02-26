import styles from "../../styles/packarma-app.module.scss";
import Layout from "../../components/layout"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Heading from "../../components/heading";
import Carousel from "nuka-carousel";
import PackarmaContact from "../../components/packarma-contact"
import VideoGallery from "../../components/videoGallery";
import PackarmaBlogCarousel from "../../components/packarmaBlogCarousel";
import Particles from "../../components/particles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllData } from "../../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";

export default function Index(){

  const [data, setdata] = useState([]);
  const router = useRouter();

  // get scrren size
  const [mobile, setMobile] = useState(false);

  const OfferImageData = useQuery(
    ["packarma_offer_images"],
    () => {
      return getAllData("packarma_offer_images");
    },
    {
      staleTime: 10000 * 60,
    }
  );
  const TestimonialData = useQuery(
    ["packarma_testimonials"],
    () => {
      return getAllData("packarma_testimonials");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  useEffect(() => {
    //   fetch blog data using api
    //Aos.init();
    setMobile(window.innerWidth < 768 ? true : false);

    fetch("/api/our-work/get")
      .then((res) => res.json())
      .then((data) => {
        // reverse the array to get latest blog first
        data.reverse();
        setdata(data);
      })
      .catch((err) => console.log(err));
  }, []);

    return(
        <Layout>
          <Head>
            <title>Packult - create | New Page </title>
          </Head>
          <div className={styles.lap_particles}>                
            <Particles
              color="#F1C644"
              height="50vw"
              width="150vw"
              top="40vw"
              left="90vw"
              blur="10vw"
            />
            <Particles
              color="#A3DCFF"
              height="50vw"
              width="150vw"
              top="85vw"
              left="-135vw"
              blur="5vw"
            />
            <Particles
              color="#BB80FF"
              height="50vw"
              width="150vw"
              top="125vw"
              left="96vw"
              blur="6vw"
            />
            <Particles
              color="#F1C644"
              height="50vw"
              width="150vw"
              top="205vw"
              left="-145vw"
              blur="5vw"
            />          
        </div>
        <div className={styles.tablet_particles}>
          <Particles
            color="#F1C644"
            height="50vw"
            width="150vw"
            top="40vw"
            left="90vw"
            blur="10vw"
          />
          <Particles
            color="#A3DCFF"
            height="50vw"
            width="150vw"
            top="92vw"
            left="-135vw"
            blur="5vw"
          />
          <Particles
            color="#BB80FF"
            height="50vw"
            width="150vw"
            top="130vw"
            left="95vw"
            blur="5vw"
          />
          <Particles
            color="#F1C644"
            height="50vw"
            width="150vw"
            top="220vw"
            left="-140vw"
            blur="10vw"
          />
        </div>
        <div className={styles.mobile_particles}>
        <Particles
          color="#F1C644"
          height="50vw"
          width="150vw"
          top="175vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#A3DCFF"
          height="50vw"
          width="150vw"
          top="240vw"
          left="-135vw"
          blur="5vw"
        />
        <Particles
          color="#BB80FF"
          height="30vw"
          width="150vw"
          top="285vw"
          left="95vw"
          blur="10vw"
         />
        <Particles
          color="#F1C644"
          height="50vw"
          width="150vw"
          top="385vw"
          left="-135vw"
          blur="10vw"
        />
      </div>
      
              {mobile ? (
                <>
                <div className={styles.langingPage}>    
                  <div className={styles.content}>   
                    <div className={styles.row1}>
                      {/* <Image
                        src="/assets/images/packarma/logo.png"
                        alt="hero banner"
                        height={1000}
                        width={1000}
                      />  */}
                      <h2 style={{marginTop:"2vw"}}><span>Packarma</span> <br /> Unwr<span>App</span> Efficiency, <br /> Simplify Packaging!
                        <p>Powered By PACKult</p>
                      </h2>
                    </div>
                    <div className={styles.row2}>
                        <Image
                          data-aos="fade-right"
                          src="/assets/images/packarma/rightimage.png"
                          width={1000}
                          height={1000}
                          alt="Innovative Packaging"
                        />
                    </div>
                    <div className={styles.qr_codes}>
                      <Link href="https://www.qrcodechimp.com/page/rq4f2808n4xz" rel="noopener noreferrer" target="_blank">
                        <Image
                          src={"/assets/images/packarma/PACKARMA_C_QR.png"}
                          alt="Packarma For Customer-QR Code"
                          width={1000}
                          height={1000}
                        />
                      </Link>
                      <h5>Scan now to Download our App.
                        <div className={styles.apple_play_store}>
                          <Link href="https://apps.apple.com/in/app/packarma/id1666282108" rel="noopener noreferrer" target="_blank">
                            <Image
                              src={"/assets/images/packarma/App Store.png"}
                              alt="App Store Icon"
                              width={1000}
                              height={1000}
                            />
                          </Link>
                          <Link href="https://play.google.com/store/apps/details?id=com.packult.customer" rel="noopener noreferrer" target="_blank">
                            <Image
                              src={"/assets/images/packarma/Google Play.png"}
                              alt="Play Store Icon"
                              width={1000}
                              height={1000}
                          />
                         </Link>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>


                <div className={styles.mobintro}>
                  <div className={styles.bgRectangle}></div>
                  <div className={styles.content}>
                    
                    <h3 style={{color:"white",marginRight:"10vw",marginBottom:"1vw"}}>
                      Offers
                      <span className={styles.arrow} style={{paddingLeft:"2vw"}}>                                      
                        <Image
                          src="/assets/icons/Vector.png"
                          height={10}
                          width={10}
                          alt="Green Arrow Icon"
                        />
                        {" "}
                      </span>
                    </h3>
                    <div style={{  width:"80vw",height: "35vw",top:"1vw"}}>
                      <Carousel
                        defaultControlsConfig={{
                          nextButtonText: ">",
                          prevButtonText: "<",
                          nextButtonProps: { "aria-label": "Next" },
                          prevButtonProps: { "aria-label": "Previous" },
                          nextButtonClassName: styles.arrow,
                          prevButtonClassName: styles.arrow,
                          nextButtonStyle: {
                            backgroundColor: "#87BE42",
                            width: "2vw",
                            height: "2vw",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",                           
                          },
                          prevButtonStyle: {
                            backgroundColor: "#87BE42",
                            width: "2vw",
                            height: "2vw",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                          },

                          pagingDotsStyle: {
                            display: "none",
                          },
                        }}
                      >
                        {OfferImageData?.data?.data.map((item, index) => (
                          <div className={styles.carousel} key={index} >
                            <div style={{height: "35vw", width:"80%",paddingLeft:"8vw"}}>
                            <Image
                                width={200}
                                height={200}
                                style={{
                                  objectFit: "cover",
                                  // borderRadius: "10px",
                                  // marginBottom: "10px",
                                  height: "35vw",
                                  width:"100%"
                                }}
                                alt="Picture of the author"
                                src={item.image}
                                key={index}
                              />
                            </div>
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
                </>
              ):(
                
              <>
                <div className={styles.langingPage}>  
                  <div className={styles.content}>                      
                  <div className={styles.left}>
                    <div className={styles.ellipse} >
                      <div className={styles.details}>                       
                        <h2><span>Packarma</span> <br /> Unwr<span>App</span> Efficiency, <br /> Simplify Packaging!
                          <p>Powered By PACKult</p>
                        </h2>
                        <div className={styles.qr_codes}>
                          <Link href="https://www.qrcodechimp.com/page/rq4f2808n4xz" rel="noopener noreferrer" target="_blank">
                            <Image
                              src={"/assets/images/packarma/PACKARMA_C_QR.png"}
                              alt="Packarma For Customer-QR Code"
                              width={1000}
                              height={1000}
                              //style={{paddingRight:"0.6vw"}}
                            />
                          </Link>
                          <h5>Scan now to Download our App.
                            <div className={styles.apple_play_store}>
                              <Link href="https://apps.apple.com/in/app/packarma/id1666282108" rel="noopener noreferrer" target="_blank">
                                <Image
                                  src={"/assets/images/packarma/App Store.png"}
                                  alt="App Store Icon"
                                  width={1000}
                                  height={1000}
                                  //style={{position:"absolute",left:"22vw"}}
                                />
                              </Link>
                              <Link href="https://play.google.com/store/apps/details?id=com.packult.customer" rel="noopener noreferrer" target="_blank">
                                <Image
                                  src={"/assets/images/packarma/Google Play.png"}
                                  alt="Play Store Icon"
                                  width={1000}
                                  height={1000}
                                />
                              </Link>
                            </div>
                            </h5>
                      </div>
                    </div>              
                    </div>                          
                  </div>  
                  <div className={styles.right}>
                    <Image
                      data-aos="fade-right"
                      src="/assets/images/packarma/rightimage.png"
                      width={1000}
                      height={100}
                      alt="Innovative Packaging"
                    />                                                          
                  </div>
                </div>      
              </div>
              
                
              <div className={styles.intro}>
                <div className={styles.bgRectangle}></div>
                <div className={styles.content}>
                  <div className={styles.left}>                
                  <h2>Offers
                    <span className={styles.arrow}>
                    <Image
                      src="/assets/icons/Vector.png"
                      height={17}
                      width={16}
                      alt="Green Arrow Icon"
                    />
                    {" "}
                  </span>
                  </h2>
                
                <div style={{marginLeft:"15vw",marginRight:"15vw"}} >
                  {/* style={{display: "flex",justifyContent: "center",alignItems: "center",marginLeft:"10vw",marginRight:"20vw"}}> */}
                  <Carousel
                    defaultControlsConfig={{
                      nextButtonText: ">",
                      prevButtonText: "<",
                      nextButtonProps: { "aria-label": "Next" },
                      prevButtonProps: { "aria-label": "Previous" },
                      nextButtonClassName: styles.arrow,
                      prevButtonClassName: styles.arrow,
                      nextButtonStyle: {
                        backgroundColor: "#87BE42",
                        width: "2vw",
                        height: "2vw",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",                      
                      },
                      prevButtonStyle: {
                        backgroundColor: "#87BE42",
                        width: "2vw",
                        height: "2vw",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                      },

                      pagingDotsStyle: {
                        display: "none",
                      },
                    }}
                  >
                      {OfferImageData?.data?.data.map((item, index) => (
                        <div className={styles.carousel} key={index} >
                          <div style={{boxShadow:"0 0 10px #A3DCFF",backgroundColor:"#000000",height: "25vw", width:"100%"}}>
                          <Image
                              width={200}
                              height={200}
                              style={{objectFit: "cover",height: "25vw",width:"100%"}}
                              alt="Picture of the author"
                              src={item.image}
                              key={index}
                            />
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>


                </div>
              </div>

              </div>
              </>
            )}
              
              <div className={styles.benifits}>
                <Heading heading="Benefits" line={true} />
                {/* <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>  */}
                {/* <h3>Download app for unmatched convenience!</h3> */}
                <div className={styles.content}>                   
                    <div className={styles.left} style={{justifyContent:"center"}}>
                      <Image
                        data-aos="fade-right"
                        src="/assets/images/packarma/benefitmob.png"
                        width={1000}
                        height={1000}
                        alt="Innovative Packaging"
                        //className={styles.center}
                      />                                                          
                    </div>
                    <div className={styles.right}>                      
                      {/* <h2>Download app to enjoy more!</h2> */}
                      <h2>Download app for unmatched convenience!</h2>
                      <p>
                        With Packarma APP, simplify selection of packaging solutions for your products with just a few 
                        taps and free up your valuable time for other critical tasks. Install Packarma App today and 
                        unlock a world of limitless possibilities, where innovation meets convenience. And that&apos;s not all 
                        – stay tuned for several exciting new features slated to roll out in the coming months, ensuring 
                        that Packarma remains your go-to platform for all things packaging.
                        <br />
                        <br />
                        Packarma is available both on Playstore & iOS.
                      </p>    
                      <div className={styles.apple_play_store}>
                      <Link href="https://apps.apple.com/in/app/packarma/id1666282108" rel="noopener noreferrer" target="_blank">
                          <Image
                            src={"/assets/images/home/App Store.png"}
                            alt="App Store Icon"
                            width={1000}
                            height={1000}
                          />
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.packult.customer" rel="noopener noreferrer" target="_blank">
                          <Image
                            src={"/assets/images/home/Google Play.png"}
                            alt="Play Store Icon"
                            width={1000}
                            height={1000}
                          />
                        </Link>
                      </div>                                       
                    </div>  
                </div>
              </div>

              <div className={styles.features}>
                <Heading heading="Features" line={true} />
                <div className={styles.component}>
                    <div className={styles.left}>
                      <div className={styles.content}> 
                      <div style={{position:"relative",backgroundColor:"#C2D950",borderRadius:"50%",width:"2.5vw",height:"2.5vw",left:"-11.1vw",top:"20.9vw"}}></div>
                      <div style={{position:"relative",backgroundColor:"#C2D950",borderRadius:"50%",width:"2.5vw",height:"2.5vw",left:"-11.1vw",top:"4vw"}}></div>
                      {/* <div style={{position:"relative",backgroundColor:"#C2D950",borderRadius:"50%",width:"2.5vw",height:"2.5vw",left:"-11.1vw",top:"8.8vw"}}></div> */}
                        <ul data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine">                            
                          <li>
                            <h3> Banner Advertisement</h3>
                            The app will actively promote Packaging Converters & their services, serving as a robust platform for lead generation within the industry.
                            <br /><br /><br />
                          </li>                          
                        {/* </ul>
                        <ul data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine">                             */}
                          <li>
                            <h3> Subscription Based Model</h3>
                            Users can access the full range of packaging solutions through a subscription model offered by the app.
                          </li>
                        </ul>                        
                      </div>
                    </div>
                    <div className={styles.middle}>
                      <Image
                        src="/assets/images/packarma/feature_middle.png"                    
                          alt="Green Arrow Icon"
                          height={1000}
                          width={1000}
                          />
                      </div>
                      <div className={styles.right}>
                        <div className={styles.content}>   
                          <div style={{position:"relative",backgroundColor:"#C2D950",borderRadius:"50%",width:"2.5vw",height:"2.5vw",right:"13vw",top:"19.6vw"}}></div>
                          <div style={{position:"relative",backgroundColor:"#C2D950",borderRadius:"50%",width:"2.5vw",height:"2.5vw",right:"13vw",top:"4.3vw"}}></div>                                            
                          <ul data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">                            
                            <li>
                              <h3> Categorized Data</h3>
                              The app features solutions categorized into Food, Home & Personal Care and Pharmaceuticals, with regular updates to expand and enhance its offerings.
                              Many more Product categories would be added in the coming months.
                            </li>
                            <li>
                              <h3> Search History</h3>
                              The app&apos;s history tab stores previously searched solutions, providing easy access to your search history.
                              <br /><br /><br /><br />
                            </li>
                          {/* </ul>
                          <ul data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">                             */}
                            
                          </ul>
                        </div> 
                      </div>                      
                  </div>
                </div>

              <div className={styles.aboutusHead}>
                <Heading heading="About Us" line={true}  />   
              </div>
              <div className={styles.aboutus}>                           
                <div className={styles.component}>
                  <div className={styles.content}>
                    <Image
                      data-aos="fade-left"
                      src="/assets/images/packarma/about_us.png"
                      width={1000}
                      height={1000}
                      alt="Innovative Packaging"
                    />
                    <div>                     
                      <p>
                        Introducing Packarma, an innovative app-based platform that provides customised Flexible packaging solutions for several product categories, with other Packaging formats and several other features in the pipeline. Whether you need packaging solutions for Food, Home and Personal Care  or Pharma products, Packarma helps you find the best solutions for your needs. From the exacting requirements of the food industry to the precise demands of home & personal care and pharmaceuticals, Packarma offers best-in-class solutions tailored to your specific needs. Packarma works on a subscription basis and offers the convenience of finding the most reliable packaging solutions on the go.
                        <br /><br />
                        Join us today and discover the benefits of Packarma!
                      </p>                      
                    </div>                    
                  </div>
                </div>
              </div>
              

              <div className={styles.videoCarousel}>
                {/* <Heading heading="How to use App" line={true} /> */}
                  <VideoGallery  />
              </div>

              <div className={styles.customers}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <h2>Here&apos;s what a few of our customers have to say </h2>
                    <Image
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      src={"/assets/images/home/stars.png"}
                      alt="Rating Icon"
                      height={1000}
                      width={1000}
                      style={{ marginBottom: "2vw   " }}
                    />
                    <hr />

                    {/* review-carousel */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        
                      }}
                    >
                      <Carousel
                        defaultControlsConfig={{
                          nextButtonText: ">",
                          prevButtonText: "<",
                          nextButtonProps: { "aria-label": "Next" },
                          prevButtonProps: { "aria-label": "Previous" },
                          nextButtonClassName: styles.arrow,
                          prevButtonClassName: styles.arrow,
                          nextButtonStyle: {
                            backgroundColor: "#87BE42",
                            width: "2vw",
                            height: "2vw",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                          },
                          prevButtonStyle: {
                            backgroundColor: "#87BE42",
                            width: "2vw",
                            height: "2vw",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                          },

                          pagingDotsStyle: {
                            display: "none",
                          },
                        }}
                      >
                        {TestimonialData?.data?.data.map((item, index) => (
                          <div className={styles.carousel} key={index}>
                            <p>{item.content}</p>
                            <h4>
                              <span> {item.name} </span> {item.designation}
                            </h4>
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            
          <div className={styles.blog}>
            <PackarmaBlogCarousel heading={"Blog"} isBlogPage={false} />
          </div>
          {/* <WorkNumbers /> */}
          <div className={styles.contact}>
            <PackarmaContact />
          </div>
        </Layout>
    )
}
