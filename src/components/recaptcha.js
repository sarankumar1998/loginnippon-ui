import React, { Component } from 'react';
// import Captcha from "demos-react-captcha";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './recaptcha.css';


class ReCaptcha extends Component {

    componentDidMount() {
        loadCaptchaEnginge(5);
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) == true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(5);

            document.getElementById('user_captcha_input').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";

        }
    };

    render() {
        return (<div className="background">
            <div className="container">
                <div className="row d-flex  justify-content-center">
                    <div className='col-md-5'>
                        <div className="card">
                            <img src={require('../images/nipp.png').default} class="rounded mx-auto d-block mt-3" alt="" height={100} width={100} />
                            <div className="card-body ">
                                <div className="row form-group">

                                    <div className="col-md-5 mt-5 mb-4">
                                        <LoadCanvasTemplate />
                                    </div>

                                    <div className="col mt-5 mb-4">
                                        <input placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" type="text" />
                                    </div>

                                </div>                                
                                <div className="col text-center">
                                    <button className="btn btn-primary mt-3 mb-2" onClick={() => this.doSubmit()}>Submit</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>);

    };
}

export default ReCaptcha;