class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setAge(newAge) {
      this.age = newAge;
    }
  
    setEmail(newEmail) {
      this.email = newEmail;
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person("selva", "ananth", 30, "anand@example.com");
  
  // Access and modify properties and methods
  console.log("Full Name:", person1.getFullName());
  console.log("Age:", person1.getAge());
  console.log("Email:", person1.getEmail());
  
  person1.setAge(31);
  person1.setEmail("selva.doe@example.com");
  
  console.log("Updated Age:", person1.getAge());
  console.log("Updated Email:", person1.getEmail());
  