import {useState,useEffect} from "react";
import axios from "axios";
import Loader from "../loader/loader.jsx";
import { Link } from "react-router-dom";

const ReadPage = () => {
    const [Data,SetData]=useState([]);

    useEffect(() => {
        (async () => {
            await ReadData();
        })();
    }, []);

    const ReadData = async () => {
        let res = await axios.get("/api/Read");
        SetData(res.data["row"]);
    };

    const DeleteData = async (id) => {
        await axios.delete(`/api/Delete/${id}`);
        await ReadData();
    };



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
                    <Link className="btn btn-outline-primary m-1" to="/create">Create Food</Link>
                    <button className="btn btn-primary">All Foods</button>

                </div>
            </div>
            <div className="card-container"
                 style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
                {Data.length === 0 ? (
                    <Loader/>
                ) : (
                    Data.map((item, i) => {
                        return (
                            <div key={i} className="card"
                                 style={{width: '10rem', position: 'relative', margin: '20px'}}>
                                <img src={item["image"]} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item["name"]}</h5>
                                    <div className="d-flex flex-row">
                                        <Link to={`/update/${item["_id"]}`} className="btn btn-outline-success ms-1 me-1">Edit</Link>
                                        <button onClick={() => DeleteData(item["_id"])} className="btn btn-outline-danger">Delete</button>
                                    </div>
                                </div>
                                <div className="price-overlay" style={{
                                    position: 'absolute',
                                    bottom: '',
                                    right: '20px',
                                    backgroundColor: 'purple',
                                    color: '#fafafa',
                                    padding: '2px',
                                    paddingRight: '10px',
                                    paddingLeft: '10px',
                                    borderRadius: '7px',
                                    marginTop: '10px'
                                }}>Tk:
                                    {item["price"]}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ReadPage;