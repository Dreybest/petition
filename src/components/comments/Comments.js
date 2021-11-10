/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

const Comments = () => {
    return (
        <>
            <div className="comment-box mt-30">
                <h3>Leave a Comment</h3>
                <form role="form" id="comment-form" method="POST">
                    <div className="row">
                        <div className="col-12 pt-0 pb-0">
                            <div className="mb-3">
                                <input type="text" className="form-control" required name="contact_name" id="contact_name" placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" required className="form-control" name="contact_email2" id="contact_email2" placeholder="Enter Email" />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter Website" required className="form-control" name="subject" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <textarea className="form-control" required name="contact_message2" id="contact_message2" placeholder="Enter Message" rows="7"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait...">Send Your Comment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Comments
