export const NavLinks = [
  {
    id: 1,
    Name: "Home",
    route: "",
  },
  {
    id: 2,
    Name: "Services",
    route: "/services",
    children: [
      {
        id: 23,
        Name: "Fit out & Renovations",
        route: "/fit-out-services",
      },
      {
        id: 25,
        Name: "RPH Investment Support",
        route: "/investment-support",
      },

      {
        id: 24,
        Name: "Maintenance",
        route: "/maintenance-company",
      },
    ],
  },
  {
    id: 3,
    Name: "About",
    route: "/about",
  },
  {
    id: 4,
    Name: "Portfolio",
    route: "/portfolio",
  },
  { id: 5, Name: "Blog", route: "/blogs" },
  {
    id: 6,
    Name: "Contact",
    route: "/contact",
  },
  {
    id: 7,
    Name: "FAQ",
    route: "/faq",
  },
];
