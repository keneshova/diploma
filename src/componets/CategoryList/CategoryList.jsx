import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут хпанить в snapshot.docs

      //создать массив для категорий
      const newCategories = [];
      //

      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });

      setCategories(newCategories);
    });
  }, []);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}
