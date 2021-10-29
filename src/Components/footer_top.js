import React, { Component } from 'react';
import "../Css/bootstrap.min.css";
export default class FooterTop extends Component {
  render(){
    return(
      <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Car SHAiR</h2>
              <p>SHAiR is the peer-to-peer car sharing app that values safety and peace of mind above all else. We offer a platform with state-of-the-art verification technology to protect hosts and renters alike, so you can drive a car when you need it and make money when you don't.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-5">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Contact Us</h2>
              <ul class="list-unstyled">
                <p>Need to get in contact with us? Fill out the form below for media inquiries or partnership opportunities. Or click the Live Chat button to get in contact with a representative right away.</p>
                
                <p>Our support team is available 24/7 to help if you have any questions, comments, or concerns. Additionally, we’re always open to feedback. So if you have any suggestions, we’d love to hear them!</p>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Explore</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">FAQ</a></li>
                <li><a href="#" class="py-2 d-block">About Us</a></li>
                <li><a href="#" class="py-2 d-block">Privacy Policy</a></li>
                <li><a href="#" class="py-2 d-block">Terms of Service</a></li>
                <li><a href="#" class="py-2 d-block">Contact Us</a></li>
              </ul>
            </div>
          </div>
         
          <div class="col-md-2">
            <div class="ftco-footer-widget mb-3">
            	<h2 class="ftco-heading-2">HEADQUARTERS</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">CALIFORNIA 1805 Placentia Ave. Costa Mesa, CA 92627, USA</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+1 949-522-7572</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">contactus@carshair.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p>Create By Jackie Yu</p>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
