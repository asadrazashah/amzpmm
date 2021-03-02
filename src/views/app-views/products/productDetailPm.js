import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Button, Input, Row, Col, Spin, Form, message } from "antd";
import { SyncOutlined, EditOutlined } from "@ant-design/icons";
import {
  viewProductAction,
  editProductAction,
} from "../../../redux/actions/Product";
import "./styles.css";

const rules = {
  required: [
    {
      required: true,
      message: "This field is required",
    },
  ],
  number: [
    {
      required: true,
      message: "This field is required",
    },
    {
      type: "number",
      message: "This field must be a number",
    },
  ],
};

const ProductDetails = (props) => {
  const { productDetail, loading, dispatch } = props;
  const [form] = Form.useForm();
  const [editProduct, setEditProduct] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewProductAction({ productId: id }));
  }, [id]);

  const switchEditProduct = () => {
    setEditProduct(!editProduct);
  };
  const onEditProduct = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(editProductAction(values));
      })
      .catch((info) => {
        message.error("Validate Failed:", info);
      });
  };

  const { TextArea } = Input;
  console.log("product detail", productDetail);
  return (
    <>
      <div className="headingDetails">
        <p className="small">Overview</p>
        <h4 className="large">Product Details</h4>
      </div>
      {productDetail ? (
        <Row gutter={[0, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="productImgCard">
              <div className="productImgWrapper">
                <h4>Product Picture</h4>
                <img
                  src={productDetail.image}
                  alt="product"
                  className="productDetailImg"
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<SyncOutlined />}
                  size="small"
                  className="changePic"
                >
                  Change Pic
                </Button>
              </div>
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Amazon Picture</h4>
                <img
                  src={productDetail.amazonImage}
                  alt="product"
                  className="productDetailImg"
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<SyncOutlined />}
                  size="small"
                  className="changePic"
                >
                  Change Pic
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={15} lg={15} xl={15}>
            <div className="productDetailCard">
              <div className="header">
                <h4>Details</h4>
                {editProduct ? (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditProduct}
                  >
                    Cancel{" "}
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditProduct}
                  >
                    Edit
                  </Button>
                )}
              </div>
              {editProduct ? (
                <div className="bodyProductDetail">
                  <Form onFinish={onEditProduct} layout="vertical" form={form}>
                    <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                      <Col span={15}>
                        <Form.Item
                          name="keyword"
                          label="Keyword"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.keyword : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={8}>
                        <Form.Item
                          name="sellerId"
                          label="Seller Id"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.sellerId : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={15}>
                        <Form.Item
                          name="brandName"
                          label="Brand Name"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.brandName : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={8}></Col>
                      <Col span={8}>
                        <Form.Item
                          name="market"
                          label="Market"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.market : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={15}>
                        <Form.Item
                          name="chineseSeller"
                          label="Chinese Seller"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.chineseSeller : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="commission"
                          label="Commission"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.commission : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={11}>
                        <Form.Item
                          name="productId"
                          label="Product Id"
                          rules={rules.number}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.productId : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="instructions"
                          label="Instructions"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.instructions : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="refundCondition"
                          label="Refund Condition"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.refundCondition : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="commissionCondition"
                          label="Commission Condition"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail
                              ? productDetail.commissionCondition
                              : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="saleLimitOverall"
                          label="Overall Sale Limit"
                          rules={rules.number}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.saleLimitOverall : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={11}>
                        <Form.Item
                          name="saleLimitDay"
                          label="Daily Sale Limit"
                          rules={rules.number}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.saleLimitDay : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button
                      type="primary"
                      style={{ marginTop: "20px" }}
                      htmlType="submit"
                      loading={loading}
                    >
                      Update
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="bodyProductDetail">
                  <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                    <Col span={12}>
                      <h4>Keyword :</h4>
                      <p>{productDetail.keyword}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Sold By :</h4>
                      <p>{productDetail.brandName}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Brand Name :</h4>
                      <p>{productDetail.brandName}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Seller Name :</h4>
                      <p>{productDetail.sellerName}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Market :</h4>
                      <p>{productDetail.market}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Commision :</h4>
                      <p>{productDetail.commission}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Chinese Seller :</h4>
                      <p>{productDetail.chineseSeller}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Instructions :</h4>
                      <p>{productDetail.instructions}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Refund Condition :</h4>
                      <p>{productDetail.refundCondition}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Commision Condition :</h4>
                      <p>{productDetail.commissionCondition}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Product ID :</h4>
                      <p>{productDetail.productId}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Overall Sale Limit :</h4>
                      <p>{productDetail.saleLimitOverall}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Daily Sale Limit :</h4>
                      <p>{productDetail.saleLimitDay}</p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
      ) : (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ products }) => {
  const { productDetail, loading } = products;
  return {
    productDetail,
    loading,
  };
};

export default connect(mapStateToProps)(ProductDetails);
