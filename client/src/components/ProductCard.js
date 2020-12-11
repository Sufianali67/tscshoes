import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.jsx";
import "./productCard.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        selectedQuantity: 0,
      },
    };
  }
  addQuantity = (event) => {
    const { product } = this.props;
    const { formData } = this.state;
    console.log("product :: ", product);
    if (event.target.value >= 0 && event.target.value <= product.quantity) {
      formData[event.target.name] = event.target.value;
      this.setState({ formData });
    }
  };

  handleSubmit = () => {
    const { formData } = this.state;
    const { onAddToCart, product } = this.props;
    product["selectedQuantity"] = formData.selectedQuantity;
    product["totalPrice"] = formData.selectedQuantity * product.price;
    console.log("clicked");
    onAddToCart(product);
  };
  render() {
    const { product } = this.props;
    const { formData } = this.state;
    return (
      <Card
        className="card-chart"
        style={{ maxWidth: "300px", marginLeft: "50px" }}
      >
        <CardHeader>
          <h5 className="card-category">{product.name}</h5>
          <CardTitle tag="h3">
            <i className="tim-icons icon-money-coins text-info" />{" "}
            {product.price} USD
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <img
              style={{ width: "100%", height: "100%" }}
              alt="..."
              src={product.imagePath}
            />
          </div>
          <ValidatorForm className="validatorForm" onSubmit={this.handleSubmit}>
            <TextValidator
              className="input-field"
              label="Quantity"
              onChange={this.addQuantity}
              name="selectedQuantity"
              type="number"
              margin="dense"
              variant="outlined"
              validators={["required"]}
              errorMessages={["Quantity can not be empty"]}
              value={formData.selectedQuantity}
            />
            <Button type="submit">Add to Cart</Button>
          </ValidatorForm>
        </CardBody>
      </Card>
    );
  }
}
export default ProductCard;
