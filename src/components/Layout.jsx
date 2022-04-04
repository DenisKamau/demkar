import Footer from "./Footer";
import Navbar from "./Navbar";
import { createRef, useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [element, setElement] = useState(null);
  const scrollDiv = createRef();

  useEffect(() => {
    setElement(scrollDiv.current);
  }, [scrollDiv]);

  const scrollSmoothHandler = () => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scroll={scrollSmoothHandler} />
      <main style={{ marginTop: "90px" }}>{children}</main>
      <div ref={scrollDiv}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
