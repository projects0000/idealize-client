const AddReview = () => {
    return (
        <div className="container mt-3">
            <h5 className="heading p-3 rounded">Add Daily Review</h5>
            <div className="card-body">
                <form>
                    <textarea className="form-control" rows={5} cols={20}></textarea>
                    <input type="submit" value="Submit Review" className="mt-3 btn btn-outline-success form-control" />
                </form>
            </div>
            <hr></hr>
            <h5 className="heading p-3 rounded mt-3">Past Reviews</h5>
            <div className="mb-3 overflow-auto" style={{maxHeight:"300px"}}>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h6>20 December 2023</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h6>19 December 2023</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h6>19 December 2023</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h6>19 December 2023</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h6>19 December 2023</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AddReview;