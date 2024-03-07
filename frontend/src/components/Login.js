import React from 'react'

const Login = () => {

    function handleSubmit(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form)
        let formObj = Object.fromEntries(formData.entries())
        console.log(formObj);
    }

    return (
        <>
            <div className="d-flex justify-content-center w-80">
                <div className=" pt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword5" className="form-label">Password</label>
                            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login