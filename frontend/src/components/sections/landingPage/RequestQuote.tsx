import { RequestQuoteCards } from "../../../../..";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

import styles from "../../scss/RequestQuote.module.scss";

export default function RequestQuote() {
  return (
    <div className={styles.quoteContainer}>
      <div>
        <h1>Try out our Request to Quote</h1>
      </div>

      <div className={`${styles.cardContainer} ${styles.mediaQueryDesktop}`}>
        {RequestQuoteCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.text}
            width={card.width}
            height={card.height}
          />
        ))}
      </div>

      <Carousel className={styles.mediaQueryTablet}>
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(0, 2).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="pl-10 -ml-0">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(2, 4).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className={styles.next} />
        <CarouselPrevious className={styles.prev} />
      </Carousel>

      <Carousel className={styles.mediaQueryMobile}>
        <CarouselContent className="">
          <CarouselItem className="pl-3 -ml-1 ">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(0, 1).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(1, 2).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}{" "}
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(2, 3).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}{" "}
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className={`${styles.cardContainer} `}>
              {RequestQuoteCards.slice(3, 4).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.text}
                  width={card.width}
                  height={card.height}
                />
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className={styles.nextMobile} />
        <CarouselPrevious className={styles.prevMobile} />
      </Carousel>
    </div>
  );
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
}
const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  width,
  height,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        className="justify-center flex max-[768px]:max-w-[95px]"
        width={width}
        height={height}
      />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
