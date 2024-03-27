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
        title: "Sign-up",
        newTab: false,
        path: "/sign-up",
      },
      {
        id: 23,
        title: "Subjects Offered",
        newTab: false,
        path: "/subjects-offered",
      },
      {
        id: 24,
        title: "Our Tutors",
        newTab: false,
        path: "/our-team",
      },
    ],
  },
  {
    id: 2.3,
    title: "Tutor Application",
    newTab: false,
    path: "/auth/tutor-apply",
  },
  {
    id: 3.1,
    title: "The TutoCo Team",
    newTab: false,
    path: "/our-team",
  },
  {
    id: 3.2,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
