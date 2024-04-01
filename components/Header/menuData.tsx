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
        title: "Sign-Up",
        newTab: false,
        path: "/sign-up",
      },
      {
        id: 23,
        title: "Subjects Offered",
        newTab: false,
        path: "/subjects-offered",
      },
    ],
  },
  {
    id: 2.1,
    title: "Tutor Application",
    newTab: false,
    path: "/tutor-apply",
  },
  {
    id: 3,
    title: "The TutoCo Team",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Our Tutors",
        newTab: false,
        path: "/our-tutors",
      },
      {
        id: 32,
        title: "Executive Board",
        newTab: false,
        path: "/board",
      },
      {
        id: 33,
        title: "DevOps",
        newTab: false,
        path: "/devops",
      },
    ],
  },
];

export default menuData;
