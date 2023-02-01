import React from 'react';
import {poster} from "../../../Utilies/imgs"; 

export default function Poster() {
  return (
    <>
    <section id="post" className='py-3'>
      <div className="postImg">
        <img src={poster} alt="poster-pic" className='w-100 rounded-2'/>
      </div>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="title">
            <h1 className='fw-bolder'>The Bright <br/> Future Of <br/> Web 3.0?</h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="desc pt-2">
            <p className='fs-5'>
              We dive into the next evalution of the web that
              claims to put the power of the platforms back 
              into the hands of people. But is it really 
              fulfilling its promise?
            </p>
            <button className='btn btnMain px-5 py-2 rounded-2'>READ MORE</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
