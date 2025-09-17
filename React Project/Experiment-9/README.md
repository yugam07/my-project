# Student Details Viewer
This is a simple web-based project that allows users to view the details of students such as **Name**, **Age**, and **Subject**.  
The project is built using **HTML, CSS, and JavaScript (with ES6 classes)**.


## Project Structure
- `index.html` → The main webpage where the student list and details are displayed.  
- `Person.js` → Contains the `Person` and `Student` classes, along with the logic to display student details dynamically.  
- `exp9.css` → Stylesheet used to make the webpage look clean and organized.  


## How It Works
1. **Classes Defined in JavaScript**
   - `Person` class: A base class that holds general properties like `name` and `age`.  
   - `Student` class: Extends `Person` and adds the `subject` property.  

2. **Creating Student Objects**
   - A few student objects are created using the `Student` class.  
   - Each object stores a student’s details (name, age, and subject).  

3. **Displaying Student Names**
   - On the webpage (`index.html`), the names of all students are displayed in a list.  
   - Each student name is clickable.  

4. **Viewing Details**
   - When a student’s name is clicked, their details (**Name, Age, Subject**) are shown on the right-hand side.  
   - Each detail appears on a **separate line** for better readability.  

5. **Styling**
   - `exp9.css` is used for layout and styling.  
   - The page is divided into two sections:
     - **Left Section:** Displays the list of student names.  
     - **Right Section:** Displays the selected student’s details.  

---

## Usage
1. Open `index.html` in your browser.  
2. You will see a list of student names on the left side.  
3. Click on any student’s name to view their details on the right side.  

---

## Learning Outcomes
- Understanding **Object-Oriented Programming (OOP)** in JavaScript.  
- Using **class inheritance** (`extends`) to build upon base classes.  
- Manipulating the **DOM** dynamically using JavaScript.  
- Applying **CSS styling** for structured layout and improved user experience.  
- Organizing a project into **separate files** (`HTML`, `CSS`, `JS`) for better maintainability.  

## Example Output  

Clicking on **Alice** will display:  
Role: Student
Name: Alice
Age: 20
Course: Computer Science