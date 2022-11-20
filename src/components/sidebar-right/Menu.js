import React from "react";
import MenuItems from "./MenuItems";

const menuItems = [
  [
    {
      position: "Headmaster",
      menuFields: [
        ["سال تحصیلی", <i className="bx bxs-graduation"></i>],
        ["مدیریت معلم", <i className="bx bxs-user-badge"></i>],
        ["مدیریت دانش آموز", <i className="bx bxs-user-detail"></i>],
        ["مدیریت کلاس", <i className="bx bx-chalkboard"></i>],
        ["مدیریت درس ها", <i className="bx bx-book-open"></i>],
        ["برنامه ی امتحانی", <i className="bx bx-book"></i>],
        ["مدیریت کارنامه ها", <i className="bx bxs-graduation"></i>],
        ["گزارش کلی", <i className="bx bx-bar-chart-alt-2"></i>],
      ],
    },
  ],
  [
    {
      position: "Teacher",
      menuFields: [
        ["مدیریت دانش آموز", <i className="bx bxs-user-detail"></i>],
        ["نمرات", <i className="bx bx-line-chart"></i>],
        ["برنامه ی امتحانی", <i className="bx bx-book"></i>],
        ["مدیریت کارنامه ها", <i className="bx bxs-graduation"></i>],
        ["گزارش کلی", <i className="bx bx-bar-chart-alt-2"></i>],
      ],
    },
  ],
];
const Menu = (props) => {
  return (
    <>
      <MenuItems menuTexts={menuItems[0]} />;
      {/* menuItems[0] shows the headmaster's menu and menuItems[1] shows the teacher's menu*/}
    </>
  );
};

export default Menu;
