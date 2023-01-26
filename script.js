console.log("test")

document.getElementById("btnChecker").addEventListener("click", checker);

let invillageless15 = "49";
let invillageover15 = "145";
let invillageover75 = "";

let outvillageless20 = "49";
let outvillageover20 = "145";
let outvillageover135 = "";

let motorwayless15 = "49";
let motorwayover20 = "145";
let motorwayover75 = "";

function checker() {
    const newDiv = document.createElement("div");
    let dspeed = document.getElementById("speed").value;
    let speed = dspeed - 3;
    const drivenSpeed = document.createTextNode("Your driven speed minus the tolerance: " + speed);
    if (speed >= 50) {
        if (document.getElementById('invillage').checked) {
            console.log("location=invillage");
            console.log("speed=" + speed);
            const drivenLocation = document.createTextNode("Your Location: In a village")
            document.body.appendChild(drivenLocation);
            document.body.appendChild(document.createElement("br"));
            document.body.appendChild(drivenSpeed);
            document.body.appendChild(document.createElement("br"));
            if (speed <= 65) {
                console.log(invillageless15);
                const gotfined = document.createTextNode("Your fine:  " + invillageless15 + "€")
                document.body.appendChild(gotfined);
            } else if (speed >= 70) {
                console.log(invillageover15);
                const gotfined = document.createTextNode("Your fine:  " + invillageover15 + "€ and 2 points deducted")
                document.body.appendChild(gotfined);
            } else if (speed >= 75) {
                console.log(invillageover75);
                const gotfined = document.createTextNode("Your fine:  " + invillageover75 + "€")
                document.body.appendChild(gotfined);
            }
        } else if (document.getElementById('outvillage').checked) {
            console.log("location=outvillage")
            console.log("speed=" + speed);
            const drivenLocation = document.createTextNode("Your Location: Outsida a village")
            document.body.appendChild(drivenLocation);
            document.body.appendChild(document.createElement("br"));
            document.body.appendChild(drivenSpeed);
            document.body.appendChild(document.createElement("br"));
            if (speed <= 65) {
                console.log(outvillageless20);
                const gotfined = document.createTextNode("Your fine:  " + outvillageless20 + "€")
                document.body.appendChild(gotfined);
            } else if (speed >= 70) {
                console.log(outvillageover20);
                const gotfined = document.createTextNode("Your fine:  " + outvillageover20 + "€ and 2 points deducted")
                document.body.appendChild(gotfined);
            } else if (speed >= 75) {
                console.log(outvillageover135);
                const gotfined = document.createTextNode("Your fine:  " + outvillageover135 + "€")
                document.body.appendChild(gotfined);
            }
        } else if (document.getElementById('motorway').checked) {
            console.log("location=motorway")
            console.log("speed=" + speed);
            const drivenLocation = document.createTextNode("Your Location: On a motorway ")
            document.body.appendChild(drivenLocation);
            document.body.appendChild(document.createElement("br"));
            document.body.appendChild(drivenSpeed);
            document.body.appendChild(document.createElement("br"));
            if (speed <= 65) {
                console.log(motorwayless15);
                const gotfined = document.createTextNode("Your fine:  " + motorwayless15 + "€")
                document.body.appendChild(gotfined);
            } else if (speed >= 70) {
                console.log(motorwayover20);
                const gotfined = document.createTextNode("Your fine:  " + motorwayover20 + "€ and 2 points deducted")
                document.body.appendChild(gotfined);
            } else if (speed >= 75) {
                console.log(motorwayover75);
                const gotfined = document.createTextNode("Your fine:  " + motorwayover75 + "€")
                document.body.appendChild(gotfined);
            }
        }
    } else {
        console.log("no fine");
        const nofine = document.createTextNode("You were under the speedlimit, so you will receive no fine.")
        document.body.appendChild(nofine);
    }
}
document.getElementById("reload").addEventListener("click", reloadpage);

function reloadpage() {
    location.reload();
}