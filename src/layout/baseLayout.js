import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseLayout = () => (
  <section className="hero is-fullheight">
    <div className="hero-head">
      <Header />
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="l-page-container">
          <Outlet />
        </div>
      </div>
    </div>
    <Footer />
  </section>
);

export default BaseLayout;