import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Footer from './Footer1'
import Header from './header'
function Privacy() {
  return (
    <>
      <Header />
      <div className='privacy py-4'>
        <Container>
          <div >
            <Row className='ram'>
              <Col md={10}>
                <div className='cookie'>
                  <div>
                    <h2>Cookies Policy</h2>
                  </div>
                  <div className='sub'>
                    <div className='dat'>
                      <p>The standard Lorem Ipsum passage, used since the 1500s</p>
                      <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <ol className='about'>
                      <li><p ><b>About Us.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p></li>
                      <li><p ><b>Cookies Policy.</b> You should be aware that when you use the Site we may collect information using cookies or similar technologies (Please see our Cookies Policy).</p></li>
                      <li><p><b>What are cookies and how do they work? </b>Cookies are small files that are downloaded to your computer or mobile device when you visit a website. Your browser sends these cookies back to the website every time you visit the site again, so it can recognize you. This allows websites to tailor what you see on the screen.</p>
                        <p>This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyse and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt- out of these cookies. But opting out of some of these cookies may influence your browsing experience.</p>
                      </li>
                      <li><p><b>Do we use other technologies which are like cookies? </b>Our websites, apps and emails often contain small invisible images known as 'web beacons' or 'tracking pixels'. These are used in a way similar to cookies, to understand when a particular part of a webpage is viewed. Our apps often use device identifiers in the same way as cookies. A device identifier is a unique number on your device which allow us to remember your device.</p></li>
                      <li><p><b>Necessary Cookies.</b> Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.</p></li>
                      <li><p><b>Non-Necessary Cookies.</b> Any cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.</p></li>
                      <li><p><b>What do we use cookies for?</b> Cookies make using websites much smoother and affect lots of the useful features of websites. There are many different uses for cookies, but they fall into four main groups:</p>
                        <ul>
                          <li><p>Cookies that are needed to provide the service you have asked for. Some cookies are essential so you can move around the website and use its features. Without these cookies, services you've asked for can't be provided. These cookies gather information about you that can be used for remembering your browsing history or allowing you to stay logged in during your visit.</p></li>
                          <li><p>Cookies used to improve your browsing experience. These cookies allow the website to remember choices you make, such as your language or region and they provide improved features such as content provider recommendations and limiting the number of times a particular advertisement is shown to you.</p></li>
                          <li><p>Cookies used to understand how people use our products and services. This allows us to keep track of what pages are popular to help other users find such pages.</p></li>
                          <li><p>Cookies used to show advertising that is relevant to you based upon your viewing history.</p></li>
                        </ul>
                        <p>We also use cookies in order to know how many advertisements we serve, how many times these are clicked or hovered over with a mouse cursor, how many advertisements we show to a given user and how many customer actions these generate. We may also use cookies on the Site and advertisers' sites to understand which customers reach a sale or other action page on an advertiser's site. This allows us to monitor how effective our advertising is. Some of our web pages will contain promotional links to other companies' sites. If you follow one of these links and then register with or buy something from that other site, a cookie is sometimes used to tell that other site that you came from one of our sites. That other site may then pay us a small amount for the successful referral. You will need to review the privacy policy of any website whose advertisement you click on as this Policy only applies to pages on our domain.</p>
                      </li>
                      <li><p><b>Contacting us and accessing your personal information.</b> If you have any queries or comments about this Cookies Policy please contact us at:</p>
                        <p><a href='support@redlightrating.com'>legal@redlightrating.com</a></p>
                        <p>else please write to us at:</p>

                      </li>
                      <li><p><b>Changes to this Cookies Policy.</b>We reserve the right to make changes to our Cookies Policy. Changes to this policy will be posted here and will become effective as of the updated effective date. Your continued use of our website or platform will signify your acceptance of these change</p></li>
                    </ol>
                  </div>
                </div >
              </Col>
              <Col md={2}>
                <div className='side1'>
                  <div className='butt'>
                    <Button className='button' variant="primary" href='Write Review' ><span class="material-symbols-outlined">edit_square</span> Write Review</Button>
                  </div>
                  <div className='emg'>
                    <div className='mid'>
                      <b>find your dream <br />
                        girl for tonight</b>
                    </div>
                    <div className='register1'>
                      <Button className='button' variant="success" href='Write Review'>REGISTER NOW</Button>
                    </div>
                  </div>
                </div>
                <div className='total1'>
                  <p><b>1,764,036<br /></b>
                    TOTAL REVIEW
                  </p>
                  <hr />
                  <p><b>3,741<br /></b>
                    NEW REVIEW
                  </p>
                  <hr />
                  <p><b>8,229<br /></b>
                    USERS ONLINE
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Privacy