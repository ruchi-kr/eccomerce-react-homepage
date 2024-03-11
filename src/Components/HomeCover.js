import React from 'react'                                     //importing react library
import image from "../image/bannerimage.jpeg"                  //importing image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'       //importing fontawesome
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
const HomeCover = () => {                                      //HomeCover functional component
  
  return (
    <>
    {/* banner image */}
    <img className='img-fluid d-block w-100' src={image} alt="banner"/>
    {/* circular image carousel */}
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row my-5">
                <img src="https://images-static.nykaa.com/uploads/aa0b3711-6b2b-4322-9f8f-012712852679.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopwomen" />
                <img src="https://images-static.nykaa.com/uploads/80ff8ed1-8360-425f-a267-e9d3bc27c16e.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopwomen" />
                <img src="https://images-static.nykaa.com/uploads/ac15966a-16b8-4787-b331-b6dde1c67555.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopwomen" />
                <img src="https://images-static.nykaa.com/uploads/6a354456-6632-4ed7-8f7d-ee92a8baaa76.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopwomen" />
                <img src="https://images-static.nykaa.com/uploads/48e80a2a-5942-4b5c-83fe-f7b9e4dfb0d2.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopwomen" />
                <img src="https://images-static.nykaa.com/uploads/a8899e8e-794c-4083-9c31-062284d2d739.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopwomen" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row my-5">
                <img src="https://images-static.nykaa.com/uploads/d42a81fa-c3eb-4401-84e7-f30688e0dbd4.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
                <img src="https://images-static.nykaa.com/uploads/e839af55-3d56-49bc-aad3-db2851c86b13.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
                <img src="https://images-static.nykaa.com/uploads/a4c9ab11-a981-4c8d-abaa-a7599cc27689.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
                <img src="https://images-static.nykaa.com/uploads/97fcdf62-27f8-47af-8e0c-019000f51b91.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
                <img src="https://images-static.nykaa.com/uploads/6db2ba40-5ec9-44d9-915a-f742f8b3aa94.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
                <img src="https://images-static.nykaa.com/uploads/9c398c0c-aae7-429e-a627-b4f5edccb2d0.jpg?tr=w-133.33333333333334,cm-pad_resize" className="col-2" alt="shopmen" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row my-5">
                <img src="https://images-static.nykaa.com/uploads/aa0b3711-6b2b-4322-9f8f-012712852679.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopkids" />
                <img src="https://images-static.nykaa.com/uploads/6509d443-a8c8-4c27-be66-ee09895c9961.jpg?tr=w-300,cm-pad_resize" className="col-2" alt="shopkids" />
                <img src="https://images-static.nykaa.com/uploads/6cd03346-8b28-4563-97aa-833c86294965.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopkids" />
                <img src="https://images-static.nykaa.com/uploads/46aaee3a-ca6a-4537-b209-eb644476bcd5.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopkids" />
                <img src="https://images-static.nykaa.com/uploads/c9725ae1-9e6c-446e-bf6b-052f486a85e8.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopkids" />
                <img src="https://images-static.nykaa.com/uploads/2533f2fc-b857-40b4-ac38-c719ea410b00.jpg?tr=w-266.6666666666667,cm-pad_resize" className="col-2" alt="shopkids" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span aria-hidden="true"><FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" className=" fontcolor" /></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span aria-hidden="true"><FontAwesomeIcon icon={faCircleChevronRight} size="2xl" className="fontcolor" /></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default HomeCover              //exporting HomeCover