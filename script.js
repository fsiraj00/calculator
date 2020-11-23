//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function increases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}
//The following function is called when "Sub" button is clicked.
//Note that it also changes the values of the global variables.
function subtract () {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Sub";
    }
}

//The following function is called when "Mul" button is clicked.
//Note that this function is dependent on the value of global variable. 
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Mul";
    }
}
//The following function is called when "Div" button is clicked.
//Note that this function is dependent on the value of global variable. 
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Div";
    }
}

function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))){
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "^";
    }
}

function power1() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))){
        num = Math.pow(num,2);
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "sqrt" button is clicked.
//Note that this function is dependent on the value of global variable.  
function sqrt() {
    var num = parseInt(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.sqrt(num);
        document.frmCalc.txtNumber.value = num;

    }
}

function floor(){
    var num = parseInt(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.floor(num);
        document.frmCalc.txtNumber.value = num;

    }

}

function round(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.round(num);
        document.frmCalc.txtNumber.value = num;

    }

}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
        //"Sub" button is clicked  the function does subtraction
        if (!(isNaN(num))) {
            if (calc == "Sub"){
                var total = prevCalc- num;
                document.frmCalc.txtNumber.value = total;
            }
        }

    // "*" button is clicked: function does multiplication
    if (!(isNaN(num))) {
        if (calc == "Mul"){
            var total = prevCalc* num;
            document.frmCalc.txtNumber.value = total;
        }
    }


    // "/" button is clicked: the function does division
    if (!(isNaN(num))) {
        if (calc == "Div"){
                    var total = prevCalc/ num;
                    document.frmCalc.txtNumber.value = total;
       }
     }

    if (!(isNaN(num))) {
        if (calc =="^"){
                var total =  Math.pow(prevCalc,num);
                document.frmCalc.txtNumber.value = total;
        }
    }

            
            }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}