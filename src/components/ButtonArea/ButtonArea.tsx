// import Button from "../Button/Button";
import { Button } from "../Button/Button";
import "./ButtonArea.css";

const ButtonArea = () => {
  return (
    <div className="button-area">
      <h1>Buttons</h1>
      <div className="buttons-display">
        <div className="button-row">
          <Button color="default" size="sm" />
          <Button color="primary" size="sm" />
          <Button color="secondary" size="sm" />
          <Button color="danger" size="sm" />
        </div>
        <div className="button-row">
          <Button color="default" />
          <Button color="primary" />
          <Button color="secondary" />
          <Button color="danger" />
        </div>
        <div className="button-row">
          <Button color="default" size="lg" />
          <Button color="primary" size="lg" />
          <Button color="secondary" size="lg" />
          <Button color="danger" size="lg" />
        </div>
        {/* ------------------------ */}

        <div className="button-row">
          <Button color="default" />
          <Button color="primary" />
          <Button color="secondary" />
          <Button color="danger" />
        </div>
        <div className="button-row">
          <Button color="default" variant="text" />
          <Button color="primary" variant="text" />
          <Button color="secondary" variant="text" />
          <Button color="danger" variant="text" />
        </div>
        <div className="button-row">
          <Button color="default" variant="outline" />
          <Button color="primary" variant="outline" />
          <Button color="secondary" variant="outline" />
          <Button color="danger" variant="outline" />
        </div>

        {/* ----------------- */}
        <div className="button-row">
          <Button color="default" />
          <Button color="default" disableBoxShadow />
          <Button color="primary" />
          <Button color="primary" disableBoxShadow />
          <Button color="secondary" />
          <Button color="secondary" disableBoxShadow />
          <Button color="danger" />
          <Button color="danger" disableBoxShadow />
        </div>
        <div className="button-row">
          <Button color="default" disabled />
          <Button color="primary" disabled />
          <Button color="secondary" disabled />
          <Button color="danger" disabled />
        </div>
        <div className="button-row">
          <Button color="default" startIcon="local_grocery_store" />
          <Button color="primary" startIcon="local_grocery_store" />
          <Button color="secondary" startIcon="local_grocery_store" />
          <Button color="danger" startIcon="local_grocery_store" />
        </div>
        <div className="button-row">
          <Button color="default" endIcon="local_grocery_store" />
          <Button color="primary" endIcon="local_grocery_store" />
          <Button color="secondary" endIcon="local_grocery_store" />
          <Button color="danger" endIcon="local_grocery_store" />
        </div>
      </div>
      {/* <Button color="default" size="sm" variant="text" />
      <Button color="default" size="sm" variant="outline" />
      <Button color="default" size="sm" variant="contained" />
      <Button
        color="default"
        size="sm"
        variant="contained"
        disableShadow={true}
      /> */}
      {/* <Button color="primary" size="sm" variant="" />
      <Button color="secondary" size="sm" variant="" />
      <Button color="danger" size="sm" variant="" /> */}
      <br />
      <br />
      {/* <Button color="default" size="md" />
      <Button color="primary" size="md" />
      <Button color="secondary" size="md" />
      <Button color="danger" size="md" /> */}
      <br />
      <br />
      {/* <Button color="default" size="lg" />
      <Button color="primary" size="lg" />
      <Button color="secondary" size="lg" />
      <Button color="danger" size="lg" /> */}
    </div>
  );
};

export default ButtonArea;
