import React from 'react';

export default function SideNews() {
  return (
    <>
    <section id="side" className='py-3 mt-3'>
      <div className="container">
      <h2 className="heading my-3 fw-bolder">
        New
      </h2>
      <ul className='list-unstyled'>
        <li className='pb-4'>
          <h4 className='fw-bolder'>Hydrogen Vs Electric Cars</h4>
          <p className='fs-6'>
            Will Hydrogen-fueled cars ever catch up <br/> to EVs?
          </p>
        </li>
        <li className='py-4'>
          <h4 className='fw-bolder'>The Downsides of AI Artistry</h4>
          <p className='fs-6'>
            What are the possible adverse effects of <br/> on-demand 
            A image generation?
          </p>
        </li>
        <li className='pt-4'>
          <h4 className='fw-bolder'>Is VC Funding Drying Up?</h4>
          <p className='fs-6'>
            Private funding by VC firms is down 50% <br/>
            YOY. We take look at what that means.
          </p>
        </li>
      </ul>
      </div>
    </section>
    </>
  )
}
