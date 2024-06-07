import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Функція для ініціалізації бази даних
export function initializeDatabase(db) {
  // Функція для додавання даних до бази даних Firebase
  async function addToDatabase() {
    try {
      // Додавання документу з текстом "привіт гіт" у вашу колекцію "greetings"
      await addDoc(collection(db, "greetings"), {
        message: "Привіт1"
      });

      console.log("Дані успішно додані до бази даних");
    } catch (error) {
      console.error("Помилка додавання даних до бази даних:", error);
    }
  }

  // Виклик функції для додавання даних при завантаженні сторінки
  window.onload = addToDatabase;
}

