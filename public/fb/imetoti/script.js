function dothejob(data) {

    var bukva = data.first_name.substr(0,1).toLowerCase()
    if (bukva == "a" || bukva == "а") {
        return "0";
    } else if (bukva == "б" || bukva == "b") {
        return "1";
    } else if (bukva == "в" || bukva == "v") {
        return "2";
    } else if (bukva == "г" || bukva == "g") {
        return "3";
    } else if (bukva == "д" || bukva == "d") {
        return "4";
    } else if (bukva == "е" || bukva == "e") {
        return "5";
    } else if (bukva == "ж" || bukva == "j") {
        return "6";
    } else if (bukva == "з" || bukva == "z") {
        return "7";
    } else if (bukva == "и" || bukva == "i") {
        return "8";
    } else if (bukva == "к" || bukva == "k") {
        return "10";
    } else if (bukva == "л" || bukva == "l") {
        return "11";
    } else if (bukva == "м" || bukva == "m") {
        return "12";
    } else if (bukva == "н" || bukva == "n") {
        return "13";
    } else if (bukva == "о" || bukva == "o") {
        return "14";
    } else if (bukva == "п" || bukva == "p") {
        return "15";
    } else if (bukva == "р" || bukva == "r") {
        return "16";
    } else if (bukva == "с" || bukva == "s") {
        return "17";
    } else if (bukva == "т" || bukva == "t") {
        return "18";
    } else if (bukva == "у" || bukva == "u") {
        return "19";
    } else if (bukva == "ф" || bukva == "f") {
        return "20";
    } else if (bukva == "х" || bukva == "h") {
        return "21";
    } else if (bukva == "ц" || bukva == "c") {
        return "22";
    } else {
        return "empty";
    }


}

 

 