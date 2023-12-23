import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
  const journey_data =[
    {
        id: "01", 
        date: "April 2020",
        title: <div>Foundation of<br/> Techwizard</div>,
        description: <div>In the wake of the pandemic, Techwizard emerged in April 2020, fueled by a collective passion for innovation and a commitment to redefine the digital landscape.</div>,
    },
    {
        id: "02", 
        date: "March 2021",
        title: <div>Crafting Digital <br /> Excellence</div>,
        description: <div>From our inception to the present day, we've evolved into a dynamic force, successfully completing over 100 projects. Our journey has been marked by a relentless pursuit of excellence in web development, e-commerce solutions, SEO, and the seamless integration of frontend, backend, and database development.</div>,
    },
    {
        id: "03", 
        date: "OCT 2021",
        title: <div>Expansion into <br />Major Sectors</div>,
        description: <div>In Oct 2021, we expanded our horizons, establishing a robust presence in five major sectors. Techwizard now thrives in web development, e-commerce solutions, SEO strategies, and the holistic management of frontend, backend, and database systems. Our expertise extends to graphic design and UI/UX development, reflecting our commitment to offering end-to-end solutions.</div>,
    },
    {
        id: '04', 
        date: "OCT 2022",
        title: <div>Departmental <br />Excellence</div>,
        description: <div>Building on our success, 2022 saw the establishment of a dedicated Head department comprising five skilled members. This strategic move enhanced our capabilities, enabling us to deliver tailored solutions with precision and expertise.</div>,
    },
    {
        id: "05", 
        date: "Present",
        title: <div>Sustained Success and<br /> Future Horizons</div>,
        description: <div>As we navigate 2023, Techwizard stands as a testament to sustained success and unwavering dedication. With a solid foundation, a diverse portfolio, and a team of experts, we look forward to shaping the digital future while continuing to exceed expectations in every project we undertake.</div>,
    },
    {
      id: "01", 
      date: "April 2020",
      title: <div>Foundation of<br/> Techwizard</div>,
      description: <div>In the wake of the pandemic, Techwizard emerged in April 2020, fueled by a collective passion for innovation and a commitment to redefine the digital landscape.</div>,
  },
  {
      id: "02", 
      date: "March 2021",
      title: <div>Crafting Digital <br /> Excellence</div>,
      description: <div>From our inception to the present day, we've evolved into a dynamic force, successfully completing over 100 projects. Our journey has been marked by a relentless pursuit of excellence in web development, e-commerce solutions, SEO, and the seamless integration of frontend, backend, and database development.</div>,
  },
  {
      id: "03", 
      date: "OCT 2021",
      title: <div>Expansion into <br />Major Sectors</div>,
      description: <div>In Oct 2021, we expanded our horizons, establishing a robust presence in five major sectors. Techwizard now thrives in web development, e-commerce solutions, SEO strategies, and the holistic management of frontend, backend, and database systems. Our expertise extends to graphic design and UI/UX development, reflecting our commitment to offering end-to-end solutions.</div>,
  },
  {
      id: '04', 
      date: "OCT 2022",
      title: <div>Departmental <br />Excellence</div>,
      description: <div>Building on our success, 2022 saw the establishment of a dedicated Head department comprising five skilled members. This strategic move enhanced our capabilities, enabling us to deliver tailored solutions with precision and expertise.</div>,
  },
  {
      id: "05", 
      date: "Present",
      title: <div>Sustained Success and<br /> Future Horizons</div>,
      description: <div>As we navigate 2023, Techwizard stands as a testament to sustained success and unwavering dedication. With a solid foundation, a diverse portfolio, and a team of experts, we look forward to shaping the digital future while continuing to exceed expectations in every project we undertake.</div>,
  },
  ]

const JourneyArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <div>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Journey Was Started
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>{item.date}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JourneyArea;