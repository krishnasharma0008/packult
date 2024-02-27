/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout";
import styles from "../styles/home.module.scss";
import Heading from "../components/heading";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../common/routes";
import Carousel from "nuka-carousel";
import WorkNumbers from "../components/workNumbers";
import Contact from "../components/contact";
import BlogCarousel from "../components/blogCarousel";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllData } from "../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

export default function Home() {
  //const [data, setdata] = useState([]);
  const router = useRouter();

  // get scrren size
  const [mobile, setMobile] = useState(false);
  const TestimonialData = useQuery(
    ["testimonials"],
    () => {
      return getAllData("testimonials");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const WorkWithImages = useQuery(
    ["work_with_images"],
    () => {
      return getAllData("work_with_images");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const data = useQuery(
    ["our_Works_V2"],
    () => {
      return getAllData("Our_Works_V2");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  console.log(data)

  useEffect(() => {
    //   fetch blog data using api

    setMobile(window.innerWidth < 768 ? true : false);

    // fetch("/api/our-work/get")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // reverse the array to get latest blog first
    //     data.reverse();
    //     setdata(data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Packult | Custom Packaging Solutions | New Packaging designs
        </title>
        <meta
          name="description"
          content="Packult provides custom packaging solutions for businesses worldwide. Our innovative designs and sustainable solutions help you stand out in the market."
        />

        <link rel="canonical" href="https://packult.com/" />
        <link rel="alternate" href="https://packult.com/" hreflang="en" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Packult",
            "url": "https://packult.com/",
            "logo": "https://packult.com/assets/logos/logo.svg",
            "sameAs": [
              "https://www.facebook.com/sustainovation",
              "https://www.linkedin.com/company/packult-studio-private-limited",
              "https://www.instagram.com/packult2021/"
            ]
          }
        `,
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://packult.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Value Improvement",
                  item: "https://packult.com/value-improvement",
                },
              ],
            }),
          }}
        />
      </Head>
      <h1 style={{
        opacity:"0",
        height:"0",
        width:"0",
        padding:"0",
        margin:"0"
      }} >
        Packult
      </h1>
      <div className={styles.lap_particles}>
        <Particles
          color="#C2D950"
          height="50vw"
          width="150vw"
          top="70vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="140vw"
          left="-135vw"
          blur="5vw"
        />
        <Particles
          color="rgba(241, 198, 68,0.7)"
          height="50vw"
          width="150vw"
          top="215vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="285vw"
          left="-135vw"
          blur="2vw"
        />
      </div> 
      <div className={styles.tablet_particles}>
        <Particles
          color="#C2D950"
          height="50vw"
          width="150vw"
          top="100vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="160vw"
          left="-135vw"
          blur="5vw"
        />
        <Particles
          color="rgba(241, 198, 68,0.7)"
          height="50vw"
          width="150vw"
          top="235vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="300vw"
          left="-135vw"
          blur="2vw"
        />
      </div>
      <div className={styles.mobile_particles}>
        <Particles
          color="#C2D950"
          height="50vw"
          width="150vw"
          top="200vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="280vw"
          left="-135vw"
          blur="5vw"
        />
        <Particles
          color="rgba(241, 198, 68,0.7)"
          height="50vw"
          width="150vw"
          top="380vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color="#FFD7EA"
          height="50vw"
          width="150vw"
          top="460vw"
          left="-135vw"
          blur="5vw"
        />
      </div>

      <div className={styles.langingPage}>
        <video
          src="/assets/videos/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
        <div className={styles.scroll_down}>
          <Image
            src="/assets/images/home/mouse.png"
            width={1000}
            height={1000}
            alt="Mouse Icon"
          />
          <p>SCROLL DOWN</p>
        </div>
      </div>
       {mobile ? (
        <>
          <div className={styles.intro}>
            <div className={styles.bgRectangle}></div>
            <div className={styles.content}>
              <div className={styles.brand}>
                <Image
                  src="/assets/images/home/brandOwners.png"
                  width={1000}
                  height={1000}
                  alt="Packaging Solutions for Brand Owners"
                />
                <div className={styles.brandCard} data-aos-duration="1000">
                  <Link href={ROUTES.BRAND_OWNERS}>
                    <h3>
                      Brand Owners
                      <span className={styles.arrow}>
                        {" "}
                        <Image
                          src="/assets/icons/arrow45.svg"
                          height={10}
                          width={10}
                          alt="Arrow Icon"
                        />{" "}
                      </span>
                    </h3>
                  </Link>
                  <p>
                    Packult has been providing innovative Packaging solutions to
                    reputed FMCG, Cosmetics, Pharmaceuticals, Consumer Durables,
                    Automotives, Chemicals, Agro-Chemicals and other industries.
                  </p>
                </div>
              </div>
              <div className={styles.brand}>
                <Image
                  src="/assets/images/home/packagingConverters.png"
                  width={1000}
                  height={1000}
                  alt="Packaging Converters"
                />
                <div className={styles.brandCard} data-aos-duration="1000">
                  <Link href={ROUTES.PACKAGING_CONVERTERS}>
                    <h3>
                      Packaging Converters
                      <span className={styles.arrow}>
                        {" "}
                        <Image
                          src="/assets/icons/arrow45.svg"
                          height={10}
                          width={10}
                          alt="Arrow Icon"
                        />{" "}
                      </span>
                    </h3>
                  </Link>
                  <p>
                    With our global connections and strong machine expertise, we
                    bring in the best of the latest technologies for improving
                    efficiency, productivity & safety at your plant with highest
                    quality of service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.vision_mission}>
            <Heading heading="Vision and Mission" line={true} />
            <div className={styles.content}>
              <Image
                src="/assets/gifs/vision.gif"
                alt="Our Vision"
                height={1000}
                width={1000}
              />
              <h2>OUR VISION</h2>
              <ul>
                <li>
                  Our Vision is to be the best in the business and support our
                  partners in their journey to Packaging excellence through
                  sustainable, innovative and disruptive solutions
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <Image
                src="/assets/gifs/mission.gif"
                alt="Our Mission-Packult"
                height={1000}
                width={1000}
              />
              <h2>OUR MISSION</h2>
              <ul>
                <li>
                  Our mission is to make a real difference to packaging... great
                  aesthetics, best value for money and friendly to the planet,
                  through partnerships with Brand owners and Packaging producers
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.intro}>
            <div className={styles.bgRectangle}></div>
            <div className={styles.content}>
              <div className={styles.brand} data-aos="fade-up">
                <Image
                  src="/assets/images/home/brandOwners.png"
                  width={1000}
                  height={1000}
                  alt="Packaging Solutions for Brand Owners"
                />
                <div
                  className={styles.brandCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link href={ROUTES.BRAND_OWNERS}>
                    <h3>
                      Brand Owners
                      <span className={styles.arrow}>
                        {" "}
                        <Image
                          src="/assets/icons/arrow45.svg"
                          height={10}
                          width={10}
                          alt="Arrow Icon"
                        />{" "}
                      </span>
                    </h3>
                  </Link>
                  <p>
                    Packult has been providing innovative Packaging solutions to
                    reputed FMCG, Cosmetics, Pharmaceuticals, Consumer Durables,
                    Automotives, Chemicals, Agro-Chemicals and other industries.
                  </p>
                </div>
              </div>
              <div className={styles.brand} data-aos="fade-up">
                <Image
                  src="/assets/images/home/packagingConverters.png"
                  width={1000}
                  height={1000}
                  alt="Packaging Converters"
                />
                <div
                  className={styles.brandCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link href={ROUTES.PACKAGING_CONVERTERS}>
                    <h3>
                      Packaging Converters
                      <span className={styles.arrow}>
                        {" "}
                        <Image
                          src="/assets/icons/arrow45.svg"
                          height={10}
                          width={10}
                          alt="Arrow Icon"
                        />{" "}
                      </span>
                    </h3>
                  </Link>
                  <p>
                    With our global connections and strong machine expertise, we
                    bring in the best of the latest technologies for improving
                    efficiency, productivity & safety at your plant with highest
                    quality of service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vision_mission}>
            <Heading heading="Vision and Mission" line={true} />
            <div className={styles.content}>
              <Image
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                src="/assets/gifs/vision.gif"
                alt="Our Vision"
                height={1000}
                width={1000}
              />
              <h2>OUR VISION</h2>
              <ul
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <li>
                  Our Vision is to be the best in the business and support our
                  partners in their journey to Packaging excellence through
                  sustainable, innovative and disruptive solutions
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <Image
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                src="/assets/gifs/mission.gif"
                alt="Our Mission-Packult"
                height={1000}
                width={1000}
              />
              <h2>OUR MISSION</h2>
              <ul
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <li>
                  Our mission is to make a real difference to packaging... great
                  aesthetics, best value for money and friendly to the planet,
                  through partnerships with Brand owners and Packaging producers
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* <div className={styles.gallery}>
        <Heading heading="Gallery" line={true} />
        <div className={styles.content}>
          <h3>A glimpse of our work and innovative concepts...</h3>

          <div className={styles.scroll}>
            {data.map((item, index) => {
              return (
                <Image
                  data-aos="fade-up"
                  onClick={() => {
                    router.push(ROUTES.OUR_WORKS + item.id);
                  }}
                  key={index}
                  src={item.image2}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              );
            })}
          </div>
          <div className={styles.all_services_button}>
            <hr></hr>
            <Link href={ROUTES.GALLERY}>View all Images</Link>
            <hr></hr>
          </div>
        </div>
      </div> */}
      <div className={styles.gallery}>
        <Heading heading="Gallery" line={true} />
        <div className={styles.content}>
          <h3>A glimpse of our work and innovative concepts...</h3>

          <div className={styles.scroll}>
            {data?.data?.data.map((item, index) => {
              return (
                <>
                <Image
                  data-aos="fade-up"
                  onClick={() => {
                    router.push(ROUTES.OUR_WORKS + item.id);
                  }}
                  key={index}
                  src={item.images[1].url}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
          
                </>
              );
            })}
          </div>
          <div className={styles.all_services_button}>
            <hr></hr>
            <Link href={ROUTES.GALLERY}>View all Images</Link>
            <hr></hr>
          </div>
        </div>
      </div>

      <div className={styles.services}>
        <Heading heading="Services" line={true} />
        <div className={styles.component}>
          <div className={styles.content}>
            <div>
              <h2
                onClick={() => {
                  router.push(ROUTES.PACKAGING_INNOVATION);
                }}
              >
                Packaging Innovation
                <span className={styles.arrow}>
                  {" "}
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />{" "}
                </span>
              </h2>
              <p>
                Our team of dedicated and experienced packaging experts from
                multiple packaging domains bring creativity and knowledge under
                one roof and we provide world class future-ready packaging
                solutions that elevates product quality, improves imagery, and
                enhances shelf appeal within the cost brief. From concept to
                implementation our experts have it all covered. We pride
                ourselves on providing top-notch packaging solutions to
                businesses of all sizes. From development of packaging concepts,
                innovative shapes, 2D / 3D modelling, mock-ups, artworks,
                structure and specifications, we take care of all your packaging
                innovation needs
              </p>
              {/* <ul>
                <li> <Link href={ROUTES.PACKAGING_INNOVATION}> Graphic Design</Link></li>
              </ul> */}
            </div>
            <Image
              data-aos="fade-left"
              src="/assets/images/home/service1.png"
              width={1000}
              height={1000}
              alt="Innovative Packaging"
            />
          </div>
          <hr />
        </div>
        <div className={styles.component}>
          <div className={styles.content}>
            <div>
              <h2
                onClick={() => {
                  router.push(ROUTES.SUSTAINABLE_SOLUTION);
                }}
              >
                Sustainable Solutions
                <span className={styles.arrow}>
                  {" "}
                  <Image
                    src="/assets/icons/arrow green.png"
                    height={1000}
                    width={1000}
                    alt="Green Arrow Icon"
                  />{" "}
                </span>
              </h2>
              <p>
                Sustainability is at the core of everything we do. The Packult
                team is highly adaptive to the changing customer needs in
                development of eco-friendly solutions. Our sustainable packaging
                solutions are intended to be in harmony with nature without
                impacting performance or aesthetics.
              </p>
            </div>
            <Image
              data-aos="fade-right"
              src="/assets/images/home/service2.png"
              width={1000}
              height={1000}
              alt="sustainable packaging solutions"
            />
          </div>
          <hr />
        </div>
        <div className={styles.component}>
          <div className={styles.content}>
            <div>
              <h2
                onClick={() => {
                  router.push(ROUTES.VALUE_IMPROVEMENT);
                }}
              >
                Value Improvement
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />{" "}
                </span>
              </h2>
              <p>
                In today’s competitive world, it is not only important to have a
                great packaging but also the most cost efficient one, to stay
                competitive and provide fuel for growth for the business. Our
                Packaging Value chain understanding is unparalleled, and our
                deep expertise of various levers influencing cost helps us
                deliver the best packaging solutions at most optimum cost
                through interventions in specifications, print design,
                dimensions, conversion processes, complexity reduction, Design
                to Value and more! Our team of experts will analyze your current
                packaging and identify potential cost saving opportunities
                without compromising on the quality or functionality of the
                packaging.
              </p>
            </div>
            <Image
              data-aos="fade-left"
              src="/assets/images/home/service3.png"
              width={1000}
              height={1000}
              alt="value added packaging"
            />
          </div>
          <div className={styles.all_services}>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.OPERATIONAL_EXCELLENCE}
            >
              <h2>
                Operational Excellence
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.SOURCING_EXCELLENCE}
            >
              <h2>
                Sourcing Excellence
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.RESOURCING}
            >
              <h2>
                Resourcing
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.APP_and_Business}
            >
              <h2>
                Application & Business Dev.
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.ARTWORK_AND_GRAPHICS}
            >
              <h2>
                Artwork & Graphics Mgmt.
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              href={ROUTES.MANAGEMENT_AND_ASSISTANCE}
            >
              <h2>
                Mergers & Acquisition
                <span className={styles.arrow}>
                  <Image
                    src="/assets/icons/arrow2.png"
                    height={1000}
                    width={1000}
                    alt="Arrow Icon"
                  />
                </span>
              </h2>
            </Link>
          </div>
          <div className={styles.all_services_button}>
            <hr></hr>
            <Link href={ROUTES.SERVICES}>View all Services</Link>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className={styles.customers}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Here's what a few of our customers have to say </h2>
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
      <div className={styles.cutomers_gallery}>
        <Heading heading="We are working with" line={true} />
        {/* content */}
        <div className={styles.content}>
          <Carousel autoplay={true} autoplayInterval={3000} wrapAround={true} pauseOnHover={true}
           slidesToShow={4}
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

            {/* split into different arrays  by 4 item */}
            {
            // WorkWithImages?.data?.data
            //   ?.reduce((resultArray, item, index) => {
            //     const chunkIndex = Math.floor(index / 4);

            //     if (!resultArray[chunkIndex]) {
            //       resultArray[chunkIndex] = []; // start a new chunk
            //     }

            //     resultArray[chunkIndex].push(item);

            //     return resultArray;
            //   }, [])
            WorkWithImages?.data?.data.map((item, index) => (
                <div className={styles.carousel} key={index}>
                  {/* {item.map((item, index) => ( */}
                    <Image
                      src={item.image}
                      alt={item.caption}
                      width={1000}
                      height={1000}
                      key={index}
                    />
                  {/* ))} */}
                </div>
              ))}
          </Carousel>
        </div>
      </div>
      <BlogCarousel heading={"Blog"} isBlogPage={false} />
      <div className={styles.awards}>
        <div className={styles.bg_plane}></div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className={styles.award_box}
            >
              <h4>
                {" "}
                {/* <span> IFCA 2022</span>  */}
                <span>IFCA STAR</span> DESIGN OF
                <br />
                THE YEAR
                <br /> 2022
              </h4>
                <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} />
              {/* <h4>
                {" "}
                <span> IFCA 2022</span> DESIGN OF
                <br />
                THE YEAR
                <br /> 2022S
              </h4>
              <Image
                src={"/assets/images/home/award.png"}
                alt="Recognitions"
                width={1000}
                height={1000}
              /> */}

            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className={styles.award_box}
            >
              <h4>
                {" "}
                <span> INDIASTAR</span> PACKAGING DESIGN EXCELLENCE
                <br /> 2022
              </h4>
              <Image
                src={"/assets/images/home/award.png"}
                alt="Recognitions"
                width={1000}
                height={1000}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={styles.award_box}
            >
              <h4>
                {" "}
                <span> IFCA STAR</span> FOR INNOVATION
                <br />
                & BEST BRANDING.
                <br /> 2023
              </h4>
              <Image
                src={"/assets/images/home/award.png"}
                alt="Recognitions"
                width={1000}
                height={1000}
              />
              <Image
                src={"/assets/images/home/award.png"}
                alt="Recognitions"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2>Our Awards</h2>
            <h3>Our Well Deserved Awards</h3>
            <p>
              At Packult we're proud to have received recognitions from a
              variety of organizations for our commitment to excellence in
              packaging design,innovation and skills.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.map}>
        <Image src={'/assets/images/home/map.png'} alt="map" width={1000} height={1000} />
      </div> */}      
      <div className={styles.mobile_app}>
        <div className={styles.contentHeader}>
          {/* <h2>Download our Packarma App</h2> */}
        
          <div className={styles.content}>        
            <div className={styles.left}>
              <h2>Download our Packarma App</h2>
              <p>
                {/* Packarma is an online packaging material solutions platform to not
                only get the right structure for your product but also to sell and
                buy packaging material. It gives you a seamless connect between
                the customer and the vendor for packaging solutions and gives you
                the ultimate UX for all your needs in packaging solutions. */}
                Packarma is an innovative app-based platform that provides customised Flexible packaging solutions for various product categories. Whether you need packaging solutions for food, home and personal care, or pharma products, Packarma helps you find the best options for your needs. Packarma works on a subscription basis and offers the convenience of finding the best 
                Flexible packaging solutions at the click of a button. Join us today and discover the benefits of Packarma!
              </p>
              <div className={styles.qr_codes}>
                <div>
                  <Link href="https://www.qrcodechimp.com/page/rq4f2808n4xz">
                    <Image
                      src={"/assets/images/home/Packarma_Customer (1).png"}
                      alt="Packarma For Customer-QR Code"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <h5>Customer App</h5>
                </div>
                {/* <div>
                  <Image
                    src={"/assets/images/home/Packarma_vendor.png"}
                    alt="Packarma For Vendor-QR Code"
                    width={1000}
                    height={1000}
                  />
                  <h5>Vendor App</h5>
                </div> */}
              </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="-500" className={styles.right}>
              <div className={styles.logo}>
                <Image
                  src={"/assets/images/packarma/PACKARMA_final logo-01.png"}
                  alt="Download Packarma App"
                  width={1000}
                  height={1000}
                />
              </div>
              <Image
                src={"/assets/images/home/iPhone 12 Pro.png"}
                alt="Download Packarma App"
                width={1000}
                height={1000}
              />
              <div className={styles.apple_play_store}>
                <Link href="https://apps.apple.com/in/app/packarma/id1666282108" target="_blank">
                  <Image
                    src={"/assets/images/home/App Store.png"}
                    alt="App Store Icon"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.packult.customer" target="_blank">
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
      </div>
      <WorkNumbers/>
      <Contact />
    </Layout>
  );
}
