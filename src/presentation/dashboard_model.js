import routes from "./routes";

export default [
  {
    title: "Customers",
    link: "/customers-list",
    icon: routes["Manage-Customers"]["icon"],
    colors: {
      link: "bg-orange-900",
      icon: "text-orange-900",
      bg: "bg-primary",
    },
  },
  {
    title: "Service Providers",
    link: "/service-providers-list",
    icon: routes["Manage-service-providers"]["icon"],
    colors: {
      link: "bg-green-900",
      icon: "text-green-900",
      bg: "bg-green-700",
    },
  },
  {
    title: "Payments",
    link: "/payments",
    icon: routes["Manage-Payment"]["icon"],
    colors: {
      link: "bg-red-900",
      icon: "text-red-900",
      bg: "bg-red-700",
    },
  },
  {
    title: "Service Order",
    link: "/service-orders",
    icon: routes["Manage-Service-Request"]["icon"],
    colors: {
      link: "bg-blue-900",
      icon: "text-blue-900",
      bg: "bg-blue-700",
    },
  },
  {
    title: "Categories",
    link: "/category-list",
    icon: routes["Service-Categories"]["icon"],
    colors: {
      link: "bg-orange-900",
      icon: "text-orange-900",
      bg: "bg-primary",
    },
  },
  {
    title: "Service Packages",
    link: "/service-packages",
    icon: routes["Manage-Service-Packages"]["icon"],
    colors: {
      link: "bg-green-900",
      icon: "text-green-900",
      bg: "bg-green-700",
    },
  },
  {
    title: "Addons",
    link: "/addons",
    icon: routes["Manage-Adds-ons"]["icon"],
    colors: {
      link: "bg-red-900",
      icon: "text-red-900",
      bg: "bg-red-700",
    },
  },
  {
    title: "Countries",
    link: "/countries",
    icon: routes["Manage-Countries"]["icon"],
    colors: {
      link: "bg-blue-900",
      icon: "text-blue-900",
      bg: "bg-blue-700",
    },
  },
];

