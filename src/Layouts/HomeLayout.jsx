import React from "react";
import { Outlet } from "react-router";
import Header from "../Componets/Header";
import LatestNews from "../Componets/LatestNews";
import NavBar from "../Componets/NavBar";
import LeftAside from "../Componets/Homelayout/LeftAside";
import RightAside from "../Componets/Homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>

        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto mb-5">
          <NavBar></NavBar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-4">
  <aside className="col-span-3">
    <LeftAside />
  </aside>

  <section className="col-span-6">
    <Outlet />  
  </section>

  <aside className="col-span-3">
    <RightAside />
  </aside>
</main>

    </div>
  );
};

export default HomeLayout;
