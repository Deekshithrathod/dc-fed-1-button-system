import Button from "../Button/Button";
import "./ButtonArea.css";

const ButtonArea = () => {
  return (
    <article>
      <h1>Buttons</h1>
      <div className="buttons-display">
        <div className="button-set">
          <h3>Size: small</h3>
          <div className="button-row">
            <Button color="default" size="sm" />
            <Button color="primary" size="sm" />
            <Button color="secondary" size="sm" />
            <Button color="danger" size="sm" />
          </div>
        </div>

        <div className="button-set">
          <h3>Size: medium</h3>
          <div className="button-row">
            <Button color="default" />
            <Button color="primary" />
            <Button color="secondary" />
            <Button color="danger" />
          </div>
        </div>

        <div className="button-set">
          <h3>Size: large</h3>
          <div className="button-row">
            <Button color="default" size="lg" />
            <Button color="primary" size="lg" />
            <Button color="secondary" size="lg" />
            <Button color="danger" size="lg" />
          </div>
        </div>
        <br />
        <h2>All the buttons below this line are of size Medium</h2>

        <div className="button-set">
          <h3>Variant: text</h3>
          <div className="button-row">
            <Button color="default" variant="text" />
            <Button color="primary" variant="text" />
            <Button color="secondary" variant="text" />
            <Button color="danger" variant="text" />
          </div>
        </div>

        <div className="button-set">
          <h3>Variant: outline</h3>
          <div className="button-row">
            <Button color="default" variant="outline" />
            <Button color="primary" variant="outline" />
            <Button color="secondary" variant="outline" />
            <Button color="danger" variant="outline" />
          </div>
        </div>

        <div className="button-set">
          <h3>BoxShadowDisabled: true</h3>
          <div className="button-row">
            <Button color="default" disableBoxShadow />
            <Button color="primary" disableBoxShadow />
            <Button color="secondary" disableBoxShadow />
            <Button color="danger" disableBoxShadow />
          </div>
        </div>

        <div className="button-set">
          <h3>disabled: true</h3>
          <div className="button-row">
            <Button color="default" disabled />
            <Button color="primary" disabled />
            <Button color="secondary" disabled />
            <Button color="danger" disabled />
          </div>
        </div>

        <div className="button-set">
          <h3>StartIcon: local_grocery_store</h3>
          <div className="button-row">
            <Button color="default" startIcon="local_grocery_store" />
            <Button color="primary" startIcon="local_grocery_store" />
            <Button color="secondary" startIcon="local_grocery_store" />
            <Button color="danger" startIcon="local_grocery_store" />
          </div>
        </div>

        <div className="button-set">
          <h3>EndIcon: local_grocery_store</h3>
          <div className="button-row">
            <Button color="default" endIcon="local_grocery_store" />
            <Button color="primary" endIcon="local_grocery_store" />
            <Button color="secondary" endIcon="local_grocery_store" />
            <Button color="danger" endIcon="local_grocery_store" />
          </div>
        </div>
        <footer>
          created by <a href="https://github.com/Deekshithrathod">Deekshith</a>{" "}
          - Full Stack
        </footer>
      </div>
    </article>
  );
};

export default ButtonArea;
