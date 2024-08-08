import { test, expect, request } from "@playwright/test";

test.describe("Simple Books API Tests", () => {
  let baseURL = "https://simple-books-api.glitch.me";
  let authToken =
    "32cdb393c6eb55cf8a5c7cfa61335dfba4cdd894fd53750bd8cc18ca9c6e0bce"; // Replace with a valid token if needed

  // Fetch all books
  test("Fetch All Books", async ({ request }) => {
    const response = await request.get(`${baseURL}/books`);
    expect(response.status()).toBe(200);

    const books = await response.json();
    console.log(books); // Log the books for visibility

    // Basic validation to ensure the response is an array of books
    expect(Array.isArray(books)).toBeTruthy();
    expect(books.length).toBeGreaterThan(0);
  });

  // Order a book
  test("Order a Book", async ({ request }) => {
    const orderData = {
      bookId: 1, // Example book ID
      customerName: "Rehema Baya", // Example customer name
    };

    const response = await request.post(`${baseURL}/orders`, {
      data: orderData,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(response.status()).toBe(201);

    const orderConfirmation = await response.json();
    console.log(orderConfirmation); // Log the order confirmation for visibility

    // Basic validation to ensure the order was placed successfully
    expect(orderConfirmation).toHaveProperty("orderId");
  });
});
