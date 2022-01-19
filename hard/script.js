function getBMI(mass, height) {
    return mass / height ** 2;
  }

let tom = {
    mass: "8",
    height: "9",
    BMI: function () {
        return getBMI(tom.mass, tom.height);
      },
    };


let jerry = {
    mass: "45",
    height: "10",
    BMI: function () {
        return getBMI(jerry.mass, jerry.height);
      },
    };

let tomHigherBMI = tom.BMI() > jerry.BMI();

console.log(`Is tom’s BMI higher than jerry’s? ${tomHigherBMI}`);