function parseCount(parseValue) {
    const val = Number.parseFloat(parseValue);
    if (isNaN(val)) {
        throw Error("Невалидное значение");
    }
    return val;
}



function validateCount(parseValue) {
    try {
        return parseCount(parseValue);
    } catch (e) {
        return e;
    }
}




class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || c + b < a) {
            throw Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }

    }

    get perimeter() {
            return this.a + this.b + this.c;
    }

    get area() {
            const p = this.perimeter / 2;
            const triangleArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
            return Number(triangleArea.toFixed(3));
    }


}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            get area() { return "Ошибка! Треугольник не существует" },
            get perimeter() { return "Ошибка! Треугольник не существует" }
        }
    }
}

