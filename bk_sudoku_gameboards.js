"use strict";

function createGameBoard(size){

    var htmlCode = "";

    switch(size){

        case 5:
            htmlCode +='<tbody>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd11" class="sdCell sdRow1 sdCol1 sdBox1 boxStyle3"></td>';
            htmlCode +='<td id="sd12" class="sdCell sdRow1 sdCol2 sdBox1 boxStyle3"></td>';
            htmlCode +='<td id="sd13" class="sdCell sdRow1 sdCol3 sdBox1 boxStyle3"></td>';
            htmlCode +='<td id="sd14" class="sdCell sdRow1 sdCol4 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd15" class="sdCell sdRow1 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd21" class="sdCell sdRow2 sdCol1 sdBox1 boxStyle3"></td>';
            htmlCode +='<td id="sd22" class="sdCell sdRow2 sdCol2 sdBox1 boxStyle3"></td>';
            htmlCode +='<td id="sd23" class="sdCell sdRow2 sdCol3 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd24" class="sdCell sdRow2 sdCol4 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd25" class="sdCell sdRow2 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd31" class="sdCell sdRow3 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd32" class="sdCell sdRow3 sdCol2 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd33" class="sdCell sdRow3 sdCol3 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd34" class="sdCell sdRow3 sdCol4 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd35" class="sdCell sdRow3 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd41" class="sdCell sdRow4 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd42" class="sdCell sdRow4 sdCol2 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd43" class="sdCell sdRow4 sdCol3 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd44" class="sdCell sdRow4 sdCol4 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd45" class="sdCell sdRow4 sdCol5 sdBox5 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd51" class="sdCell sdRow5 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd52" class="sdCell sdRow5 sdCol2 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd53" class="sdCell sdRow5 sdCol3 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd54" class="sdCell sdRow5 sdCol4 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd55" class="sdCell sdRow5 sdCol5 sdBox5 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='</tbody>';

            break;

        case 6:
            htmlCode +='<tbody>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd11" class="sdCell sdRow1 sdCol1 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd12" class="sdCell sdRow1 sdCol2 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd13" class="sdCell sdRow1 sdCol3 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd14" class="sdCell sdRow1 sdCol4 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd15" class="sdCell sdRow1 sdCol5 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd16" class="sdCell sdRow1 sdCol6 sdBox2 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd21" class="sdCell sdRow2 sdCol1 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd22" class="sdCell sdRow2 sdCol2 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd23" class="sdCell sdRow2 sdCol3 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd24" class="sdCell sdRow2 sdCol4 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd25" class="sdCell sdRow2 sdCol5 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd26" class="sdCell sdRow2 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd31" class="sdCell sdRow3 sdCol1 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd32" class="sdCell sdRow3 sdCol2 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd33" class="sdCell sdRow3 sdCol3 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd34" class="sdCell sdRow3 sdCol4 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd35" class="sdCell sdRow3 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd36" class="sdCell sdRow3 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd41" class="sdCell sdRow4 sdCol1 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd42" class="sdCell sdRow4 sdCol2 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd43" class="sdCell sdRow4 sdCol3 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd44" class="sdCell sdRow4 sdCol4 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd45" class="sdCell sdRow4 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd46" class="sdCell sdRow4 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd51" class="sdCell sdRow5 sdCol1 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd52" class="sdCell sdRow5 sdCol2 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd53" class="sdCell sdRow5 sdCol3 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd54" class="sdCell sdRow5 sdCol4 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd55" class="sdCell sdRow5 sdCol5 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd56" class="sdCell sdRow5 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd61" class="sdCell sdRow6 sdCol1 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd62" class="sdCell sdRow6 sdCol2 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd63" class="sdCell sdRow6 sdCol3 sdBox5 boxStyle3"></td>';
            htmlCode +='<td id="sd64" class="sdCell sdRow6 sdCol4 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd65" class="sdCell sdRow6 sdCol5 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd66" class="sdCell sdRow6 sdCol6 sdBox6 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='</tbody>';

            PREFILLS = 0.28;
            break;

        case 7:
            htmlCode +='<tbody>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd11" class="sdCell sdRow1 sdCol1 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd12" class="sdCell sdRow1 sdCol2 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd13" class="sdCell sdRow1 sdCol3 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd14" class="sdCell sdRow1 sdCol4 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd15" class="sdCell sdRow1 sdCol5 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd16" class="sdCell sdRow1 sdCol6 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd17" class="sdCell sdRow1 sdCol7 sdBox2 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd21" class="sdCell sdRow2 sdCol1 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd22" class="sdCell sdRow2 sdCol2 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd23" class="sdCell sdRow2 sdCol3 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd24" class="sdCell sdRow2 sdCol4 sdBox1 boxStyle2"></td>';
            htmlCode +='<td id="sd25" class="sdCell sdRow2 sdCol5 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd26" class="sdCell sdRow2 sdCol6 sdBox2 boxStyle3"></td>';
            htmlCode +='<td id="sd27" class="sdCell sdRow2 sdCol7 sdBox2 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd31" class="sdCell sdRow3 sdCol1 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd32" class="sdCell sdRow3 sdCol2 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd33" class="sdCell sdRow3 sdCol3 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd34" class="sdCell sdRow3 sdCol4 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd35" class="sdCell sdRow3 sdCol5 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd36" class="sdCell sdRow3 sdCol6 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd37" class="sdCell sdRow3 sdCol7 sdBox5 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd41" class="sdCell sdRow4 sdCol1 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd42" class="sdCell sdRow4 sdCol2 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd43" class="sdCell sdRow4 sdCol3 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd44" class="sdCell sdRow4 sdCol4 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd45" class="sdCell sdRow4 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd46" class="sdCell sdRow4 sdCol6 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd47" class="sdCell sdRow4 sdCol7 sdBox5 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd51" class="sdCell sdRow5 sdCol1 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd52" class="sdCell sdRow5 sdCol2 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd53" class="sdCell sdRow5 sdCol3 sdBox3 boxStyle3"></td>';
            htmlCode +='<td id="sd54" class="sdCell sdRow5 sdCol4 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd55" class="sdCell sdRow5 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd56" class="sdCell sdRow5 sdCol6 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd57" class="sdCell sdRow5 sdCol7 sdBox5 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd61" class="sdCell sdRow6 sdCol1 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd62" class="sdCell sdRow6 sdCol2 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd63" class="sdCell sdRow6 sdCol3 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd64" class="sdCell sdRow6 sdCol4 sdBox7 boxStyle3"></td>';
            htmlCode +='<td id="sd65" class="sdCell sdRow6 sdCol5 sdBox7 boxStyle3"></td>';
            htmlCode +='<td id="sd66" class="sdCell sdRow6 sdCol6 sdBox7 boxStyle3"></td>';
            htmlCode +='<td id="sd67" class="sdCell sdRow6 sdCol7 sdBox7 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd71" class="sdCell sdRow7 sdCol1 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd72" class="sdCell sdRow7 sdCol2 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd73" class="sdCell sdRow7 sdCol3 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd74" class="sdCell sdRow7 sdCol4 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd75" class="sdCell sdRow7 sdCol5 sdBox7 boxStyle3"></td>';
            htmlCode +='<td id="sd76" class="sdCell sdRow7 sdCol6 sdBox7 boxStyle3"></td>';
            htmlCode +='<td id="sd77" class="sdCell sdRow7 sdCol7 sdBox7 boxStyle3"></td>';
            htmlCode +='</tr>';
            htmlCode +='</tbody>';

            break;

        case 8:
            htmlCode +='<tbody>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd11" class="sdCell sdRow1 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd12" class="sdCell sdRow1 sdCol2 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd13" class="sdCell sdRow1 sdCol3 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd14" class="sdCell sdRow1 sdCol4 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd15" class="sdCell sdRow1 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd16" class="sdCell sdRow1 sdCol6 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd17" class="sdCell sdRow1 sdCol7 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd18" class="sdCell sdRow1 sdCol8 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd21" class="sdCell sdRow2 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd22" class="sdCell sdRow2 sdCol2 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd23" class="sdCell sdRow2 sdCol3 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd24" class="sdCell sdRow2 sdCol4 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd25" class="sdCell sdRow2 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd26" class="sdCell sdRow2 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd27" class="sdCell sdRow2 sdCol7 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd28" class="sdCell sdRow2 sdCol8 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd31" class="sdCell sdRow3 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd32" class="sdCell sdRow3 sdCol2 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd33" class="sdCell sdRow3 sdCol3 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd34" class="sdCell sdRow3 sdCol4 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd35" class="sdCell sdRow3 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd36" class="sdCell sdRow3 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd37" class="sdCell sdRow3 sdCol7 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd38" class="sdCell sdRow3 sdCol8 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd41" class="sdCell sdRow4 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd42" class="sdCell sdRow4 sdCol2 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd43" class="sdCell sdRow4 sdCol3 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd44" class="sdCell sdRow4 sdCol4 sdBox3 boxStyle2"></td>';
            htmlCode +='<td id="sd45" class="sdCell sdRow4 sdCol5 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd46" class="sdCell sdRow4 sdCol6 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd47" class="sdCell sdRow4 sdCol7 sdBox4 boxStyle1"></td>';
            htmlCode +='<td id="sd48" class="sdCell sdRow4 sdCol8 sdBox2 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd51" class="sdCell sdRow5 sdCol1 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd52" class="sdCell sdRow5 sdCol2 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd53" class="sdCell sdRow5 sdCol3 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd54" class="sdCell sdRow5 sdCol4 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd55" class="sdCell sdRow5 sdCol5 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd56" class="sdCell sdRow5 sdCol6 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd57" class="sdCell sdRow5 sdCol7 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd58" class="sdCell sdRow5 sdCol8 sdBox8 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd61" class="sdCell sdRow6 sdCol1 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd62" class="sdCell sdRow6 sdCol2 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd63" class="sdCell sdRow6 sdCol3 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd64" class="sdCell sdRow6 sdCol4 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd65" class="sdCell sdRow6 sdCol5 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd66" class="sdCell sdRow6 sdCol6 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd67" class="sdCell sdRow6 sdCol7 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd68" class="sdCell sdRow6 sdCol8 sdBox8 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd71" class="sdCell sdRow7 sdCol1 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd72" class="sdCell sdRow7 sdCol2 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd73" class="sdCell sdRow7 sdCol3 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd74" class="sdCell sdRow7 sdCol4 sdBox6 boxStyle1"></td>';
            htmlCode +='<td id="sd75" class="sdCell sdRow7 sdCol5 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd76" class="sdCell sdRow7 sdCol6 sdBox7 boxStyle2"></td>';
            htmlCode +='<td id="sd77" class="sdCell sdRow7 sdCol7 sdBox8 boxStyle1"></td>';
            htmlCode +='<td id="sd78" class="sdCell sdRow7 sdCol8 sdBox8 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd81" class="sdCell sdRow8 sdCol1 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd82" class="sdCell sdRow8 sdCol2 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd83" class="sdCell sdRow8 sdCol3 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd84" class="sdCell sdRow8 sdCol4 sdBox5 boxStyle2"></td>';
            htmlCode +='<td id="sd85" class="sdCell sdRow8 sdCol5 sdBox8 boxStyle1"></td>';
            htmlCode +='<td id="sd86" class="sdCell sdRow8 sdCol6 sdBox8 boxStyle1"></td>';
            htmlCode +='<td id="sd87" class="sdCell sdRow8 sdCol7 sdBox8 boxStyle1"></td>';
            htmlCode +='<td id="sd88" class="sdCell sdRow8 sdCol8 sdBox8 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='</tbody>';

            break;

        case 9:
            htmlCode +='<tbody>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd11" class="sdCell sdRow1 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd12" class="sdCell sdRow1 sdCol2 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd13" class="sdCell sdRow1 sdCol3 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd14" class="sdCell sdRow1 sdCol4 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd15" class="sdCell sdRow1 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd16" class="sdCell sdRow1 sdCol6 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd17" class="sdCell sdRow1 sdCol7 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd18" class="sdCell sdRow1 sdCol8 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd19" class="sdCell sdRow1 sdCol9 sdBox3 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd21" class="sdCell sdRow2 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd22" class="sdCell sdRow2 sdCol2 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd23" class="sdCell sdRow2 sdCol3 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd24" class="sdCell sdRow2 sdCol4 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd25" class="sdCell sdRow2 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd26" class="sdCell sdRow2 sdCol6 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd27" class="sdCell sdRow2 sdCol7 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd28" class="sdCell sdRow2 sdCol8 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd29" class="sdCell sdRow2 sdCol9 sdBox3 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd31" class="sdCell sdRow3 sdCol1 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd32" class="sdCell sdRow3 sdCol2 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd33" class="sdCell sdRow3 sdCol3 sdBox1 boxStyle1"></td>';
            htmlCode +='<td id="sd34" class="sdCell sdRow3 sdCol4 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd35" class="sdCell sdRow3 sdCol5 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd36" class="sdCell sdRow3 sdCol6 sdBox2 boxStyle2"></td>';
            htmlCode +='<td id="sd37" class="sdCell sdRow3 sdCol7 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd38" class="sdCell sdRow3 sdCol8 sdBox3 boxStyle1"></td>';
            htmlCode +='<td id="sd39" class="sdCell sdRow3 sdCol9 sdBox3 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd41" class="sdCell sdRow4 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd42" class="sdCell sdRow4 sdCol2 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd43" class="sdCell sdRow4 sdCol3 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd44" class="sdCell sdRow4 sdCol4 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd45" class="sdCell sdRow4 sdCol5 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd46" class="sdCell sdRow4 sdCol6 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd47" class="sdCell sdRow4 sdCol7 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd48" class="sdCell sdRow4 sdCol8 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd49" class="sdCell sdRow4 sdCol9 sdBox6 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd51" class="sdCell sdRow5 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd52" class="sdCell sdRow5 sdCol2 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd53" class="sdCell sdRow5 sdCol3 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd54" class="sdCell sdRow5 sdCol4 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd55" class="sdCell sdRow5 sdCol5 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd56" class="sdCell sdRow5 sdCol6 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd57" class="sdCell sdRow5 sdCol7 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd58" class="sdCell sdRow5 sdCol8 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd59" class="sdCell sdRow5 sdCol9 sdBox6 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd61" class="sdCell sdRow6 sdCol1 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd62" class="sdCell sdRow6 sdCol2 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd63" class="sdCell sdRow6 sdCol3 sdBox4 boxStyle2"></td>';
            htmlCode +='<td id="sd64" class="sdCell sdRow6 sdCol4 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd65" class="sdCell sdRow6 sdCol5 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd66" class="sdCell sdRow6 sdCol6 sdBox5 boxStyle1"></td>';
            htmlCode +='<td id="sd67" class="sdCell sdRow6 sdCol7 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd68" class="sdCell sdRow6 sdCol8 sdBox6 boxStyle2"></td>';
            htmlCode +='<td id="sd69" class="sdCell sdRow6 sdCol9 sdBox6 boxStyle2"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd71" class="sdCell sdRow7 sdCol1 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd72" class="sdCell sdRow7 sdCol2 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd73" class="sdCell sdRow7 sdCol3 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd74" class="sdCell sdRow7 sdCol4 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd75" class="sdCell sdRow7 sdCol5 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd76" class="sdCell sdRow7 sdCol6 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd77" class="sdCell sdRow7 sdCol7 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd78" class="sdCell sdRow7 sdCol8 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd79" class="sdCell sdRow7 sdCol9 sdBox9 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd81" class="sdCell sdRow8 sdCol1 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd82" class="sdCell sdRow8 sdCol2 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd83" class="sdCell sdRow8 sdCol3 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd84" class="sdCell sdRow8 sdCol4 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd85" class="sdCell sdRow8 sdCol5 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd86" class="sdCell sdRow8 sdCol6 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd87" class="sdCell sdRow8 sdCol7 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd88" class="sdCell sdRow8 sdCol8 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd89" class="sdCell sdRow8 sdCol9 sdBox9 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='<tr>';
            htmlCode +='<td id="sd91" class="sdCell sdRow9 sdCol1 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd92" class="sdCell sdRow9 sdCol2 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd93" class="sdCell sdRow9 sdCol3 sdBox7 boxStyle1"></td>';
            htmlCode +='<td id="sd94" class="sdCell sdRow9 sdCol4 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd95" class="sdCell sdRow9 sdCol5 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd96" class="sdCell sdRow9 sdCol6 sdBox8 boxStyle2"></td>';
            htmlCode +='<td id="sd97" class="sdCell sdRow9 sdCol7 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd98" class="sdCell sdRow9 sdCol8 sdBox9 boxStyle1"></td>';
            htmlCode +='<td id="sd99" class="sdCell sdRow9 sdCol9 sdBox9 boxStyle1"></td>';
            htmlCode +='</tr>';
            htmlCode +='</tbody>';

            break;
    }


    /* MOVE THIS TO THE MAIN FLOW */

    var sdTable = document.getElementById("sudokuTable");
    sdTable.innerHTML = htmlCode;

    /* CSS adjustment... 95vmin is the table width (or height).
    90vmin for the cells, 5 vmin for borders    */

    /* globals size */
    sdTable.style.borderSpacing= (10/(size+1)) + "vmin";

    var sdCell = document.getElementsByClassName("sdCell");
    var iLength = sdCell.length;
    for (var i = 0; i < iLength; i++) {
        sdCell[i].style.fontSize = (80/size)*0.4    + "vmin";
        sdCell[i].style.height = (80/size)          + "vmin";
        sdCell[i].style.width = (80/size)           + "vmin";
    }

}


















































































