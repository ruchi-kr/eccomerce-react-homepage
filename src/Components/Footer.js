import React from 'react'                              //importing react library
import './Footer.css'                                  //importing css
const Footer = () => {                                  //Footer functional component
  return (
    <>
      <footer>
        <div className="container">
          {/* images */}
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4 mt-5">
              <img className="img-fluid h-100 " src="https://i.pinimg.com/736x/82/d1/a7/82d1a7de8b4ace8d0fb3309117cec204.jpg" alt="shopping" />
            </div>
            <div className="col-12 col-lg-4 col-md-4 mt-5">
              <img className="img-fluid h-100" src="https://cdn.vectorstock.com/i/preview-1x/55/61/isometric-web-banner-online-shopping-system-vector-23815561.jpg" alt="shopping" />
            </div>
            <div className="col-12 col-lg-4 col-md-4 mt-5">
              <img className="img-fluid h-100" src="https://img.freepik.com/free-vector/supermarket-sale-background-design_23-2149355543.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais" alt="shopping" />
            </div>
          </div>
        </div>
       
        <div className="container-fluid">
          <div className="row text-center my-5 mx-3 gx-5 gy-5">
            <div className="col-12 col-md-3 col-lg-3">
              <h6 className="fw-bold">WOMEN</h6>
              <div className="text-decoration-none text-secondary">
              <h6>ALL PRODUCTS</h6>
              <h6>INDIANWEAR</h6>
              <h6>WESTERNWEAR</h6>
              <h6>SPORTSWEAR</h6>
              <h6>SLEEP &amp; LOUNGE</h6>
              </div>
              
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <h6 className="fw-bold">MEN</h6>
              <div className="text-decoration-none text-secondary">
                <h6>ALL PRODUCTS</h6>
                <h6>INDIANWEAR</h6>
                <h6>WESTERNWEAR</h6>
                <h6>SPORTSWEAR</h6>
                <h6>SLEEP &amp; LOUNGE</h6>
              </div>

            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <h6 className="fw-bold">KIDS</h6>
              <div className="text-decoration-none text-secondary">
              <h6>ALL PRODUCTS</h6>
              <h6>INDIANWEAR</h6>
              <h6>WESTERNWEAR</h6>
              <h6>SPORTSWEAR</h6>
              <h6>SLEEP &amp; LOUNGE</h6>
              </div>
            </div>

            <div className="col-12 col-md-3 col-lg-3">
              <h6 className="fw-bold">LINKS</h6>
              <div className="text-decoration-none text-secondary">
              <h6>HOME</h6>
              <h6>ACCOUNT</h6>
              <h6>CONTACT US</h6>
              <h6>CART</h6>
              </div>
              
            </div>
          </div>
          {/* promotions */}
          <div className="row bgcolor my-3 p-5 d-flex  promotion ">
            <div className="col-lg-4 col-md-12 justify-content-center col-12 my-2">
              <h5 className="fw-bold my-2">DOWNLOAD OUR APP</h5>
              <div className="d-flex gap-2">
                <a target="_blank" rel="noreferrer" aria-label="googleplay" href="https://play.google.com/store/apps?hl=en-IN"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/googlePlay.png" width="150px" alt="googleplay" /></a>
                <a target="_blank" rel="noreferrer" aria-label="appstore" href="https://www.apple.com/in/app-store/"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png" width="150px" alt="appstore" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-2">
              <h5 className="fw-bold my-2">SUBSCRIBE TO NEWSLETTER</h5>
              <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">SUBMIT</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-2">
              <h5 className="fw-bold my-2">FOR ANY HELP, YOU MAY CALL US AT</h5>
              <h6>1800-266-3333</h6>
              <h6>(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</h6>
            </div>
          </div>
        </div>
        {/* last footer section */}
        <div className="container">
          <div className="row mb-4 text-black">
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>Terms of Use</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>Privacy Policy</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>Global Privacy Policy</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>Interest-Based Ads</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>License Agreement</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <p>©2023 STYLEUP</p>
            </div>
          </div>
        </div>
        <br />
      </footer>

    </>
  )
}

export default Footer                                         //exporting Footer