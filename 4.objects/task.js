function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (marks.length && (typeof this.excluded === "undefined")) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (Array.isArray(this.marks) && this.marks.length) {
        return this.marks.reduce((acc, currentMark) => { return acc + currentMark / this.marks.length }, 0);
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    this.subject = undefined;
    this.marks = undefined;

    this.excluded = reason;
}