import { Twitter, Github, Facebook, Linkedin } from "lucide-react";

export const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/recipes", label: "Recipes" },
    { to: "/favorites", label: "Favorites" },
    { to: "/community", label: "Community" },
  ];

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://x.com/unku_chu",
    icon: Twitter,
  },
  {
    name: "Github",
    url: "https://github.com/Chu29",
    icon: Github,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/abuemkezechu/",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chu-abuemkeze",
    icon: Linkedin,
  },
];

export const API_ENDPOINT = "https://dummyjson.com/recipes";
