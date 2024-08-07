# Test Automation using playwright

This repository will contain UI tests for the Nayms application using Playwright.

## Description

The Nayms App UI Testing suite is designed to automate the testing of the user interface for the Nayms application. This ensures that critical workflows and features function correctly, providing a seamless experience for the users.

## Getting Started

### Cloning the Repository

To get started, clone the repository to your local machine:
```sh
git clone https://github.com/TekyRey/Playwright-Automation.git
cd Playwright-Automation
```

### Installing Dependencies

Once you have cloned the repository, install the necessary dependencies:
```sh
npm install
```

### Running Tests

To run the end-to-end tests, use the following commands:

- **Run all tests:**
  ```sh
  npx playwright test
  ```

- **Start the interactive UI mode:**
  ```sh
  npx playwright test --ui
  ```

- **Run tests only on Desktop Chrome:**
  ```sh
  npx playwright test --project=chromium
  ```

- **Run tests in a specific file:**
  ```sh
  npx playwright test example
  ```

- **Run tests in debug mode:**
  ```sh
  npx playwright test --debug
  ```

- **Auto generate tests with Codegen:**
  ```sh
  npx playwright codegen
  ```

### Getting Started with Testing

To get started with testing, you can you begin by typing:
```sh
npx playwright test
```

This command will run all the end-to-end tests to ensure that the Nayms application is functioning as expected.

For further details on how to use Playwright, refer to the [official Playwright documentation](https://playwright.dev).

---

Happy testing! If you have any questions or need further information, please don't hesitate to reach out.

Rehema