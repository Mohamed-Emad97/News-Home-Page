import React from 'react';
import {card1, card2, card3} from "../../../Utilies/imgs";

export default function Cards() {
  return (
    <>
    <section id="cards" className='py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="postCard center justify-content-between">
              <div className="img">
                <img src={card3} alt="card-pic" className="w-100"/>
              </div>
              <div className="content p-2 px-3">
                <p className="num h2 fw-bolder">01</p>
                <h5 className='fw-bolder'>Reviving Retro PCs</h5>
                <p className='fs-6 txt'>
                  What happens when old PCs
                  are given modern upgrades?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="postCard center justify-content-between">
              <div className="img">
                <img src={card2} alt="card-pic" className="w-100"/>
              </div>
              <div className="content p-2 px-3">
                <p className="num h2 fw-bolder">02</p>
                <h5 className='fw-bolder'>Reviving Retro PCs</h5>
                <p className='fs-6 txt'>
                  What happens when old PCs
                  are given modern upgrades?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="postCard center justify-content-between">
              <div className="img">
                <img src={card1} alt="card-pic" className="w-100"/>
              </div>
              <div className="content p-2 px-3">
                <p className="num h2 fw-bolder">03</p>
                <h5 className='fw-bolder'>Reviving Retro PCs</h5>
                <p className='fs-6 txt'>
                  What happens when old PCs
                  are given modern upgrades?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
