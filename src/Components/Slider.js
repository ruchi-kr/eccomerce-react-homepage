import React from 'react'                                       //importing react library
import '../Home.css'                                            //importing css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  //importing fontawesome
import { faStar, faHeartCirclePlus, faArrowTrendUp, faIndianRupeeSign, faTruckFast } from '@fortawesome/free-solid-svg-icons'
const Slider = () => {                                          //Slider functional component
  return (
    <>
      {/* featured products section */}
      <div className="container-fluid mx-auto mt-5 mb-3" style={{ backgroundColor: 'rgb(213, 213, 4)' }}>
        <div className="row text-center">
          <h4 className="ps-5 my-3 mx-auto text-capitalize text-dark">-- featured products --</h4>
        </div>
      </div>
      {/* women section */}
      {/* card carousel for large screen */}
      <div className="container d-none d-md-none d-sm-none d-lg-block mx-auto position-relative">
        <div id="carouselExample1" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transparent" style={{ width: '18rem' }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/c/tr:w-500,/2c8e14bTGAJRA00003885_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Gajra Gang</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Golabar Blue Pearl Embroidery Saree GGSAR27
                          (Free Size)
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-500,/d790c91DR011690_1.jpg?rnd=20200526195200" className="card-img-top" alt="shirtdress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">Twenty Dresses by Nykaa Fashion</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Lavender Tiered Shirt Dress (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/9/tr:w-500,/19c75baLBL101KS664_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Lavanya The Label</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Pink Pre Draped Saree with Stitched Blouse
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/0/tr:w-500,/e0ccfbc60600048-P00223_1.jpg?rnd=20200526195200" className="card-img-top" alt="Satin Kimono - Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">La Vie En Rose</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Satin Kimono - Black</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/tr:w-500,/aaec706DR836RYBL_1.jpg?rnd=20200526195200" className="card-img-top" alt="a A-Line dress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">FableStreet</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Front Slit Jacket A-Line Dress-Royal Blue</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 751 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/8/tr:w-500,/480f2c4AWLIKPT0102_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1">Likha</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Black Georgette Beads Or Stones Party Wear
                          Saree &amp;
                          Unstitched Blouse LIKSAR45 (Free Size)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,225 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/0/tr:w-500,/4090ce4254665201_1.jpg?rnd=20200526195200" className="card-img-top" alt="Sleepwear Set" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Vero Moda Intimates</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Women Multicolor Sleepwear Set with 1 T-Shirt
                          &amp; 1
                          Shorts</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/a/tr:w-500,/0a9efb8IGHAIL_1.jpg?rnd=20200526195200" className="card-img-top" alt="RED DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">IT GIRL</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Red Hailey Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 781 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/tr:w-500,/53f0bbdDIVEN00002851.1.jpg?rnd=20200526195200" className="card-img-top" alt="LONG DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Divena</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Indigo Floral Printed Shoulder Strip Long
                          Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Women's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for medium screen */}
      <div className="container d-none d-md-block d-sm-none d-lg-none mx-auto position-relative">
        <div id="carouselExample2" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/c/tr:w-500,/2c8e14bTGAJRA00003885_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Gajra Gang</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Golabar Blue Pearl Embroidery Saree GGSAR27
                          (Free Size)
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-500,/d790c91DR011690_1.jpg?rnd=20200526195200" className="card-img-top" alt="shirtdress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">Twenty Dresses by Nykaa Fashion</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Lavender Tiered Shirt Dress (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 751 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/8/tr:w-500,/480f2c4AWLIKPT0102_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1">Likha</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Black Georgette Beads Or Stones Party Wear
                          Saree &amp;
                          Unstitched Blouse LIKSAR45 (Free Size)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,225 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0
                      <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/tr:w-500,/aaec706DR836RYBL_1.jpg?rnd=20200526195200" className="card-img-top" alt="a A-Line dress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">FableStreet</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Front Slit Jacket A-Line Dress-Royal Blue</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 7811 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/tr:w-500,/53f0bbdDIVEN00002851.1.jpg?rnd=20200526195200" className="card-img-top" alt="LONG DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Divena</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block text-dark card-text text-truncate">Indigo Floral Printed Shoulder Strip Long
                          Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1
                      <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/a/tr:w-500,/0a9efb8IGHAIL_1.jpg?rnd=20200526195200" className="card-img-top" alt="RED DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">IT GIRL</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Red Hailey Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 40 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Women's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for small screen */}
      <div className="container d-block d-md-none d-sm-block d-lg-none mx-auto position-relative">
        <div id="carouselExample3" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/c/tr:w-500,/2c8e14bTGAJRA00003885_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Gajra Gang</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Golabar Blue Pearl Embroidery Saree GGSAR27
                          (Free Size)
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 751 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/8/tr:w-500,/480f2c4AWLIKPT0102_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1">Likha</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Black Georgette Beads Or Stones Party Wear
                          Saree &amp;
                          Unstitched Blouse LIKSAR45 (Free Size)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,225 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 7811 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/tr:w-500,/53f0bbdDIVEN00002851.1.jpg?rnd=20200526195200" className="card-img-top" alt="LONG DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1">Divena</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Indigo Floral Printed Shoulder Strip Long
                          Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 4 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-500,/d790c91DR011690_1.jpg?rnd=20200526195200" className="card-img-top" alt="shirtdress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">Twenty Dresses by Nykaa Fashion</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Lavender Tiered Shirt Dress (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 5 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0
                      <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/tr:w-500,/aaec706DR836RYBL_1.jpg?rnd=20200526195200" className="card-img-top" alt="a A-Line dress" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">FableStreet</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Front Slit Jacket A-Line Dress-Royal Blue</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 6 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1
                      <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/a/tr:w-500,/0a9efb8IGHAIL_1.jpg?rnd=20200526195200" className="card-img-top" alt="RED DRESS" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">IT GIRL</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Red Hailey Dress</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute womencategory" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Women's Category -</h4>
          </div>
        </div>
      </div>
      {/* men section */}
      {/* card carousel for large screen */}
      <div className="container d-none d-md-none d-sm-none d-lg-block mx-auto position-relative">
        <div id="carouselExample4" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/5/tr:w-960,/c540a3d904067_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Rare Rabbit</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Cedar Green Casual Shirts
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/b/tr:w-960,/0b075d5KISAH-KA-0005-5438-T303_1.jpg?rnd=20200526195200" className="card-img-top" alt="Mens Black Jacket Kurta Trouser (Set of 3)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">KISAH</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Black Jacket Kurta Trouser (Set of 3)
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/f/tr:w-960,/2fa7c75SDKT1093_1.jpg?rnd=20200526195200" className="card-img-top" alt="White Chikankari Embroidered Kurta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">See Designs</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Men White Chikankari Embroidered Kurta
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/tr:w-960,/e641123SUM22SHRT-PNCHK58-M-PLN-LBUBU_1.jpg?rnd=20200526195200" className="card-img-top" alt="Satin Kimono - Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Campus Sutra</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Men Checkered Stylish Casual Shirts</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/c/tr:w-960,/9c67af8KL_THECB00017487_1.jpg?rnd=20200526195200" className="card-img-top" alt=" Oversized T-Shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">The Souled Store</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Harry Potter Nice Navy Blue Color Oversized
                          T-Shirt for Men</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 751 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/tr:w-960,/e6d8b1eABI-MN60_0.jpg?rnd=20200526195200" className="card-img-top" alt="Anarkali Kurta Metallic Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1">Abhishti</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Banarasi Paneled Anarkali Kurta Metallic
                          Black</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,225 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/e/tr:w-960,/4e17dc2MV40-0101-BLACK_4.jpg?rnd=20200526195200" className="card-img-top" alt="Convertible Hoodie Jacket" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Jockey</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Microfiber Water Resistant Convertible
                          Hoodie Jacket - Black</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/5/tr:w-960,/a57691c58671651_first.jpg?rnd=20200526195200" className="card-img-top" alt=" Men's Black Sweat Pants" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Puma</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Essentials Logo Regular Fit Knitted Men's
                          Black Sweat Pants</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,319 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,799 </span><span className="text-success mx-1">(
                        53% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 781 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/a/tr:w-960,/1aeb306H54456_1.jpg?rnd=20200526195200" className="card-img-top" alt="Casual Track Top" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Reebok</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Classics Cl F Fr Tracktop Navy Blue Casual
                          Track Top</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />3,300 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />5,999 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Men's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for medium screen */}
      <div className="container d-none d-md-block d-sm-none d-lg-none mx-auto position-relative">
        <div id="carouselExample5" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/5/tr:w-960,/c540a3d904067_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Rare Rabbit</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Cedar Green Casual Shirts
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/b/tr:w-960,/0b075d5KISAH-KA-0005-5438-T303_1.jpg?rnd=20200526195200" className="card-img-top" alt="Mens Black Jacket Kurta Trouser (Set of 3)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">KISAH</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Black Jacket Kurta Trouser (Set of 3)
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/tr:w-960,/e641123SUM22SHRT-PNCHK58-M-PLN-LBUBU_1.jpg?rnd=20200526195200" className="card-img-top" alt="Satin Kimono - Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Campus Sutra</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Men Checkered Stylish Casual Shirts</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/c/tr:w-960,/9c67af8KL_THECB00017487_1.jpg?rnd=20200526195200" className="card-img-top" alt=" Oversized T-Shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">The Souled Store</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Harry Potter Nice Navy Blue Color Oversized
                          T-Shirt for Men</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/e/tr:w-960,/4e17dc2MV40-0101-BLACK_4.jpg?rnd=20200526195200" className="card-img-top" alt="Convertible Hoodie Jacket" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Jockey</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Microfiber Water Resistant Convertible
                          Hoodie Jacket - Black</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/5/tr:w-960,/a57691c58671651_first.jpg?rnd=20200526195200" className="card-img-top" alt=" Men's Black Sweat Pants" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Puma</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Essentials Logo Regular Fit Knitted Men's
                          Black Sweat Pants</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,319 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,799 </span><span className="text-success mx-1">(
                        53% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 40 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Men's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for small screen */}
      <div className="container d-block d-md-none d-sm-block d-lg-none mx-auto position-relative">
        <div id="carouselExample6" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/5/tr:w-960,/c540a3d904067_1.jpg?rnd=20200526195200" className="card-img-top" alt="saree" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Rare Rabbit</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Cedar Green Casual Shirts
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/tr:w-960,/e641123SUM22SHRT-PNCHK58-M-PLN-LBUBU_1.jpg?rnd=20200526195200" className="card-img-top" alt="Satin Kimono - Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Campus Sutra</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Men Checkered Stylish Casual Shirts</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/e/tr:w-960,/4e17dc2MV40-0101-BLACK_4.jpg?rnd=20200526195200" className="card-img-top" alt="Convertible Hoodie Jacket" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Jockey</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Microfiber Water Resistant Convertible
                          Hoodie Jacket - Black</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 4 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/b/tr:w-960,/0b075d5KISAH-KA-0005-5438-T303_1.jpg?rnd=20200526195200" className="card-img-top" alt="Mens Black Jacket Kurta Trouser (Set of 3)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">KISAH</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Mens Black Jacket Kurta Trouser (Set of 3)
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 5 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/c/tr:w-960,/9c67af8KL_THECB00017487_1.jpg?rnd=20200526195200" className="card-img-top" alt=" Oversized T-Shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">The Souled Store</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Harry Potter Nice Navy Blue Color Oversized
                          T-Shirt for Men</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 6 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 bg-dark bg-opacity-10">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/5/tr:w-960,/a57691c58671651_first.jpg?rnd=20200526195200" className="card-img-top" alt=" Men's Black Sweat Pants" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Puma</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Essentials Logo Regular Fit Knitted Men's
                          Black Sweat Pants</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,319 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,799 </span><span className="text-success mx-1">(
                        53% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample6" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample6" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute womencategory" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Men's Category -</h4>
          </div>
        </div>
      </div>
      {/* kids section */}
      {/* card carousel for large screen */}
      <div className="container d-none d-md-none d-sm-none d-lg-block mx-auto position-relative">
        <div id="carouselExample7" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/2/tr:w-480,/525c7d5Cute402-Multi_1.jpg?rnd=20200526195200" className="card-img-top" alt="Full Sleeve Night Suit (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Clt.s</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Multi Striped Full Sleeve Night Suit (Set of
                          2)
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/tr:w-480,/919daffPE-86-1.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta, Brocade Pant with Organza Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Navy Blue Velvet Kurta, Brocade Pant with
                          Organza Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/a/tr:w-480,/9af0a19CUPTOW00000722_1.jpg?rnd=20200526195200" className="card-img-top" alt="Printed Dhoti Jumpsuit Black" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">Uptownie Lite</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Girls Crepe Printed Dhoti Jumpsuit Black
                        </p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/n/k/tr:w-480,/nk20n-2-1_35728b06.jpg?rnd=20200526195200" className="card-img-top" alt="Shirt With Pant (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Fairies Forever</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Fairiesforever Green Printed Shirt With Pant
                          (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-17-2.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta With Palazzo & Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Green Leaf Printed Kurta With Palazzo &amp;
                          Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 751 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/f/tr:w-480,/5fb1933AN4852_1.jpg?rnd=20200526195200" className="card-img-top" alt="Heart Dress Green" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1">ANTHRILO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Heart Dress Green</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,225 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/tr:w-480,/2649933AN4190_1.jpg?rnd=20200526195200" className="card-img-top" alt="Zebra T-shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">ANTHRILO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Zebra T-shirt - Lime Green</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-14-1.jpg?rnd=20200526195200" className="card-img-top" alt="Maxi Dress With Attached Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Orange Stripes Maxi Dress With Attached
                          Dupatta</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card3 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.7 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 781 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/0/tr:w-480,/7014f6dLILDR00002348_1.jpg?rnd=20200526195200" className="card-img-top" alt="Boys Fusion Shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Lil Drama</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Boys Fusion Shirt</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        45% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample7" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample7" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Kid's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for medium screen */}
      <div className="container d-none d-md-block d-sm-none d-lg-none mx-auto position-relative">
        <div id="carouselExample8" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/2/tr:w-480,/525c7d5Cute402-Multi_1.jpg?rnd=20200526195200" className="card-img-top" alt="Full Sleeve Night Suit (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Clt.s</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Multi Striped Full Sleeve Night Suit (Set of
                          2)
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/tr:w-480,/919daffPE-86-1.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta, Brocade Pant with Organza Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Navy Blue Velvet Kurta, Brocade Pant with
                          Organza Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/n/k/tr:w-480,/nk20n-2-1_35728b06.jpg?rnd=20200526195200" className="card-img-top" alt="Shirt With Pant (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Fairies Forever</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Fairiesforever Green Printed Shirt With Pant
                          (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-17-2.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta With Palazzo & Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Green Leaf Printed Kurta With Palazzo &amp;
                          Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-6">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/tr:w-480,/2649933AN4190_1.jpg?rnd=20200526195200" className="card-img-top" alt="Zebra T-shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">ANTHRILO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Zebra T-shirt - Lime Green</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {/* card2 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-14-1.jpg?rnd=20200526195200" className="card-img-top" alt="Maxi Dress With Attached Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Orange Stripes Maxi Dress With Attached
                          Dupatta</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample8" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample8" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 40 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Kid's Category -</h4>
          </div>
        </div>
      </div>
      {/* card carousel for small screen */}
      <div className="container d-block d-md-none d-sm-block d-lg-none mx-auto position-relative">
        <div id="carouselExample9" className="carousel slide">
          <div className="carousel-inner">
            {/* carousel item 1 */}
            <div className="carousel-item active">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/2/tr:w-480,/525c7d5Cute402-Multi_1.jpg?rnd=20200526195200" className="card-img-top" alt="Full Sleeve Night Suit (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title mt-1 text-dark">Clt.s</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-truncate text-dark">Multi Striped Full Sleeve Night Suit (Set of
                          2)
                        </p>
                      </div>
                      <p className="card-text mx-1 text-dark"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 2 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.5 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 451 </p>
                    <p className="position-absolute fa-xs my-5 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="fontcolor" /> Trending
                    </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/tr:w-480,/919daffPE-86-1.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta, Brocade Pant with Organza Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#BEST
                        SELLER</small></span>
                      <h5 className="card-title text-dark mt-1 text-truncate">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Navy Blue Velvet Kurta, Brocade Pant with
                          Organza Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        40% )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 3 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 301 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/n/k/tr:w-480,/nk20n-2-1_35728b06.jpg?rnd=20200526195200" className="card-img-top" alt="Shirt With Pant (Set of 2)" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">Fairies Forever</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Fairiesforever Green Printed Shirt With Pant
                          (Set of 2)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,799 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,299 </span><span className="text-success mx-1">(
                        25% OFF )</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 4 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.0 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 251 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-17-2.jpg?rnd=20200526195200" className="card-img-top" alt="Kurta With Palazzo & Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#ONLY
                        ON STYLEUP</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Green Leaf Printed Kurta With Palazzo &amp;
                          Dupatta (Set of 3)</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />1,899 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />2,499 </span><span className="text-success mx-1">(
                        35% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 5 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 331 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/tr:w-480,/2649933AN4190_1.jpg?rnd=20200526195200" className="card-img-top" alt="Zebra T-shirt" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small>#STYLIST
                        PICK</small></span>
                      <h5 className="card-title text-dark mt-1">ANTHRILO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Zebra T-shirt - Lime Green</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,999 </span><span className="text-success mx-1">(
                        41% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel item 6 */}
            <div className="carousel-item">
              {/* insertion of card */}
              <div className="row mx-5 my-5">
                <div className="col-12">
                  {/* card1 */}
                  <div className="card border border-0 bg-transarent" style={{ width: '18rem' }}><FontAwesomeIcon icon={faHeartCirclePlus} className="toshowonhover position-absolute fa-xl mx-4 mt-4 z-3 end-0 top-0 invisible" style={{ color: '#ffffff' }} />
                    <p className="position-absolute fa-xs my-3 mx-4 z-3 start-0 top-0 text-light border border-1 border-white p-1 ">
                      4.1 <FontAwesomeIcon icon={faStar} className=" fontcolor" /> | 391 </p>
                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/e/tr:w-480,/pe-14-1.jpg?rnd=20200526195200" className="card-img-top" alt="Maxi Dress With Attached Dupatta" />
                    <div className="card-body invisible">
                      <span className="card-title text-dark border border-info-subtle bg-info bg-opacity-10 fs-6 px-1"><small><FontAwesomeIcon icon={faTruckFast} size="xs" /> EXPRESS SHIPPING</small></span>
                      <h5 className="card-title text-dark mt-1">PICCOLO</h5>
                      {/* truncated text */}
                      <div className="lh-base">
                        <p className="d-block card-text text-dark text-truncate">Orange Stripes Maxi Dress With Attached
                          Dupatta</p>
                      </div>
                      <p className="card-text text-dark mx-1"><FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />2,925 <span className="text-decoration-line-through text-secondary mx-1"><i className="fa-solid fa-indian-rupee-sign fa-xs iconcolor" />3,499 </span><span className="text-success mx-1">(
                        15% OFF)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample9" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample9" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid mx-auto mb-5 position-absolute womencategory" style={{ backgroundColor: 'rgb(243, 170, 74)', bottom: 30 }}>
          <div className="row border border-1">
            <h4 className="ps-5 my-1 mx-auto text-dark">Kid's Category -</h4>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slider                          //exporting Slider
