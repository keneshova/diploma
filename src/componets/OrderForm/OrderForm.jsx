import "./OrderForm.css";
export default function OrderForm() {
  function onSubmit(event) {
    const data = new FormData(event.target);

    event.preventDefault();
  }

  return (
    <div className="OrderForm">
      <h3>Create an order</h3>
      <form>
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Phone: <input type="telephone" name="phone" required />
        </label>
        <label>
          Address: <input type="text" name="address" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}