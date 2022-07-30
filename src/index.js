module.exports = function toReadable (numb) {

 
 
        let sotniNumber, desyatkiNumber, edinkiNumber;
        if (isNaN(numb) || numb > 999 || numb % 1 !== 0) {
            return -1;

        }
        else {

            let sotni = numb / 100;
            if (sotni > 0 && sotni < 1) // осталось со старого кода, который был построен не как функция (если будет время то уберу)
            {
                sotniNumber = "";
                
            }
            else {
                if (sotni >= 1 && sotni < 2) {
                    sotniNumber = "one hundred";
                }
                else {
                    if (sotni >= 2 && sotni < 3) {
                        sotniNumber = "two hundred";
                    }
                    else {
                        if (sotni >= 3 && sotni < 4) {
                            sotniNumber = "three hundred";
                        }
                        else {
                            if (sotni >= 4 && sotni < 5) {
                                sotniNumber = "four hundred";
                            }
                            else {
                                if (sotni >= 5 && sotni < 6) {
                                    sotniNumber = "five hundred";
                                }
                                else {
                                    if (sotni >= 6 && sotni < 7) {
                                        sotniNumber = "six hundred";
                                    }
                                    else {
                                        if (sotni >= 7 && sotni < 8) {
                                            sotniNumber = "seven hundred";
                                        }
                                        else {
                                            if (sotni >= 8 && sotni < 9) {
                                                sotniNumber = "eight hundred";
                                            }
                                            else {
                                                if (sotni >= 9 ) {
                                                    sotniNumber = "nine hundred";
                                                } else {
                                                    sotniNumber = "zero"
                                                }
                                                
                                            }
                                        }
                                    }

                                }

                            }

                        }
                    }
                }
            }
            let desyatki = (numb % 100) / 10;
            if (desyatki >= 0 && desyatki < 1) {
                desyatkiNumber = "";
            }
            else {
                if (desyatki >= 1 && desyatki < 2) {

                    switch (desyatki) {
                        case 1: desyatkiNumber = "ten"; break;
                        case 1.1: desyatkiNumber = "eleven"; break;
                        case 1.2: desyatkiNumber = "twelve"; break;
                        case 1.3: desyatkiNumber = "thirteen"; break;
                        case 1.4: desyatkiNumber = "fourteen"; break;
                        case 1.5: desyatkiNumber = "fifteen"; break;
                        case 1.6: desyatkiNumber = "sixteen"; break;
                        case 1.7: desyatkiNumber = "seventeen"; break;
                        case 1.8: desyatkiNumber = "eighteen"; break;
                        case 1.9: desyatkiNumber = "nineteen"; break;


                    }

                }


                else {
                    if (desyatki >= 2 && desyatki < 3) {
                        desyatkiNumber = "twenty";
                    }
                    else {
                        if (desyatki >= 3 && desyatki < 4) {
                            desyatkiNumber = "thirty";
                        }
                        else {
                            if (desyatki >= 4 && desyatki < 5) {
                                desyatkiNumber = "forty";
                            }
                            else {
                                if (desyatki >= 5 && desyatki < 6) {
                                    desyatkiNumber = "fifty";
                                }
                                else {
                                    if (desyatki >= 6 && desyatki < 7) {
                                        desyatkiNumber = "sixty";
                                    }
                                    else {
                                        if (desyatki >= 7 && desyatki < 8) {
                                            desyatkiNumber = "seventy";
                                        }
                                        else {
                                            if (desyatki >= 8 && desyatki < 9) {
                                                desyatkiNumber = "eighty";
                                            }
                                            else {

                                                if (desyatki >= 9 && desyatki < 10) {
                                                    desyatkiNumber = "ninety";
                                                }
                                                else {
                                                    desyatkiNumber = "";
                                                }
                                            }
                                        }
                                    }

                                }

                            }

                        }
                    }
                }
            }
            let edinki = (numb % 100) % 10;
            if (edinki >= 0 && edinki < 1 || desyatki >= 1 && desyatki < 2) { edinkiNumber = ""; }
            else {


                switch (edinki) {
                    case 1: edinkiNumber = "one"; break;
                    case 2: edinkiNumber = "two"; break;
                    case 3: edinkiNumber = "three"; break;
                    case 4: edinkiNumber = "four"; break;
                    case 5: edinkiNumber = "five"; break;
                    case 6: edinkiNumber = "six"; break;
                    case 7: edinkiNumber = "seven"; break;
                    case 8: edinkiNumber = "eight"; break;
                    case 9: edinkiNumber = "nine"; break;


                }
            }

            //  sotniNumber + desyatkiNumber + edinkiNumber

             let result = []
             if (sotniNumber == ""){
                
             } else {
                result.push(sotniNumber)
             }
             
             if (desyatkiNumber == ""){
                
            } else {
               result.push(desyatkiNumber)
            }
            
            if (edinkiNumber == ""){
                
            } else {
               result.push(edinkiNumber)
            }



            return result.join(" ")
             
        }


    }

