import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Solutions",
    newTab: false,
    path: "/Solutions",
    submenu: [
      {
        id: 31,
        title: "Enterprise Software Solutions",
        newTab: false,
        path: "/Solutions/#Education",
      },
      
      {
        id: 34,
        title: "Education and Consultancy",
        newTab: false,
        path: "/Solutions/#E-commerce",
      },
      {
        id: 34,
        title: "E-commerce",
        newTab: false,
        path: "/Solutions/#E-commerce",
      },
     
      
    ],
  },

  {
    id: 3,
    title: "Portfolio",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web Application",
        newTab: false,
        path: "/Portfolio/#webapps",
      },
      {
        id: 34,
        title: "Mobile Application",
        newTab: false,
        path: "/Portfolio/#mobileapps",
      },
      
      {
        id: 35.1,
        title: "Content Production ",
        newTab: false,
        path: "/Portfolio/#contentproduction",
      },
      {
        id: 36,
        title: "Branding and Design",
        newTab: false,
        path: "/Portfolio/#branding&design",
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Products",
        newTab: false,
        path: "/Resources/products",
      },
      {
        id: 31,
        title: "Blog",
        newTab: false,
        path: "/Resources/blog",
      },
     
    ],
  },
  
  {
    id: 4,
    title: "Contact ",
    newTab: false,
    path: "/support",
  },
  {
    id: 2,
    title: "Testimonials",
    newTab: false,
    path: "/Testimonial",
  },
  

];

export default menuData;
