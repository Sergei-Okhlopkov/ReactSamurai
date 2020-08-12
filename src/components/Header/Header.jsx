import React from "react";
import s from "./Header.module.css";

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.headerContent}>
            <img
               src="https://www.vhv.rs/file/max/22/222442_png-logo.png"
               alt="logo"
            />
            <div className={s.prhase}>
               <p>Орёл</p>
               <p>Всегда на высоте</p>
            </div>
         </div>
      </header>
   );
};

export default Header;
