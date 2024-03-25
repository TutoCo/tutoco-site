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
        title: "Tutee Signup",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 23,
        title: "Subjects Offered",
        newTab: false,
        path: "/docs",
      },
      {
        id: 24,
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
    path: "/auth/signin",
  },
  {
    id: 3.1,
    title: "The TutoCo Team",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3.2,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
