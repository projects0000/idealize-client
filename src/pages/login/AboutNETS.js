import image2 from "../../images/employeegroup.webp"
const AboutNETS = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-6 fw-bold lh-1">About NETS...</h1>
                    <p className="lead">
                        Introducing our all-in-one website dedicated to managing your learning materials,
                        from KT sessions to articles and quizzes. Our platform is designed to help
                        you stay on top of your educational needs and connect with like-minded
                        individuals through our discussion forums. We understand that even the
                        best learning materials can leave you with questions or doubts, which
                        is why we have a guidance request ticket system in place for personalized
                        support and guidance from our expert team.
                    </p>
                    <div className="b-example-divider"></div>
                    <p className="lead">
                        Join our community today and let's embark on a journey of lifelong learning together!
                    </p>
                </div>
                <div className="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" draggable={false} src={image2} alt="" width="720" />
                </div>
            </div>
        </div>
    );
}
export default AboutNETS