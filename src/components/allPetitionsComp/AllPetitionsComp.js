/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from '@reach/router'
import React, {useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { getAllPetitions } from '../../models/petitionModels/allPetitionsModel';
import { timeSince } from '../../utils/DateFormatter';
// AllPetitionsComp
const AllPetitionsComp = () => {
    const user = useSelector(state => state.petition);
    let dispatch = useDispatch();
    const fetchAllPetitions = async () => {
           await dispatch(getAllPetitions());
       };
    useEffect(() => {
           fetchAllPetitions()
       }, [fetchAllPetitions]);
//        var date = new Date(...timeSince('2016-01-04 10:34:23'));
// console.log(date);
    return (
        // allPetitions
        <>

            <section data-tm-bg-color="#fff">
                <div className="section-content mt-lg--0 pt-lg--0" data-tm-margin-top="-183" data-tm-padding-top="184">
                    <div className="container">
                        <div className="tm-sc-section-title section-title text-center mb-50">
                            <div className="row">
                                <div className="col-lg-5 m-auto">
                                    <div className="title-wrapper mb-0">

                                        <h2 className="title">All Petitions</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        {
                        user.allPetitions &&  user.allPetitions.length > 0 ?
                        user.allPetitions.map((petitions) => (
                            <div className="col-md-6 col-lg-4" key={petitions.id}>
                            <div className="blog-current-style1 mb-lg-30">
                                <article className="post">
                                    <div className="entry-header">
                                        <div className="post-thumb">
                                            <div className="post-thumb-inner">
                                                <div className="thumb">
                                                    <img className="w-100" src="images/bg/rtl.jpg" alt="e" />
                                                </div>
                                                <div className="blog-meta">
                                                    <span className="admin-type mr-10"><i className="far fa-user-circle"></i>Admin</span>
                                                    <span className="comments-type"><i className="far fa-comments"></i>2 Comments</span>
                                                </div>
                                                <div className="meta-date">{timeSince(petitions.created_at)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <h6 className="entry-title mt-0">
                                        <Link to="/sign-in-page">{petitions.title}</Link>

                                        </h6>
                                        <div className="post-btn-readmore">
                                        <Link to="/petition-details-page" className="btn btn-plain-text-with-arrow">Read More</Link>

                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        ))
                        : null
                    }

{/* timeSince */}


                            
                        </div>
                    </div>
                </div>
                <div className="tm-floating-objects">
                    <span className="floating-object-1" data-tm-bg-img="images/shape/blog-01.png" data-tm-width="185" data-tm-height="253" data-tm-top="auto" data-tm-bottom="-6" data-tm-left="75" data-tm-opacity="1"></span>
                    <span className="floating-object-2 tm-animation-floating" data-tm-bg-img="images/shape/blog-02.png" data-tm-width="90" data-tm-height="80" data-tm-top="440" data-tm-bottom="auto" data-tm-left="180" data-tm-opacity="1"></span>
                    <span className="floating-object-3" data-tm-bg-img="images/shape/blog-03.png" data-tm-width="136" data-tm-height="201" data-tm-top="auto" data-tm-bottom="0" data-tm-right="100" data-tm-left="auto" data-tm-opacity="1"></span>
                </div>
            </section>
        </>
    )
}

export default AllPetitionsComp
