import React from "react";

const RecipeCard = ({ title, description, ingredients, steps }) => {
  const styles = {
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

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>
        <b>Опис:</b> {description}
      </p>
      <p style={styles.content}>
        <b>Інгредієнти:</b> {ingredients.join(", ")}
      </p>
      <p style={styles.content}>
        <b>Кроки:</b>
      </p>
      <ol style={styles.content}>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
