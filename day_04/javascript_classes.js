class Parent {
  constructor(firstName, lastName, country, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }
  getPersonalInfo() {
    return `${this.firstName} ${this.lastName}, a ${this.title} developer base in ${this.country}`;
  }
  parentMethod() {}
}

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title);
    this.skills = skills;
  }

  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(" ") : "No skills found";
  }
  childMethod() {}
}

const skills = ["HTML", "CSS", "JS", "React"];

const child = new Child(
  "Abiyu",
  "Nigussie",
  "Ethiopia",
  "FullStack Developer",
  skills
);

console.log(child.getSkills());
