const ViewReview = () => {
    return (
        <div className="container mt-3 mb-5">
            <div>
                <h6 className="heading p-3 rounded">
                    Reviews : 20 December 2023
                </h6>
                <div className="overflow-auto">
                    <div style={{ maxHeight: "80vh" }}>

                        <div className="card mt-1">
                            <div className="card-body bg-light ">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/201"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Mathesh Yogeswaran - Developer - Project A</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/202"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Raguraj Sivanantham - Developer - Project B</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/203"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Mathesh Mathesh - Developer - Project B</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
            </div>
            <h6 className="heading p-3 mt-3 rounded">
                Reviews : Past Review
            </h6>
            <form>
                <input type="date" className="form-control" value={"12/19/2023"}></input>
            </form>
            <div>
                <h6 className="heading p-3 rounded mt-3">
                    Reviews : 19 December 2023
                </h6>
                <div className="overflow-auto">
                    <div style={{ maxHeight: "80vh" }}>

                        <div className="card mt-1">
                            <div className="card-body bg-light ">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/201"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Mathesh Yogeswaran - Developer - Project A</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/202"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Raguraj Sivanantham - Developer - Project B</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src={"https://picsum.photos/203"}
                                            className="rounded-circle"
                                            alt=""
                                            align="right"
                                            style={{ height: "50px", width: "50px" }}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h6>Mathesh Mathesh - Developer - Project B</h6>
                                        <h6>20 December 2023 03.06 PM</h6>
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
            </div>
        </div>
    );
}
export default ViewReview;