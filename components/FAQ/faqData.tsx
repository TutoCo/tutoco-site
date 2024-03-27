import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How do I sign up for a tutoring session or group lesson?",
    ans: "Tutees can sign-up for a tutoring session through the form on our <a href='/sign-up'><b>sign up page here</b></a> and on our Instagram @tutoco_. We require sessions to be scheduled 48 hours in advance.",
  },
  {
    id: 2,
    quest: "What if I have to cancel or reschedule my tutoring session? Will I be refunded?",
    ans: "If the tutee needs to cancel or reschedule their tutoring session, they will be refunded as long as the request is made 24 hours in advance. If the cancellation or rescheduling request is made less than 24 hours in advance, we will charge an $8 fee.",
  },
  {
    id: 3,
    quest: "Where can I find more information for tutees?",
    ans: "<a href='https://drive.google.com/drive/folders/17qehE9sRY4_No24Tjj2wKffcFX4Mf1Lq?usp=sharing'><b>This Google Drive folder</b></a> contains more information for tutees.",
  },
  {
    id: 4,
    quest: "What sets your tutors apart from other tutors?",
    ans: "As high school students, are tutors are equipped with the firsthand experience and knowledge necessary to support and aid tutees in mastering difficult concepts and subjects. As our tutors are students themselves, they are able to establish meaningful connections with tutees and cultivate an interactive, healthy and motivational learning environment conducive to academic success and exploration.",
  },
  {
    id: 5,
    quest: "Are tutoring sessions in-person?",
    ans: "Our tutoring sessions are virtual, through either Google Meet or Zoom. We plan to offer in-person tutoring in the near future.",
  },
];

export default faqData;
