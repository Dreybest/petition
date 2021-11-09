import React from "react";
import {
    Link
  } from "@reach/router";
  
  import { Footer } from "../../components/Footer";
  
  import { Header } from "../../components/Header";
  const GuidePage = () => {

      return ( 
        <>
            <div id="wrapper" className="clearfix">
            
                <Header />
            
            </div>

            <div className="main-content-area">
   
    <section className="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" data-tm-bg-img="images/bg/bg1.jpg">
      <div className="container pt-90 pb-90">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="title">Petition Guide</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    

   
    <section>
      <div className="container mt-30 mb-30 pt-30 pb-30">
        <div className="row">
          <div className="col-sm-12">
            <div className="blog-posts single-post">
              <article className="post clearfix mb-0">
                <div className="entry-header mb-30">
                  <div className="post-thumb thumb"> <img src="images/bg/guide1.jpg" alt="images"  className="img-responsive img-fullwidth" /> </div>
                  <h3 className="mt-30">How To Write A Successful Petition</h3>
                </div>
                <div className="entry-content">
                  <p>There have been all kinds of petitions. Some call for politicians to be kicked out of office; some call for politicians to be voted in. Some want a favorite TV show reinstated. Some want a particular thing to be implemented ina an institution; some want video games rules changed. Like most things in life, petitions come in all flavors.</p>

                  <p>You've got one of the most powerful activism tools ever invented at your disposal. Online petitions are special because they allow everyone to have a voice.</p>

                  <p> Petitions differ in another way, too. Some are successful, gathering tens or even hundreds of thousands of signatures, and national media attention. Some disappear almost without a trace, maybe getting a few signatures from the sponsor's immediate circle of friends and family, but never really catching on. </p>

                  <p> It's difficult to say exactly what makes a petition successful. Some of it is just luck. Some of it is timing. Still, it's possible to come up with a few general principles or guidelines for writing a successful petition. In our experience, these ten are particularly important. </p>

                  <h5>1. Write Clearly and Concisely</h5>
                  <p>Prospective signers often don't have a lot of time. It's important to state your main goal concisely, and at the start of the petition. Although a good petition can include a certain amount of background and context, the first paragraph should make it absolutely clear what the petition hopes to achieve.</p>


                  <h5>2. Spell Check and Proofread</h5>
                  <p>This may sound obvious, but it's amazing how many petition hosts don't even bother to spell-check their petitions. If you want people to take your petition seriously, then you need to put in the time to make sure it sounds serious and professional.</p>

                  <h5>3. Use the Power of Email</h5>
                  <p>Internet petitions are unique- and different from online petitions- because they can reach a global audience of millions with only a minimal investment in terms of time and money. Email, in particular, is cheap, easy, yet highly effective. Don't spam, but do send your petition link to any friends or family that might be interested- and ask them to send it on to their friends. This is called "viral marketing" and it is the most effective kind of marketing out there.</p>

                  <h5>4. Foster an Online Community</h5>
                  <p>Prospective signers like to know what others have said or thought about your petition. Use discussion groups, blogs, links, and other online tools to create a community around your petition- a group of committed and interested people who can engage in intelligent dialogue, and educate each other about the issues at stake. An online community is also a great way to keep the petition going, and even to transform it into a national movement, once it has been sent to the recipient.</p>

                  <h5>5. Publicize your Petition Online</h5>
                  <p>There are lots of ways for signers to find your petition, but publicity always helps. Advertising on Google, Overture, and other search engines is one obvious step. But if you don't have the money to advertise, you can also publicize your petition by posting links to it on relevant online discussion groups and blogs. You can also try link-exchanges with sites that cover issues similar to those in your petition.</p>

                  <h5>6. Get Media Coverage</h5>
                  <p>Advertising and viral marketing are two ways to get traffic. Successful petitions also often get some attention in the media. This doesn't mean your petition needs to be covered in The New York Times. Often, the most successful petitions are those that receive attention on local radio, or even on small Internet news sites.</p>

                  <h5>7. Supplement with Offline Efforts</h5>
                  <p>Because you've created an online petition, you may overlook the offline world. But there are several things you can do at home, at the office, and at various other places to get more signatures. For instance, posters on community bulletin boards (e.g., at the library), or even word-of-mouth marketing at the office, can help a lot. The important thing is for people to know your petition exists. </p>

                  <h5>8. Be Polite and Reasonable</h5>
                  <p>It's important to make your point, but it's also important to do so politely. Potential signers are turned off by rude or offensive petitions- even if they're sympathetic to the goals you're trying to achieve. The best petitions sound reasonable, intelligent, and willing to acknowledge other points of view.</p>

                  <h5>9. Be Practical</h5>
                  <p>Your petition should be ambitious (see the next tip), but realistic. The change you're advocating should be concrete and achievable. If visitors to your petition think you're just shooting for the moon, they're unlikely to sign the petition, even if they support the cause.</p>

                  <h5>10. Think Big - You Can Do It!</h5>
                  <p>Finally, it's important to remember that you've got one of the most powerful activism tools ever invented- the Internet- at your disposal. You may wonder if your voice will ever be heard. But online petitions are special precisely because they allow everyone to have a voice.</p>

                  <div className="mb-3">
                    <Link to="/create-petition">
                      <button type="submit" className="btn btn-theme-colored1 btn-round m-0" L data-loading-text="Please wait...">Start Your Petition</button>
                    </Link>
                  </div>

                 
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>


            <Footer />
            <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
  
        </>
      )
  }
  
  export default GuidePage;
