/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from '@reach/router'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllUserPetitions } from '../../models/petitionModels/allUserPetition';
import { timeSince } from '../../utils/DateFormatter';

const UserPetitions = () => {
    const userPetition = useSelector(state => state.petition);
    let dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchAllUserPetitions = async () => {
        console.log(userPetition.user_id);
        await dispatch(getAllUserPetitions(userPetition.user_id));
    };
    useEffect(() => {
        fetchAllUserPetitions()
    }, [fetchAllUserPetitions]);
    return (
        <>
            {
                userPetition.allUserPetitions && userPetition.allUserPetitions.length > 0 ?
                    userPetition.allUserPetitions.map((petitions) => (
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
                                            <Link to="/petition-details-page">{petitions.title}</Link>

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

        </>
    )
}

export default UserPetitions
