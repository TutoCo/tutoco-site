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
    title: "Tutees",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Courses/Subjects Offered",
        newTab: false,
        path: "/#features",
      },
      {
        id: 22,
        title: "Tutee Signup",
        newTab: false,
        path: "/blog",
      },
      {
        id: 23,
        title: "Our Tutors",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  {
    id: 2.3,
    title: "Tutor Application",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "TutoCo Team",
        newTab: false,
        path: "/blog",
      },
      {
        id: 35,
        title: "Our Partners",
        newTab: false,
        path: "/cta",
      },
      {
        id: 36,
        title: "Blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 37,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
    ],
  },
];

export default menuData;
