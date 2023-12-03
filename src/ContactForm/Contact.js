import React, { Component } from 'react'
import './project2.css'
export default class Contact extends Component {
     FormHandler=(e)=>{
         e.preventDefault();
         alert(" Thank you for taking the time to help us improve the platform")
    }
    render() {
        return (
               <div className='Form-Container'>
                <div className="heading">
                    <h1 id="title">Contact Us</h1>
                    </div>
                <form action="subit" id="survey-form" onSubmit={this.FormHandler}>
                    <div id="content1">
                    <input id="name" type="text" placeholder="Enter Your name" className="box" required/><br />
                        <label id="email-label" name="E-mail">E-mail</label><br /><br />
                        <input id="email" type="email" placeholder="Enter Your e-mail" className="box" required/><br />
                            <label name="Age" id="number-label">Age<span className="small"> (optional)</span></label><br /><br />
                            <input id="number" type="number" min="19" max="99" placeholder="Enter Your Age" className="box" required/><br />
                                <label id="select" name="selectoption">Which option best describes your current role?</label><br />

                                <div id="option1">
                                    <select id="dropdown" required>
                                        <option name="Select your role">Select your role</option>
                                        <option className="option" id="choice1" value="student">student</option>
                                        <option className="option" id="choice2" value="Full time job">Full time job</option>
                                        <option className="option" id="choice3" value="Full time learner">Full time learner</option>
                                        <option className="option" id="choice4" value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                    <br />
                                 </div><br />
                               <p style={{
                                    marginTop:"20px", textAlign: "left", fontWeight: "bold"
                                }
                            }> any comments or suggestions</p>
                                 <textarea id="comments"
                                    className="input-textarea"
                                    name="comment"
                                    placeholder="Enter your comment here..."></textarea>
                                <button type="submit" id="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                            )
  }
}
