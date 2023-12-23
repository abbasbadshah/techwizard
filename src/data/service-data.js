import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "AI Data Analysis",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Machine Learning",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Data Visualization",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Business Intelligence",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Artificial Intelligence",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <div>Automate Workflows <br /> and Monitor your Sales.</div>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <div>Track your Marketing to see the best Results.</div>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <div>Automate recurring invoices and save time.</div>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <div>Get real-time visibility into every expense.</div>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solustions jamil",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "AI Data Cloud Solution",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <div>Managed <br /> Web Application</div>,
        sub_title: "Cloud Backup",
        cls: "3",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24//7 Customer Support",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <div>Lorem Ipsum is simply dummy text <br /> of the printing</div>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <div>Web Development <br /> Management</div>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <div>Track materials and stock for outsourced purchase orders</div>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_7,
        img: img_7,
        title: <div>Graphic & Visual<br /> Designing</div>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <div>Track materials and stock for outsourced purchase orders</div>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_8,
        img: img_8,
        title: <div>Digital Marketing <br /> SEO Optimizations</div>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <div>Track materials and stock for outsourced purchase orders</div>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_9,
        img: img_9,
        title: <div>Ecommerce Websites<br /> Development</div>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <div>Track materials and stock for outsourced purchase orders</div>,
        delay: ".9s",
    },

    // service page
    {
        id: 18,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <div>Automate Workflows <br /> and Monitor your Sales.</div>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <div>Track your Marketing to see the best Results.</div>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <div>Automate recurring invoices and save time.</div>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <div>Get real-time visibility into every expense.</div>,
        delay: ".9s",
    },
    
    {
        id: 22,
        icon: <ServiceIconFive/>,
        img: <ServiceIconFive />,
        title: "FIELDS OPTION",
        description: <div>Quick & Easy Repeater Fields Option</div>,
        delay: ".9s",
    },
    
    {
        id: 23,
        icon: <ServiceIconsix/>,
        img: <ServiceIconsix />,
        title: "Safe Online Services",
        description: <div>Online services to view company level.</div>,
        delay: ".9s",
    },
    
    {
        id: 24,
        icon: <ServiceIconSeven/>,
        img: <ServiceIconSeven />,
        title: "Online marketing",
        description: <div>Get real-time visibility into every expense.</div>,
        delay: ".9s",
    },


]
export default service_data