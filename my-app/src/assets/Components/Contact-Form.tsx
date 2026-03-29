import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../custom.scss';
import './Form-Style.css'
import { useState } from 'react';

function ContactForm() {
    //Variables that signify the internal state of the Contact-Form is being updated.
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
    });
    return (
        <div className="contact-me-form">
            {/*Heading Text*/}
            <h1 className="text-center description-white">
                Contact Me?
            </h1>
            {/*Contact Form*/}
            <form action="" method="post" className="m-4 ">
                <table className="table table-bordered mx-auto ">
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstName" className="form-label">First Name</label></td>
                            <td><input type="text" onInput={(input) => setFormData({ ...formData, firstName: input.currentTarget.value })} className="form-control" id="firstName" name="firstName"
                                placeholder="Enter first name" required></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lastName" className="form-label">Last Name</label></td>
                            <td><input type="text" onInput={(input) => setFormData({ ...formData, lastName: input.currentTarget.value })} className="form-control" id="lastName" name="lastName"
                                placeholder="Enter last name"></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email" className="form-label">Email</label></td>
                            <td><input type="email" onInput={(input) => setFormData({ ...formData, email: input.currentTarget.value })} className="form-control" id="email" name="email" placeholder="Enter email"
                                required></input>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="comments" className="form-label">Comments</label></td>
                            <td>
                                <textarea onInput={(input) => setFormData({ ...formData, comments: input.currentTarget.value })} className="form-control" id="comments" name="comments" rows={5}
                                    placeholder="Enter your comments here..." required></textarea>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">Submit</label>
                            </td>
                            <td>
                                <div>
                                    <input className="btn btn-secondary" type="submit" value="Submit"></input>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
export default ContactForm;