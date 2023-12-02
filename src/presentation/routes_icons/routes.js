import { FaMoneyBill } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { LuNetwork } from "react-icons/lu";
import { TbPackages } from "react-icons/tb";
import { userRolesObj } from "../../service/features/authSlice";

export const loginRoutes = {
  [userRolesObj.admin]: "/admin/admins/login",
  [userRolesObj.superAdmin]: "/admin/login",
};

export default {
  Configuration: {
    id: 1,
    title: "Configuration",
    icon: IoIosSettings,
    links: {
      "Change-username": {
        title: "Change username",
        url: "/admin/configuration/change-username",
      },
      "Change-password": {
        title: "Change Password",
        url: "/admin/configuration/change-password",
      },
      "Change-email": {
        title: "Change email",
        url: "admin/configuration/email",
      },
      "Site-settings": {
        title: "Site settings",
        url: "/admin/configuration/settings",
      },
      "Homepage-content": {
        title: "Homepage content",
        url: "/admin/configuration/homepage-configuration",
      },
    },
  },
  "Manage-Customers": {
    id: 2,
    title: "Manage Customers",
    icon: FaPeopleGroup,
    links: {
      "Customer-list": {
        title: "Customer list",
        url: "/admin/customers",
      },
    },
  },
  "Manage-service-providers": {
    id: 4,
    title: "Manage service providers",
    icon: FaPeopleGroup,
    links: {
      "Service-Provider-List": {
        title: "Service Provider List",
        url: "/admin/service-providers",
      },
    },
  },
  "Manage-Payment": {
    id: 5,
    title: "Manage Payment",
    icon: FaMoneyBill,

    links: {
      // "Withdrawal-Request": {
      //   title: "Withdrawal Request",
      //   url: "/admin/payments/withdrawal",
      // },
      "Payment-History": {
        title: "Payment History",
        url: "/admin/payments/history",
      },
    },
  },
  // "Membership-Plan": {
  //   id: 6,
  //   title: "Membership Plan",
  //   icon: MdOutlineAttachMoney,
  //   links: {
  //     "Membership-plan-list": {
  //       title: "Membership plan list ",
  //       url: "/admin/membership-plan-list",
  //     },
  //   },
  // },
  "Manage-Service-Request": {
    id: 7,
    title: "Manage Service Request",
    icon: GiNetworkBars,
    links: {
      "Service Request List": {
        title: "Service Request List",
        url: "/admin/service-request-list",
      },
    },
  },
  "Service-Categories": {
    id: 8,
    title: "Manage Service Categories",
    icon: LuNetwork,
    links: {
      "Service Category List": {
        title: "Service Category List",
        url: "/admin/service-category-list",
      },
    },
  },
  "Manage-Service-Packages": {
    id: 9,
    title: "Manage Service Packages",
    icon: TbPackages,
    links: {
      "Service-Package-List": {
        title: "Service Package List",
        url: "/admin/services/service-package-list",
      },
    },
  },
  // "Manage-Adds-ons": {
  //   id: 10,
  //   title: "Manage Adds-ons  ",
  //   icon: MdCircle,
  //   links: {
  //     "Adds-ons List": {
  //       title: "Adds-ons List ",
  //       url: "/admin/adds-ons",
  //     },
  //   },
  // },
  // "Manage-Countries": {
  //   id: 11,
  //   title: "Manage Countries  ",
  //   icon: GiWorld,
  //   links: {
  //     "Country List": {
  //       title: "Country List",
  //       url: "/admin/countries",
  //     },
  //   },
  // },
  // "Manage-Pages": {
  //   id: 12,
  //   title: "Manage Pages",
  //   icon: FaFileAlt,
  //   links: {
  //     "Pages List": {
  //       title: "Pages List",
  //       url: "/admin/page-list",
  //     },
  //   },
  // },
};
