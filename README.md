# 📌 Jest Unit Testing Guide  

## 📖 Introduction  
This repository demonstrates **unit testing** using [Jest](https://jestjs.io/), a popular JavaScript testing framework. It covers **array validations, object properties, custom matchers, mock functions, and more**.  

## 🛠 Setup & Installation  

### 1️⃣ Install Jest  
Ensure you have **Node.js** installed, then install Jest as a development dependency:  
```bash
npm install --save-dev jest
```

### 2️⃣ Configure Jest in `package.json`  
Modify `package.json` to include Jest settings:  
```json
"scripts": {
  "test": "jest --watchAll",
  "test:coverage": "jest --coverage",
  "test:ci": "jest --ci --runInBand"
}
```
Now, you can run:  
```bash
npm test          # Runs Jest in watch mode  
npm run test:coverage  # Generates a test coverage report  
npm run test:ci   # Optimized for CI/CD  
```

---

## ✅ Test Cases Overview  

### 1️⃣ Array Validations  
```javascript
test("Check if the array length is 6", () => {
  expect(allData).toHaveLength(6);
});

test("Check if the array contains a specific item", () => {
  expect(allData).toContain(3);
});
```

### 2️⃣ Data Type Validations  
```javascript
test("Ensure all array elements are numbers", () => {
  allData.forEach(item => {
    expect(typeof item).toBe("number");
  });
});
```

### 3️⃣ Number Comparisons  
```javascript
test("Verify the first item is greater than 1", () => {
  expect(allData[0]).toBeGreaterThan(1);
});
```

### 4️⃣ Object Property Testing  
```javascript
test("Verify object properties", () => {
  let person = { name: "Mousa", age: 25 };
  expect(person).toHaveProperty("age", 25);
});
```

### 5️⃣ Custom Jest Matchers  
```javascript
expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    return pass ? {
      message: () => `Expected ${received} to be larger than ${target}`,
      pass: true
    } : {
      message: () => `Error: Expected ${received} to be larger than ${target}`,
      pass: false
    };
  }
});

test("Check if number is larger than target", () => {
  expect(10).toBeLargerThan(9);
});
```

### 6️⃣ Mock Functions  
```javascript
test("Mock function example", () => {
  const mocker = jest.fn(name => `Hello ${name}`);
  expect(mocker("Mousa")).toBe("Hello Mousa");
  expect(mocker).toHaveBeenCalledWith("Mousa");
});
```

### 7️⃣ Function Validation  
```javascript
test("Say Jest Message", () => {
  expect(say()).toBe("Hello Jest");
});
```

### 8️⃣ Summation Function  
```javascript
describe("Sum function tests", () => {
  test("Return 0 when no arguments", () => {
    expect(theSum()).toBe(0);
  });
  test("Return sum of numbers", () => {
    expect(theSum(10, 20, 30)).toBe(60);
  });
});
```

---

## 📊 Running Coverage Reports  
Jest can generate **test coverage reports** to analyze tested code:  
```bash
npm run test:coverage
```
This will generate an HTML report inside the **coverage** folder.

---

## 📜 References  
- 🔗 [Jest Documentation](https://jestjs.io/docs/getting-started)  
- 🔍 [Jest Matchers](https://jestjs.io/docs/expect)  
- 🧪 [Mock Functions](https://jestjs.io/docs/mock-functions)  

🚀 **Happy Testing!** 🎯  

