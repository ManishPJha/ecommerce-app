import React from "react";
import _Navbar from "../Navbar";
import _NavHeader from "./NavHeader";
import _AuthFooter from "./AuthFooter";
import _Footer from "../Footer";

function Layout({ children }) {
  const _isAuth = false;

  return (
    <div className="_layout">
      {_isAuth === true ? (
        <>
          <_NavHeader />
          <div className="container col-10" style={{ marginTop: "90px" }}>
            <main>{children}</main>
          </div>
          <_AuthFooter />
        </>
      ) : (
        <>
          <_Navbar />
          <div className="container col-10" style={{ marginTop: "90px" }}>
            <main>{children}</main>
          </div>
          <_Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
