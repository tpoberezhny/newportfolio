export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning some new technologies",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to contact me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Full-Stack App",
    des: "This is an app where users can browse products, manage a shopping cart, and securely checkout using Stripe",
    img: "/ECommerce.png",
    iconLists: ["/react.svg", "/sass.svg", "/express.svg", "/sql.svg", "/node.svg"],
    link: "https://ecommerceapp-frontend-8tpc.onrender.com/?",
  },
  {
    id: 2,
    title: "Data Extender - Manage Data Analytics Centrally",
    des: "Enhance your data capabilities with Data Extender, the ultimate solution for extending and maximizing the value of your data.",
    img: "/dataExtender.png",
    iconLists: ["/next.svg", "/tailwind.svg", "/lottie.svg"],
    link: "https://data-extender.netlify.app/?",
  },
  {
    id: 3,
    title: "Hotel App",
    des: "The app, that features a user-friendly interface that allows users to search, filter hotel listings and see the details of the different rooms",
    img: "/hotelApp.png",
    iconLists: ["/react.svg", "/tailwind.svg", "/calendar.svg"],
    link: "https://master--hotel-apptim.netlify.app/?",
  },
  {
    id: 4,
    title: "My Portfolio - Old One",
    des: "This project not only demonstrates my proficiency in React but also showcases ability to implement dynamic forms and handle data using APIs...",
    img: "/portfolioApp.png",
    iconLists: ["/react.svg", "/tailwind.svg", "/sass.svg", "/ts.svg"],
    link: "https://tpoberezhny.github.io/my-portfolio",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Dev - Publicis Groupe",
    desc: "I am actively involved in development on a key team, followed by deployment and configuration into Salesforce & Veeva CRM that allows physicians to view the most important drug information for the biggest pharma company in the world.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance - Mobile & Desktop apps",
    desc: "Designed and developed mobile apps using React Native and desktop applications using React/Next, Node, TS/JS.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance UI/UX Designer",
    desc: "Was working on a couple of designs, primarily using Figma. Assets are available on my previous Porfolio App.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Junior Frontend Developer",
    desc: "Together with a friend invented and developed the concept of an full service agency. I was responsible for client communication and Front-End development. Also was helping designers with UI/UX design.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    title: "GitHub",
    href: "https://github.com/tpoberezhny",
  },
  {
    id: 2,
    img: "/instagram.svg",
    title: "Instagram",
    href: "https://www.instagram.com/tpoberezhny",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tpoberezhny",
  },
];
