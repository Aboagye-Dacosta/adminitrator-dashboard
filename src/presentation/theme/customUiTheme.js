export const uiTheme =  {
  list: {
    defaultProps: {
      ripple: true,
      className: "",
    },
    styles: {
      base: {
        list: {
          display: "flex",
          flexDirection: "flex-col",
          gap: "gap-1",
          minWidth: "min-w-0",
          p: "p-2",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-normal",
          color: "text-blue-gray-700",
        },
        item: {
          selected: {
            bg: "bg-orange-700",
            color: "text-blue-gray-700",
          },
          
        },
       
      },
    },
  },
};