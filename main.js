let xphorizon = 0;
let dlehdrkr = 0;
let xpvertical = 0;
let dlehdtlrks = 0;
let xpwlffid = 0;
let rkrkathr = 0;
let dnjwlrrud = 0;
let gbwltlrks = 0;
let dnjwlffid = 0;

let ahapsxm = 0;
let rkthrqngk = 0;
let rkrkathr1 = 0;
let akckfqngk = 0;
let rkrthreh = 0;
let rkvlfdyxhzm = 0;
let emdthrtlrks = 0;
let emdvlfdyxhzm = 0;
let rkrrkthreh = 0;
let rkavlfdyxhzm = 0;
let dhlqngla = 0;
let vudrbsxhzm = 0;
let akckfrPtn = 0.02;
let vudrbsrkrthreh = 0;
let wndfurrkthreh = 9.8;
let rkdyrnxhzm = 0;
let dkswjsrPtn = 1.5;
let dyrnvudrbsxhzm = 0;
let ehdrlrnehd = 1;

let gjdydxhzm = 0;
let tnaudrPtks = 0;
let rlqhsxhzm = 0;
let zoaahapsxm = 0;
let rkathrql = 0;
let rpm = 2000;
let zoafldwlrrud = 0;
let dyrnrkathr = 0;
let vlsldjswlrrud = 0;
let cncjsrkathr = 0;
let vlsldjsrpm = 0;
let result = 0;
let i = 0;
let j = 0;
let of = 0;
let rkathrqlresult = 0;
let motordlsjtu = 0;
let rkathrrlxhzm = 0;
let motorwjdrurxhzm = 0;
let motorchleoxhzm = 0;

let motorwjdrurxhzmpro = 0;
let motorwjdrurqngk = 0;
let motorchleoxhzmpro = 0;
let motorchleoqngk = 0;
let motorahapsxm = 0;
let rnjswkdahapsxmql = 0;
let motorahapsxmqngk = 0;



const names = new Array(Array('TRS1610A-C140','690','345','14','690.67','49.33','0.8125'),
                        Array('TRS1610A-C200','970','485','20','971.43','48.57','3.08'),
                        Array('TRS1610A-C240','1160','580','24','1163.52','48.48','5.5254'),
                        Array('TRS1610A-C300','1450','725','30','1455.48','48.52','11.31'),
                        Array('TRS1610A-C400','1940','970','40','1941.46','48.52','28.92'),
                        Array('TRS2510A-C90','1520','760','9','694.80','77.20','1.423'),
                        Array('TRS2510A-C125','2100','1050','12.5','959.26','76.74','4.4465'),
                        Array('TRS2510A-C150','2520','1260','15','1153.13','76.88','8.184'),
                        Array('TRS2510A-C190','3200','1600','19','1459.20','76.80','19.260'),
                        Array('TRS2510A-C250','4220','2110','25','1923.08','76.92','39.965'),
                        Array('TRS3212A-C75','2620','1310','6.25','732.76','117.24','2.943'),
                        Array('TRS3212A-C100','3500','1750','8.33','973.21','116.79','6.85'),
                        Array('TRS3212A-C120','4220','2110','10','1172.73','117.27','13.212'),
                        Array('TRS3212A-C150','5260','2630','12.5','1462.96','117.04','26.39'),
                        Array('TRS3212A-C200','7020','3510','16.66','1954.72','117.28','70.380'),
                        Array('TRS4012A-C60','4420','2210','5','736.67','147.33','3.8505'),
                        Array('TRS4012A-C80','5920','2960','6.66','987.83','148.17','10.035'),
                        Array('TRS4012A-C96','7080','3540','8','1182.22','147.78','18.192'),
                        Array('TRS4012A-C120','8840','4420','10','1476.36','147.64','37.496'),
                        Array('TRS4012A-C160','11760','5880','13.33','1962.79','147.21','94.530'),
                        Array('TRS4014A-C60','7740','5160','4.28','737.84','172.16','5.22'),
                        Array('TRS4014A-C80','10350','6900','5.71','987.23','172.77','13.3435'),
                        Array('TRS4014A-C96','12360','8240','6.85','1178.24','171.82','23.328'),
                        Array('TRS4014A-C120','15450','10300','8.57','1472.24','171.76','48.160'),
                        Array('TRS4014A-C160','20640','13760','11.42','1967.82','172.18','131.480'),
                        Array('사용불가','0','0','0','0','0','0','0'));



document.getElementById("akckfrPtn").value = akckfrPtn;
document.getElementById("wndfurrkthreh").value = wndfurrkthreh;
document.getElementById("dkswjsrPtn").value = dkswjsrPtn;
document.getElementById("ehdrlrnehd").value = ehdrlrnehd;
document.getElementById("dhlqngla").value = dhlqngla;
document.getElementById("rpm").value = rpm;

function convert1() {
 
  xphorizon = document.getElementById("xphorizon").value;
  xpvertical = document.getElementById("xpvertical").value;
  dlehdrkr = document.getElementById("dlehdrkr").value;
  xpwlffid = document.getElementById("xpwlffid").value;  
  if(document.getElementById("dlehdtlrks").value==0){dlehdtlrks=0.01;}
  else{dlehdtlrks = document.getElementById("dlehdtlrks").value;}
  dnjwlrrud = document.getElementById("dnjwlrrud").value;
  if(document.getElementById("rkrkathr").value==0){rkrkathr=0.01;}
  else{rkrkathr = document.getElementById("rkrkathr").value;}
  dnjwlffid = document.getElementById("dnjwlffid").value;
  gbwltlrks = document.getElementById("gbwltlrks").value;


  ahapsxm =
    ((xphorizon / 1000) * (xphorizon / 1000) + (xpvertical / 1000) * (xpvertical / 1000))*xpwlffid / 12 +
    dnjwlffid * (dnjwlrrud / 2000) * (dnjwlrrud / 2000);
  document.getElementById("ahapsxm").value = Math.ceil(ahapsxm * 1000) / 1000;  
  rkthrqngk = ahapsxm * rkrrkthreh;
  document.getElementById("rkthrqngk").value = Math.ceil(rkthrqngk * 1000) / 1000;
  rkrkathr1 = rkrkathr;
  document.getElementById("rkrkathr1").value = Math.ceil(rkrkathr * 1000) / 1000;
  akckfqngk =
    (xpwlffid*1+dnjwlffid*1) * wndfurrkthreh * akckfrPtn * xpvertical / 2000;
  document.getElementById("akckfqngk").value = Math.ceil(akckfqngk * 1000) / 1000;
  rkrthreh = rkrrkthreh * rkrkathr1;
  document.getElementById("rkrthreh").value = Math.ceil(rkrthreh * 1000) / 1000;
  rkvlfdyxhzm = (rkthrqngk*1 + akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("rkvlfdyxhzm").value = Math.ceil(rkvlfdyxhzm * 1000) / 1000;
  if(dlehdtlrks<=rkrkathr){emdthrtlrks=1;}
  else{emdthrtlrks = dlehdtlrks - 2 * rkrkathr;}
  document.getElementById("emdthrtlrks").value = Math.ceil(emdthrtlrks * 1000) / 1000;
  emdvlfdyxhzm = (akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("emdvlfdyxhzm").value = Math.ceil(emdvlfdyxhzm * 1000) / 1000;
  rkrrkthreh =
    (dlehdrkr * Math.PI) / 180 / (dlehdtlrks * rkrkathr - rkrkathr * rkrkathr);
  document.getElementById("rkrrkthreh").value = Math.ceil(rkrrkthreh * 1000) / 1000;
  rkavlfdyxhzm = (rkthrqngk*1 + akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("rkavlfdyxhzm").value = Math.ceil(rkavlfdyxhzm * 1000) / 1000;
  dhlqngla = document.getElementById("dhlqngla").value;
  vudrbsxhzm = (rkvlfdyxhzm * 2 + emdvlfdyxhzm) / 3;
  document.getElementById("vudrbsxhzm").value = Math.ceil(vudrbsxhzm * 1000) / 1000;
  if(document.getElementById("akckfrPtn").value==0){akckfrPtn=0.02;}
  else{akckfrPtn = document.getElementById("akckfrPtn").value;}
  vudrbsrkrthreh = ((dlehdrkr / 180) * Math.PI) / dlehdtlrks;
  document.getElementById("vudrbsrkrthreh").value = Math.ceil(vudrbsrkrthreh * 1000) / 1000;
  wndfurrkthreh = document.getElementById("wndfurrkthreh").value;
  rkdyrnxhzm = rkvlfdyxhzm * dkswjsrPtn;
  document.getElementById("rkdyrnxhzm").value = Math.ceil(rkdyrnxhzm * 1000) / 1000;
  if(document.getElementById("dkswjsrPtn").value==0){dkswjsrPtn=0.01;}
  else{dkswjsrPtn = document.getElementById("dkswjsrPtn").value;}
  dyrnvudrbsxhzm = vudrbsxhzm * dkswjsrPtn;
  document.getElementById("dyrnvudrbsxhzm").value =  Math.ceil(dyrnvudrbsxhzm * 1000) / 1000;
  ehdrlrnehd = document.getElementById("ehdrlrnehd").value;
  dyrngkwnd = document.getElementById("dyrngkwnd").value;

  for(i=0; i<25; i++){
    gjdydxhzm = names[i][j+1];
    rlqhsxhzm = names[i][j+2];
    rkathrql = names[i][j+3];
    zoafldwlrrud = names[i][j+4];
    vlsldjswlrrud = names[i][j+5];
    zoaahapsxm = names[i][j+6];
    vlsldjsrpm = Math.floor(60 / 2 / Math.PI * rkathrql * rkrthreh*100000000000000)/100000000000000;    
    rkathrrlxhzm = rkdyrnxhzm/rkathrql;
    tnaudrPtks = Math.cbrt(Math.pow(rlqhsxhzm/rkdyrnxhzm,10))*60000000/vlsldjsrpm/60*(dlehdtlrks*1+gbwltlrks*1)/dlehdtlrks;
    if(tnaudrPtks>=10000){
      break;
    }   
  }

  dyrnrkathr = rpm/vlsldjsrpm;

  document.getElementById("gjdydxhzm").value = gjdydxhzm;
  document.getElementById("rlqhsxhzm").value = rlqhsxhzm;
  document.getElementById("rkathrql").value = rkathrql;
  document.getElementById("zoafldwlrrud").value = zoafldwlrrud;
  document.getElementById("vlsldjswlrrud").value = vlsldjswlrrud;
  document.getElementById("vlsldjsrpm").value = Math.ceil(vlsldjsrpm * 100) / 100;
  document.getElementById("tnaudrPtks").value = Math.floor(tnaudrPtks*1000)/1000;
  document.getElementById("dyrnrkathr").value = Math.floor(dyrnrkathr);
  rpm = document.getElementById("rpm").value;
  document.getElementById("zoaahapsxm").value = zoaahapsxm;
  document.getElementById("result").value = names[i][j];
  
}

function convert2() {
 
  cncjsrkathr = document.getElementById("cncjsrkathr").value;
  document.getElementById("cncjsrkathr").value = cncjsrkathr;
  if(cncjsrkathr<=dyrnrkathr){
    document.getElementById("of").value = "OK";
  }
  else{
    document.getElementById("of").value = "FAIL";
  }

  document.getElementById("rkathrqlresult").value = "1/"+cncjsrkathr;
  motordlsjtu = (ahapsxm*1+zoaahapsxm*1)/Math.pow(rkathrql,2)/Math.pow(cncjsrkathr,2)*10000;
  document.getElementById("motordlsjtu").value = Math.ceil(motordlsjtu*1000)/1000;
  motorwjdrurxhzm = emdvlfdyxhzm*dkswjsrPtn/rkathrql/cncjsrkathr;
  document.getElementById("motorwjdrurxhzm").value = Math.ceil(motorwjdrurxhzm * 100) / 100;
  document.getElementById("rkathrrlxhzm").value = Math.ceil(rkathrrlxhzm * 10) / 10;
  motorchleoxhzm = rkathrrlxhzm/cncjsrkathr;
  document.getElementById("motorchleoxhzm").value = Math.ceil(motorchleoxhzm * 100) / 100;

}


function convert3() {

  motorwjdrurxhzmpro = document.getElementById("motorwjdrurxhzmpro").value;
  motorwjdrurqngk=motorwjdrurxhzm/motorwjdrurxhzmpro;
  document.getElementById("motorwjdrurqngk").value = Math.ceil(motorwjdrurqngk*100);
  motorchleoxhzmpro = document.getElementById("motorchleoxhzmpro").value;
  motorchleoqngk=motorchleoxhzm/motorchleoxhzmpro;
  document.getElementById("motorchleoqngk").value = Math.ceil(motorchleoqngk*100);
  motorahapsxm = document.getElementById("motorahapsxm").value;

  rnjswkdahapsxmql = document.getElementById("rnjswkdahapsxmql").value;
  motorahapsxmqngk = motordlsjtu / rnjswkdahapsxmql / motorahapsxm*100;
  if(motorahapsxmqngk>100){document.getElementById("motorahapsxmqngk").value = "FAIL";}
  else{document.getElementById("motorahapsxmqngk").value = Math.ceil(motorahapsxmqngk*10)/10;}


}


/*
    <section>
      <img class="imgposition"
        src="http://www.joneinc.com/sh_img/hd/top_menu/logo.png"
        width="400px"
      />
    </section>

  
*/

