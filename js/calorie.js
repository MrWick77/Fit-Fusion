const calories = document.querySelector(".calorie .result .calories");
const cbtn = document.querySelector(".calorie .result .calculate");
const age = document.querySelector(".calorie form #age");
const height = document.querySelector(".calorie form #height");
const weight = document.querySelector(".calorie form #weight");
const errormsg = document.querySelector(".calorie .result .error");
const activity = document.querySelector(".calorie form #activity");

const calculateTDEE = (BMR, activityLevel) => {
    switch (activityLevel) {
        case "Sedentary":
            return BMR * 1.2;
        case "Lightly Active":
            return BMR * 1.375;
        case "Moderately Active":
            return BMR * 1.55;
        case "Very Active":
            return BMR * 1.725;
        case "Extra Active":
            return BMR * 1.9;
        default:
            return BMR;
    }
};

cbtn.addEventListener("click", () => {
    if (
        age.classList.contains("invalid") ||
        height.classList.contains("invalid") ||
        weight.classList.contains("invalid")
    ) {
        errormsg.classList.add("active");
        return;
    }

    errormsg.classList.remove("active");
    let genderValue = document.querySelector(
        ".calorie form input[name='gender']:checked"
    ).value;
    let BMR =
        genderValue === "male"
            ? 88.362 + 13.397 * weight.value + 4.799 * height.value - 5.677 * age.value
            : 447.593 + 9.247 * weight.value + 3.098 * height.value - 4.330 * age.value;

    let TDEE = calculateTDEE(BMR, activity.value);
    calories.innerHTML = TDEE.toFixed(2);
});

age.addEventListener("input", (e) => {
    let ageValue = e.target.value;

    if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
        age.classList.add("invalid");
    } else {
        age.classList.remove("invalid");
    }
});

height.addEventListener("input", (e) => {
    let heightValue = e.target.value;

    if (!heightValue || isNaN(heightValue) || heightValue < 0) {
        height.classList.add("invalid");
    } else {
        height.classList.remove("invalid");
    }
});

weight.addEventListener("input", (e) => {
    let weightValue = e.target.value;

    if (!weightValue || isNaN(weightValue) || weightValue < 30) {
        weight.classList.add("invalid");
    } else {
        weight.classList.remove("invalid");
    }
});
