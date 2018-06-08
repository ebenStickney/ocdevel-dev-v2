import React from 'react';





const DashboardPage = () => (
<div className="page-container">
  <div className="side-container side-container__info">
        <div className="side-container__media">
               <div className="side-container__icons">
                    <a target="_blank" href="https://www.facebook.com/lefnire">
                      <i className="fab fa-facebook-square fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/lefnire">
                      <i className="fab fa-linkedin-in fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/lefnire">
                      <i className="fab fa-twitter-square fa-3x"></i>
                    </a>
                    <a target="_blank" href="https://github.com/lefnire">
                      <i className="fab fa-github-square fa-3x"></i>
                    </a>
               </div>
               <div className="side-container__item side-container__picName">
                 <h2 className="header__side">What We Do</h2>
                 <img className="side-container__profilePic" src="/images/profile_pic.jpeg" alt="Profile picture" />
               </div>
        </div>
        <div className="side-container__bio">
              <div className="side-container__item">
                <p>
                Tyler is a full-stack Senior JavaScript developer and has spent 10 years in web &
                    mobile. He is focused on Node,
                    React / React Native, and Angular / Ionic. He is the also creator of HabitRPG, a startup begun on Kickstarter
                    which now has
                    800k+ users. Tyler built an enterprise PDF-creation service employed by 1.5k sites, and websites for clients
                    such as Adidas,
                    BigFix, and UCSF. Currently obsessed with machine learning, he labels himself a "bonafide singularitarian".
                    Available starting April for remote work in React, Angular / Ionic, Node, and/or Python.
                </p>
              </div>
        </div>

      </div>
      <div className="vl"></div>
      <div className="side-container">
        <section>
        More info
        </section>
      </div>
</div>





);

export default DashboardPage;
