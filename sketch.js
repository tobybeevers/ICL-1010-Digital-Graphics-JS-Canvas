
// This function creates a canvas that is 2000x 100 Pixels and centre the canvas on the Web Page
function setup() {
  let div = createCanvas(1920, 1080);
  div.center();
}
//This is to set a background on the canvas https://p5js.org/reference/#/p5/background  
function draw() {
  background(0,204, 255, 255);

//First is to draw a rainbow https://p5js.org/reference/#/p5/arc
rainbow();
function rainbow() {
  noStroke();
  fill(255, 173, 173);
  arc(800, 420, 890, 790, radians(100), radians(0)); // red band
  fill(255, 214, 165);
  arc(800, 420, 870, 770, radians(100), radians(0)); // orange band
  fill(253, 255, 182);
  arc(800, 420, 850, 750, radians(100), radians(0)); // yellow band
  fill(202, 255, 191);
  arc(800, 420, 830, 730, radians(100), radians(0)); // green band
  fill(155, 246, 255);
  arc(800, 420, 810, 710, radians(100), radians(0)); // blue band
  fill(255, 198, 255);
  arc(800, 420, 790, 690, radians(100), radians(0)); //  pink band
  fill(0,204, 255, 255);
  arc(800, 420, 770, 670, radians(100), radians(0));
 }
// Draw some hills  https://p5js.org/reference/#/p5/ellipse
noStroke();
fill(0,153,76)
ellipse(450, 500, 700, 500) //Hill back left under rainbow
fill(0,153,76)
stroke(0, 204, 102)
ellipse(100, 500, 700, 600) // Hill far left, not the tracktor
noStroke()
fill(0, 153, 76); // Hill far Right, under the sun
ellipse(1650, 400, 900, 500);
fill('#54EE78');
ellipse(1200, 850, 1750, 1000); //Big hill with fence 
fill(0, 204, 102);
ellipse(300, 850, 1750, 900); // Left with the Trackter on it

//Drawing triangles over the grass
stroke(243, 203, 3);
strokeWeight(2);
fill(255,255,204,100);
triangle(1920,0,-300,768,0,768);
fill(255, 255, 204, 100); 
triangle(1920, 0, 100,  768, 360,  768);
fill(255, 255, 204, 100); 
triangle(1920, 0, 500,  768, 800,  768);
fill(255, 255, 204, 100); 
triangle(1920, 0, 1000, 768, 1300, 768);
fill(255, 255, 204, 100);
triangle(1920, 0, 1500, 768, 1800, 768);

// Set the Sunshine shape into the top right corner https://p5js.org/reference/#/p5/circle 
fill(255, 255, 0);
circle(1800, 50, 300);

// Now for the Sheep!

//Sheep One
fill(255,255,255);
noStroke();
circle(1500,960,50); //Bodies
circle(1515,970,50);
circle(1500,980,50);
circle(1485,970,50);
fill(0);
ellipse(1500,970,40,20); //Head
ellipse(1500,970,24,35)
fill(255,255,255);
circle(1506,970,8); //Eyes
circle(1494,970,8)
fill(0);
rect(1475,994,4,25,8); //Legs
rect(1520,994,4,25,8);

//Sheep Two
fill(255,255,255);
noStroke();
circle(1700,900,50); //Bodies
circle(1715,910,50);
circle(1700,920,50);
circle(1685,910,50);
fill(0);
ellipse(1697,900,40,20); //Head
ellipse(1697,905,24,35);
fill(255,255,255);
circle(1691,899,8); //Eyes
circle(1703,900,8);
fill(0);
rect(1671,932,4,25, 8); //Legs
rect(1723,933,4,25, 8);

//Sheep Three (always in 3's)
fill(255,255,255);
noStroke();
circle(1350,855,50); //Bodies
circle(1365,865,50);
circle(1350,875,50);
circle(1335,865,50);
fill(0);
ellipse(1350,855,40,20); //Head
ellipse(1350,858,24,35);
fill(255,255,255);
circle(1345,855,8); //Eyes
circle(1355,855,8);
fill(0);
rect(1328,891,4,25, 8); //Legs
rect(1367,891,4,25, 8);

//Add a fence
fill('#663300');
quad(1125,700,1129,705,1920,825,1920,820);
quad(1153,748,1155,753,1920,865,1920,860);

//Fence Posts
quad(1160,700,1160,760,1165,760,1165,700)
quad(1180,703,1180,763,1185,763,1185,703)
quad(1200,706,1200,766,1205,766,1205,706)
quad(1220,709,1220,769,1225,769,1225,709)
quad(1240,712,1240,772,1245,772,1245,712)
quad(1260,715,1260,775,1265,775,1265,715)
quad(1280,718,1280,778,1285,778,1285,718)
quad(1300,721,1300,781,1305,781,1305,721)
quad(1320,724,1320,784,1325,784,1325,724)
quad(1340,727,1340,787,1345,787,1345,727)
quad(1360,730,1360,790,1365,790,1365,730)
quad(1380,733,1380,793,1385,793,1385,733)
quad(1400,736,1400,796,1405,796,1405,736)
quad(1420,739,1420,800,1425,800,1425,739)
quad(1440,742,1440,803,1445,803,1445,742)
quad(1460,745,1460,806,1465,806,1465,745)
quad(1480,748,1480,809,1485,809,1485,748)
quad(1500,751,1500,811,1505,811,1505,751)
quad(1520,754,1520,814,1520,814,1520,754)
quad(1540,757,1540,817,1545,817,1545,757)
quad(1560,760,1560,820,1565,820,1565,760)
quad(1580,763,1580,823,1585,823,1585,763)
quad(1600,766,1600,826,1605,826,1605,766)
quad(1620,769,1620,829,1625,829,1625,769)
quad(1640,772,1640,832,1645,832,1645,772)
quad(1660,775,1660,835,1665,835,1665,775)
quad(1680,778,1680,838,1685,838,1685,778)
quad(1700,781,1700,841,1705,841,1705,781)
quad(1720,784,1720,844,1725,844,1725,784)
quad(1740,787,1740,847,1745,847,1745,787)
quad(1760,790,1760,850,1765,850,1765,790)
quad(1780,793,1780,853,1785,853,1785,793)
quad(1800,796,1800,856,1805,856,1805,796)
quad(1820,799,1820,859,1825,859,1825,799)
quad(1840,802,1840,862,1845,862,1845,802)
quad(1860,805,1860,866,1865,866,1865,805)
quad(1880,808,1880,868,1885,868,1885,808)
quad(1900,811,1900,871,1905,871,1905,811)
quad(1920,814,1920,874,1925,874,1925,814)

//Add a tractor on the hill
fill(204,0,0);
stroke(60,96,96);
rect(90,470,80,40, 5);//Body
rect(85,440,40,40,5); //Cab
rect(150,444,10,40,5); //Exhaust
rect(81,435,47,10,5)//Roof
//Tractor Wheels
fill(0,0,0);
circle(95,505,55);
circle(150,510,30);
//Centre of the wheels
fill(204,0,0);
circle(95,505,30);
circle(150,510,12);
}

// https://p5js.org/reference/#/p5/loadImage
//function preload() {
// img1 = loadImage("libraries/752526.png")
//}
//function draw() {
//  image (img1, 500)
//}