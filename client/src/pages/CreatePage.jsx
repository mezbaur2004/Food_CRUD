import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    let navigate = useNavigate();

    const CreateData = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.target);
        let name = formData.get("name");
        let code = formData.get("code");
        let image = formData.get("image");
        let category = formData.get("category");
        let quantity = formData.get("quantity");
        let price = formData.get("price");


        await axios.post("/api/Create", {
            name: name,
            code: parseFloat(code),
            image: image,
            category: category,
            quantity: parseFloat(quantity),
            price: parseFloat(price),
        });

        navigate("/");


    }

    return (
        <div>
            <button className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">More Options
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                 id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Crud Food</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <h1 className="m-3">Menu</h1>
                <div className="offcanvas-body mt-5">
                    <button className="btn btn-primary m-1">Create Food</button>
                    <Link className="btn btn-outline-primary" to="/">All Foods</Link>

                </div>
            </div>

            <div className="container mt-5">
                <form onSubmit={CreateData}>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Name:</label>
                            <input
                                className="form-control form-control-sm"
                                name="name"
                                type="name"
                                placeholder="name"
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Code:</label>
                            <input
                                className="form-control form-control-sm"
                                name="code"
                                type="number"
                                placeholder="code"
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Image:</label>
                            <input
                                className="form-control form-control-sm"
                                name="image"
                                type="text"
                                placeholder="image"
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Category</label>
                            <input
                                className="form-control form-control-sm"
                                name="category"
                                type="text"
                                placeholder="category"
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Quantity:</label>
                            <input
                                className="form-control form-control-sm"
                                name="quantity"
                                type="number"
                                placeholder="quantity"
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Price</label>
                            <input
                                className="form-control form-control-sm"
                                name="price"
                                type="number"
                                placeholder="price"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm mt-3 btn-success">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CreatePage;