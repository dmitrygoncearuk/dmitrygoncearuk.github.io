var digitA = "", substring = ".";
var digitB = "", substring = ".";
var result = 0;
var action; //sets sum/sub/div/mult... etc
var fracted = false;
var digitAfilled = false;
var digitBfilled = false;

function Check(clicked_id)
{

    //digitA and digitB fullfill
    if (clicked_id < 10 && digitAfilled == false)
    {
        digitA += clicked_id;
    }
    else if (clicked_id < 10 && digitAfilled == true) digitB += clicked_id;
    else if (clicked_id == 10 && fracted == false && digitAfilled == false)
    {
        digitA += ".";
        fracted = true;
    }
    else if (clicked_id == 10 && fracted == false && digitAfilled == true)
    {
        digitB += ".";
        fracted = true;
    }

    //Operators
    else if (clicked_id > 15 && clicked_id < 20 && digitBfilled == false)
    {
        SetAction(clicked_id);
        digitAfilled = true;
        fracted = false;
        document.getElementById("userInput").value = "";
    }
    else if (clicked_id > 15 && clicked_id < 20 && digitBfilled == true)
    {
        SetAction(clicked_id);
        digitAfilled = true;
        fracted = false;
        digitB = "";
        digitBfilled = false;
        document.getElementById("userInput").value = "";
    }

    //Calculation one operand
    else if (clicked_id > 10 && clicked_id < 16 && digitAfilled == false && digitBfilled == false)
    {
        digitA = Modify(clicked_id, digitA);
    }
    else if (clicked_id > 10 && clicked_id < 16 && digitAfilled == true && digitBfilled == false)
    {
        digitB = Modify(clicked_id, digitB);
    }
    else if (clicked_id > 10 && clicked_id < 16 && digitAfilled == true && digitBfilled == true)
    {
        digitA = Modify(clicked_id, digitA);
    }

    //Calculation of two operands
    else if (clicked_id == 23 && action != null)
    {
        switch (action)
        {
            case "sum":
                digitA = +digitA + +digitB;
                digitBfilled = true;
                break;
            case "sub":
                digitA = digitA - digitB;
                digitBfilled = true;
                break;
            case "mult":
                digitA = digitA * digitB;
                digitBfilled = true;
                break;
            case "div":
                digitA = digitA / digitB;
                digitBfilled = true;
                break;
            default:
                alert( 'error' );
        }
    }

    //Full reset
    else if (clicked_id == 22)
    {
        digitA = "";
        digitB = "";
        result = 0;
        action = ""; //sets sum/sub/div/mult/sqr/sqrt
        fracted = false;
        digitAfilled = false;
        gotResult = false;
    }
    //Local reset
    else if (clicked_id == 21 && digitAfilled == false)
    {
        digitA = "";
        fracted = false;
    }
    else if (clicked_id == 21 && digitAfilled == true)
    {
        digitB = "";
        fracted = false;
    }
    //Backspace
    else if (clicked_id == 20 && digitAfilled == false)
    {
        digitA = digitA.slice(0, -1);
        if (!digitA.includes(substring) && fracted == true) fracted = false;
    }
    else if (clicked_id == 20 && digitAfilled == true)
    {
        digitB = digitB.slice(0, -1);
        if (!digitB.includes(substring) && fracted == true) fracted = false;
    }

    //Field setter
    if (digitAfilled == false && digitBfilled == false) document.getElementById("userInput").value = digitA;
    else if (digitAfilled == true && digitBfilled == false) document.getElementById("userInput").value = digitB;
    else if (digitBfilled == true) document.getElementById("userInput").value = digitA;

}

function SetAction(clicked_id)
{
    var switcher = +clicked_id;
    switch (switcher)
    {
        case 16:
            action = "div";
            break;
        case 17:
            action = "mult";
            break;
        case 18:
            action = "sub";
            break;
        case 19:
            action = "sum";
            break;
        default:
            alert( 'error' );
    }
}

function Modify(clicked_id, digit)
{
    var switcher = +clicked_id;
    switch (switcher)
    {
        case 11:
            digit = +digit * -1;
            break;
        case 12:
            digit = digit * digitA / 100;
            break;
        case 13:
            digit = Math.sqrt(digit);
            break;
        case 14:
            digit = digit * digit;
            break;
        case 15:
            digit = 1 / digit;
            break;
        default:
            alert( 'error' );
    }

    return digit;
}