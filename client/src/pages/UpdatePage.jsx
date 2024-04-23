import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you have a route parameter for the item ID

    const [formData, setFormData] = useState({
        name: "",
        code: "",
        image: "",
        category: "",
        quantity: "",
        price: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/Read/${id}`);
                const { name, code, image, category, quantity, price } = response.data;
                setFormData({
                    name,
                    code: String(code),
                    image,
                    category,
                    quantity: String(quantity),
                    price: String(price),
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const UpdateData = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`/api/Update/${id}`, {
                name: formData.name,
                code: parseFloat(formData.code),
                image: formData.image,
                category: formData.category,
                quantity: parseFloat(formData.quantity),
                price: parseFloat(formData.price),
            });
            navigate("/");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            {/* Similar offcanvas and navigation elements as CreatePage */}
            {/* ... */}

            <div className="container mt-5">
                <form onSubmit={UpdateData}>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Name:</label>
                            <input
                                className="form-control form-control-sm"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Code:</label>
                            <input
                                className="form-control form-control-sm"
                                name="code"
                                type="number"
                                value={formData.code}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Image:</label>
                            <input
                                className="form-control form-control-sm"
                                name="image"
                                type="text"
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Category</label>
                            <input
                                className="form-control form-control-sm"
                                name="category"
                                type="text"
                                value={formData.category}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Quantity:</label>
                            <input
                                className="form-control form-control-sm"
                                name="quantity"
                                type="number"
                                value={formData.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Price</label>
                            <input
                                className="form-control form-control-sm"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm mt-3 btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;