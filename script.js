function calculateResult() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let java = Number(document.getElementById("java").value);
    let os = Number(document.getElementById("os").value);
    let aiml = Number(document.getElementById("aiml").value);
    let frontend = Number(document.getElementById("frontend").value);
    let maths = Number(document.getElementById("maths").value);
    let iot = Number(document.getElementById("iot").value);

    if (name === "" || roll === "") {
        alert("Please enter Student Name and Roll Number");
        return;
    }

    let marks = [java, os, aiml, frontend, maths, iot];

    for (let mark of marks) {
        if (mark < 0 || mark > 100) {
            alert("Please enter marks between 0 and 100");
            return;
        }
    }

    // Calculate Total
    let total = java + os + aiml + frontend + maths + iot;

    // Calculate Average
    let average = total / 6;

    // Calculate Grade
    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Check Pass or Fail
    let status;

    if (
        java >= 35 &&
        os >= 35 &&
        aiml >= 35 &&
        frontend >= 35 &&
        maths >= 35 &&
        iot >= 35
    ) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }

    // Display Result
    document.getElementById("studentName").innerHTML =
        "<b>Name:</b> " + name;

    document.getElementById("studentRoll").innerHTML =
        "<b>Roll Number:</b> " + roll;

    document.getElementById("total").innerHTML =
        "<b>Total Marks:</b> " + total + " / 600";

    document.getElementById("average").innerHTML =
        "<b>Average:</b> " + average.toFixed(2) + "%";

    document.getElementById("grade").innerHTML =
        "<b>Grade:</b> " + grade;

    document.getElementById("status").innerHTML =
        "<b>Result:</b> " + status;
}p