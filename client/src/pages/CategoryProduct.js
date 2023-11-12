import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        {products.length <= 0 && <h3>Loading..</h3>}
        {products.length > 0 && (
          <>
            <h3 className="text-center">{category.name}</h3>
            <h6 className="text-center">{products.length} result found</h6>
            <div className="row">
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <div
                    className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-4"
                    key={p._id}
                  >
                    <div className="card m-2">
                      <div className="card-image">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">
                          {p.description.substring(0, 30)}...
                        </p>
                        <p className="card-text">$ {p.price}</p>
                        <div className="d-flex text-nowrap justify-content-between">
                          <button
                            className="btn  btn-sm btn-primary ms-1"
                            onClick={() => navigate(`/product/${p.slug}`)}
                          >
                            More Details
                          </button>
                          <button className="btn  btn-sm btn-secondary ms-1">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProduct;
