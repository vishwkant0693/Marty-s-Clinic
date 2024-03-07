import React from 'react'

const Appointment = () => {

    function handleSubmit(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form)
        let formObj = Object.fromEntries(formData.entries())
        console.log(formObj);
    }

    return (
        <>
            <div className="d-flex justify-content-center w-100">
                <div className="pt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="fullname" className="form-control" id="exampleFormControlInput1" placeholder="Full name" />
                        </div>
                        <div className="d-flex mb-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
                                <input type="age" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Sex</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Doctor</label>
                            <input type="doctor" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Symptoms</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Appointment