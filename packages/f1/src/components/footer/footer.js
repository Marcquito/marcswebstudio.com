import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { FaPhp } from "@react-icons/all-files/fa/FaPhp";
import { FaJs } from "@react-icons/all-files/fa/FaJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaGit } from "@react-icons/all-files/fa/FaGit";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";
import { FaSlack } from "@react-icons/all-files/fa/FaSlack";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaHandPointRight } from "@react-icons/all-files/fa/FaHandPointRight";

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <FooterTop>
        <div className="footertop">
          <div className="footertop-container">
            <div className="row">
              <div className="connect-title col-lg-6 col-sm-12">
                <h4>Stuff I'm Great At!  <i>< FaHandPointRight /></i></h4>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="good-at-stuff">
                  <i>< FaHtml5 /></i>
                  <i>< FaCss3 /></i>
                  <i>< FaPhp /></i>
                  <i>< FaJs /></i>
                  <i>< FaReact /></i>
                  <i>< FaGit /></i>
                  <i>< FaWordpress /></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterTop>
      <Container>
        <div className="row">
          <div className="col-12 col-lg-6 footer-widget widget-one">
            <h4 className="widget-title">About Me</h4>
            <img className="about-me-image" src="https://admin.marcswebstudio.com/wp-content/uploads/2021/07/marcandenzo.jpg"></img>
            <p>
              <strong>My name is Marc R. Miller and I'm a front-end web developer based out of Atlanta, GA.</strong><br />
              <br />
              By day I work as a WordPress developer and project manager for an Atlanta based development agency. By night I work and play as a mostly-everything-if-I-can-figure-it-out developer, 
              designer, crafter of UI/UX design, marketer, semi-okay phtoto editor, and dabbling in new and exciting technologies.<br/>
              Non-work related things I enjoy are reading books, hiking, watersports, traveling as much as possible, enjoying the view, drinking tons of coffee, gaming late at night, 
              and spending time with my sidekick Enzo.<br/>
              Interested in more about me? <a href="/about/">Feel free to read on...</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-widget widget-two">
            <h4 className="widget-title">Quick Links</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/about/">About Me</Link></li>
              <li><Link className="widget-list-link" link="/portfolio/">My Portfolio</Link></li>
              <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
              <li><Link className="widget-list-link" link="https://projects.marcswebstudio.com/client" target="_blank">Client Portal</Link></li>
              <li><Link className="widget-list-link" link="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-widget widget-three">
            <h4 className="widget-title">Let's Connect!</h4>
              <div className="lets-connect">
                <a className="tw-ic" href="https://twitter.com/MarcReymon" target="_blank">
                  <i>< FaTwitter /></i>
                </a>
                <a className="ins-ic" href="https://www.instagram.com/marcrmiller/" target="_blank">
                    <i>< FaInstagram /></i>
                </a>
                <a className="li-ic" href="https://www.linkedin.com/in/marcreymon/" target="_blank">
                  <i>< FaLinkedinIn /></i>
                </a>
                <a className="li-ic" href="https://join.slack.com/t/marcswebstudio/shared_invite/enQtNzkyMzgzOTM2NzM4LWJmODFkMzVkMmU3ZGViNTczNjFlYmUzMDFlN2FjMTAxMWQzZjRjMWZlMmYwYjA3OWE0NzRlYWJlN2ZlNGE0Y2U" target="_blank">
                  <i>< FaSlack /></i>
                </a>
              </div>
            { /* <div className="gf-validation">{normalizeGravityFormsResponse.response}</div> */}
            { /*
            <form id="form" class="topBefore" action="https://admin.marcswebstudio.com/wp-json/gf/v2/forms/1/submissions" method="post">
              <input id="name" type="text" name="input_2" placeholder="What's your name?" required></input>
              <input id="email" type="text" name="input_3" placeholder="What's your email?" required></input>
              <textarea id="message" type="text" name="input_4" placeholder="Type your message here!" required></textarea>
              <input id="submit" type="submit" value="LET'S GO!"></input>
            </form>
            */ }
          </div>
        </div>
        
      </Container>
      <FooterBottom>
        <div className="footerbottom">
          <p>© 2021 Marc R. Miller, <em>Marc's Web Studio</em> | Site built with <a target="_blank" href="https://frontity.org">Frontity</a>.</p>        </div>
      </FooterBottom>
    </>
  );
};

//This helped with the form: https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--mwsblue);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:3rem;
      }
    }
  }
  .about-me-image {
    float: left;
    height: auto;
    width: 200px;
    border-radius: 200px;
    border: 0 solid #657eea;
    margin: 0 20px 0 0;
    box-shadow: 5px 5px 75px -10px #000;
  }

  .lets-connect a i{
    font-size: 1.3em;
    margin: 0 5px;
    background-color: #fff;
    padding: .3em .40em;
    border-radius: 100px;
    box-shadow: 4px 4px 20px -5px #000;
  }



  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #aca49c;
    font-size: 0.875em;
  }
  
  input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
    color: #bbb5af;
  }
  
  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #aca49c;
    font-size: 0.875em;
  }
  
  input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {
    color: #bbb5af;
  }
  
  input::placeholder, textarea::placeholder {
    color: #aca49c;
    font-size: 0.875em;
  }
  
  input:focus::placeholder, textarea::focus:placeholder {
    color: #bbb5af;
  }
  
  input::-ms-placeholder, textarea::-ms-placeholder {
    color: #aca49c;
    font-size: 0.875em;
  }
  
  input:focus::-ms-placeholder, textarea:focus::-ms-placeholder {
    color: #bbb5af;
  }
  
  /* on hover placeholder */
  
  input:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {
    color: #e2dedb;
    font-size: 0.875em;
  }
  
  input:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {
    color: #cbc6c1;
  }
  
  input:hover::-moz-placeholder, textarea:hover::-moz-placeholder {
    color: #e2dedb;
    font-size: 0.875em;
  }
  
  input:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {
    color: #cbc6c1;
  }
  
  input:hover::placeholder, textarea:hover::placeholder {
    color: #e2dedb;
    font-size: 0.875em;
  }
  
  input:hover:focus::placeholder, textarea:hover:focus::placeholder {
    color: #cbc6c1;
  }
  
  input:hover::placeholder, textarea:hover::placeholder {
    color: #e2dedb;
    font-size: 0.875em;
  }
  
  input:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {
    color: #cbc6c1;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    background: #e2dedb;
    color: #667eea;
  }
  
  header {
    position: relative;
    margin: 100px 0 25px 0;
    font-size: 2.3em;
    text-align: center;
    letter-spacing: 7px;
  }
  
  #form {
    position: relative;
    width: 100%;
    box-shadow: 0 0 15px -5px #000;
  }

  #form input:first-of-type{
    border-radius: 10px 10px 0 0;
  }
  
  input {
    font-family: 'Lato', sans-serif;
    font-size: 0.875em;
    width: 100%;
    height: 50px;
    padding: 0px 15px 0px 15px;
    
    background: transparent;
    outline: none;
    color: #667eea;
    
    border: solid 1px #667eea;
    border-bottom: none;
    
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }
  
  input:hover {
    background: #667eea;
    color: #e2dedb;
  }
  
  textarea {
    width: 100%;
    height: 110px;
    max-height: 110px;
    padding: 15px;
    
    background: transparent;
    outline: none;
    
    color: #667eea;
    font-family: 'Lato', sans-serif;
    font-size: 0.875em;
    
    border: solid 1px #667eea;
    
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }
  
  textarea:hover {
    background: #667eea;
    color: #e2dedb;
  }
  
  #submit {
    width: 100%;
    
    padding: 0;
    margin: -6px 0px 0px 0px;
    
    font-family: 'Lato', sans-serif;
    font-size: 0.875em;
    color: #667eea;
    
    outline:none;
    cursor: pointer;
    
    border: solid 1px #667eea;
    border-radius: 0 0 10px 10px;
    border-top: none;
    background: #667eea;
    color: #fff;
  }
  
  #submit:hover {
    color: #e2dedb;
  }
}
`;
const FooterTop = styled.div`
.footertop{
  box-shadow: 0px 10px 20px -10px #000;
  background-image: linear-gradient(to right,#667eea,#764ba2,#6B8DD6,#8E37D7);
  background-size: 584% 100%;
  padding: 2rem 0;
  color: var(--white);
}
.footertop-container{
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
}
.footertop-container a i{
  font-size: 1.5em;
  margin: 0 10px;
  background-color: #fff;
  padding: .5em .65em;
  border-radius: 100px;
  box-shadow: 4px 4px 20px -5px #000;
}
.good-at-stuff i{
  font-size: 2.2em;
  margin: 0;
  /* background-color: #333333; */
  padding: .3em .40em;
  /* border-radius: 100px; */
  /* box-shadow: 4px 4px 20px -5px #000; */
  color: #ffffff;
}
.connect-title h4{
  color: #ffffff;
}
.connect-title i{
  font-size: 1.5em;
  margin: 0 15px;
}
@media (max-width: 991px){
  .footertop{
    text-align: center;
  }
  .connect-title i {
    display: none;
  }
  .connect-title{
    margin-bottom: 20px;
  }
}
@media (max-width: 800px){
  .good-at-stuff i{
    font-size: 1.8em;
  }
}
@media (max-width: 465px){
  .good-at-stuff i{
    font-size: 1.3em;
  }
}

`;

const FooterBottom = styled.div`
.footerbottom{
  text-align: center;
  color: #ffffff;
  background: #333333;
  padding: 1rem 0 .5rem;
  padding-right: 15px;
  padding-left: 15px;
}
.footerbottom p{
  font-size: 12px;
}
.footerbottom img{
  height: 20px;
  width: auto;
  padding: 0 10px;
}
`;