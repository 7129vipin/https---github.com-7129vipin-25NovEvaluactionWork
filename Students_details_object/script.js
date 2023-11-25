function Student(name, roll_no, _class, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this._class = _class;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    
    this.printTop3Subjects = function () {
        
        let subjects = Object.keys(this.marks_of_5_subjects);
        let sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        
        
        console.log("Top 3 Subjects:");
        for (let i = 0; i < Math.min(3, sortedSubjects.length); i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]} - ${this.marks_of_5_subjects[sortedSubjects[i]]}`);
        }
    };

    
    this.printReportCard = function () {
        console.log("     REPORT CARD    ");
        
        console.log(` Name     - ${this.name} `);
        console.log(` Roll no. - ${this.roll_no}    `);
        console.log(` Class    - ${this._class}       `);
        console.log(` Section  - ${this.section}       `);

        
        for (const subject in this.marks_of_5_subjects) {
            console.log(` ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${this.marks_of_5_subjects[subject]}    `);
        }

        
        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, marks) => sum + marks, 0);
        let percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(` Percentage - ${percentage.toFixed(1)} % `);
        
    };
}


let student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

student1.printTop3Subjects();
student1.printReportCard();
