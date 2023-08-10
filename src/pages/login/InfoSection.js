import image1 from "../../images/employee.png"
const InfoSection = () => {
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center" >
                <img className="d-block mx-auto mb-4" draggable={false} src={image1} alt="hello world" width="200" height="200" />
                <h6 className="display-6 fw-bold">Employee Performance Reviewing System</h6>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"  >
                        {/* New Employee Training System (NETS) is designed to provide knowledge
                        about working environment, procedures, what exactly newly hired employees
                        need to do in their particular job position in an efficient and interesting
                        manner by organizing all essential learning materials in one central location. */}
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div id="loginDiv"></div>
                    </div>
                </div>
            </div>
            <div className="b-example-divider"></div>
        </div>
    );
}
export default InfoSection;