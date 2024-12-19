import React from "react";
import ReactDOM from "react-dom/client";

// Основні стилі
const styles = {
  header: {
    backgroundColor: "#f7e4d0",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Georgia, serif",
    borderBottom: "3px solid #c39e81",
  },
  card: {
    border: "1px solid #c39e81",
    borderRadius: "8px",
    margin: "10px",
    padding: "15px",
    backgroundColor: "#fefaf4",
    fontFamily: "'Times New Roman', Times, serif",
  },
  title: {
    fontSize: "24px",
    color: "#814c27",
  },
  content: {
    marginTop: "10px",
    fontSize: "16px",
  },
};

// Компонент для одного рецепта
const RecipeCard = ({ title, description, ingredients, steps }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}><b>Опис:</b> {description}</p>
      <p style={styles.content}><b>Інгредієнти:</b> {ingredients.join(", ")}</p>
      <p style={styles.content}><b>Кроки:</b></p>
      <ol style={styles.content}>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

// Основна сторінка
const App = () => {
  const recipes = [
    {
      title: "Галушки Полтавські",
      description: "Галушки, що їх ласував Еней і вся його братія.",
      ingredients: ["борошно", "яйця", "сметана", "сіль"],
      steps: [
        "Змішати всі інгредієнти в однорідну масу.",
        "Сформувати галушки та відварити у підсоленій воді.",
        "Подавати зі сметаною.",
      ],
    },
    {
      title: "Каша з салом",
      description: "Була ця страва до снаги всім троянцям.",
      ingredients: ["гречка", "сало", "цибуля", "сіль", "перець"],
      steps: [
        "Зварити гречку до готовності.",
        "Обсмажити сало з цибулею на пательні.",
        "Змішати все разом та приправити за смаком.",
      ],
    },
  ];

  return (
    <div>
      <header style={styles.header}>
        <h1>Кулінарна книга Енея</h1>
        <p>Рецепти на втіху троянцям і не тільки!</p>
      </header>
      <main>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
