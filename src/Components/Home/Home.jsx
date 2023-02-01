import React from 'react';
import {Poster, SideNews} from "../index";
import {Cards} from "../index";
export default function Home() {
  return (
    <>
    <section id="home" className="vh-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <Poster/>
          </div>
          <div className="col-lg-4 col-md-6">
            <SideNews/>
          </div>
        </div>
      </div>
      <Cards/>
    </section>
    </>
  )
}
