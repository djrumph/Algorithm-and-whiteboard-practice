class Test{
    constructor(subject, grade, hours){
        this.subject = subject;
        this.grade = grade;
        this.hours = hours;
    }

    courseInfo(){
          return `The course is:  ${this.subject}, the hours are: ${this.hours}, and your grade was: ${this.grade}`;
    }

}

let test1 = new Test("Calculus", "A", 4);

let test2 = new Test("Algebra", "A", 4);


console.log(test1.courseInfo());

