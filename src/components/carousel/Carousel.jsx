import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/_default.css";
import miniHero5 from "../../assets/img/mini-hero-5.jpg";
import miniHero2 from "../../assets/img/mini-hero-2.jpg";
import miniHero4 from "../../assets/img/mini-hero-4.jpg";
import miniHero6 from "../../assets/img/mini-hero-6.jpg";
import EventCard from "../eventCard/EventCard";

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 834,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "20px", // Reduce el padding para evitar superposición
          slidesToShow: 2, // Reduce el número de slides visibles
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "3rem",
          slidesToShow: 1,
          slidesToScroll: 3
        }
      },
     
    ]
  };

  const events = [
    {
      id: 1,
      image: miniHero5,
      title: "Cúcuta Suena",
      place: "Estadio General Santander",
      date: "29/07/2024",
      hour: "09:00 pm"
    },

    {
      id: 2,
      image: miniHero2,
      title: "Mañana será bonito",
      place: "Estadio Atanasio Girardot",
      date: "29/07/2024",
      hour: "09:00 pm"
    },

    {
      id: 3,
      image: miniHero4,
      title: "Dread Mar I",
      place: "Movistar Arena",
      date: "29/07/2024",
      hour: "09:00 pm"
    },

    {
      id: 4,
      image: miniHero6,
      title: "Morat",
      place: "Movistar Arena",
      date: "29/07/2024",
      hour: "09:00 pm"
    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            place={event.place}
            date={event.date}
            hour={event.hour}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
