import React, { useEffect, useState } from "react";
import Heading from "./heading";
import styles from "../styles/components/blogCarousel.module.scss";
import { useRouter } from "next/router";
import { ROUTES } from "../common/routes";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../utils/firebase_data_handler";

function PackarmaBlogCarousel({ heading, isBlogPage }) {
  const router = useRouter();

  // string date to date object to get month and day
  const date = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "long" });
    const day = d.getDate();
    return `${month} ${day}`;
  };


  
  const packarma_blog = useQuery(
    ["packarma_blog"],
    () => {
      return getAllData(`packarma_blog`);
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <div className={styles.blogCarousel} id="blog">
      {!isBlogPage ? (
        <Heading heading={heading} line={true} />
      ) : (
        <Heading heading={heading} line={false} color={"black"} />
      )}
      <div className={styles.content}>
        {
          packarma_blog?.data?.data.map((item, index) => {
            var description = item.para1.length > 100 ? item.para1.slice(0, 100) + "..." : item.para1
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className={styles.card}
                key={index}
                onClick={() => router.push(ROUTES.PACKARMABLOG + item.id)}
              >
                <h5>{date(item.date)}</h5>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PackarmaBlogCarousel;
