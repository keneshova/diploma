import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return(
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}