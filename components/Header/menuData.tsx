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
        id: 31,
        title: "Governement Services Solutions",
        newTab: false,
        path: "/Solutions/#GovernmentSolutions",
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
      {
        id: 35,
        title: "Manufacturing",
        newTab: false,
        path: "/Solutions/#manufacturing",
      },
      {
        id: 35,
        title: "Media & Entertainment",
        newTab: false,
        path: "/Solutions/#media&entertainment",
      },
      {
        id: 35.1,
        title: "Healthcare Services",
        newTab: false,
        path: "/Solutions/#healthcare",
      },
      {
        id: 36,
        title: "Realstate",
        newTab: false,
        path: "/Solutions/#realstate",
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
        id: 35,
        title: "Enterprise Software Solutions",
        newTab: false,
        path: "/Portfolio/#erp",
      },
      {
        id: 35,
        title: "Digital Marketing",
        newTab: false,
        path: "/Portfolio/#digitalmarketing",
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
      {
        id: 34,
        title: "Case Studies & Annual Reports",
        newTab: false,
        path: "/Resources/case-studies",
      },
      {
        id: 35,
        title: "Free E-books & Guides",
        newTab: false,
        path: "/Resources/free-guides",
      },
      {
        id: 35,
        title: "Career At Trivium",
        newTab: false,
        path: "/Career",
      },
    ],
  },
  
  {
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
  {
    id: 2,
    title: "Developers",
    newTab: false,
    path: "/developers",
  },

];

export default menuData;
