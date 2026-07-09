/* Google Font */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#050816,#0d1b2a,#1b263b);
    color:#fff;
    overflow-x:hidden;
}

/* Main Container */

.container{
    width:90%;
    max-width:800px;
    padding:40px;
    border-radius:20px;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(18px);
    box-shadow:0 0 40px rgba(0,255,255,.2);
    text-align:center;
    animation:fadeIn 1s ease;
}

h1{
    font-size:42px;
    color:#00ffe7;
    margin-bottom:10px;
}

.subtitle{
    color:#d0d0d0;
    margin-bottom:30px;
    line-height:1.6;
}

/* Text Area */

textarea{
    width:100%;
    height:180px;
    border:none;
    outline:none;
    resize:none;
    padding:20px;
    border-radius:15px;
    background:#111827;
    color:white;
    font-size:16px;
    margin-bottom:25px;
    transition:.3s;
}

textarea:focus{
    box-shadow:0 0 20px cyan;
}

/* Button */

button{
    padding:15px 40px;
    border:none;
    border-radius:50px;
    background:#00ffe7;
    color:#000;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:translateY(-3px);
    box-shadow:0 0 25px cyan;
}

/* Result Card */

.result{
    margin-top:35px;
    padding:25px;
    border-radius:15px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.1);
    transition:.4s;
}

.result h2{
    color:#00ffe7;
    margin-bottom:15px;
}

#risk{
    font-size:32px;
    font-weight:bold;
    margin-bottom:10px;
}

#reason{
    color:#ddd;
    line-height:1.6;
}

/* Risk Colors */

.safe{
    color:#00ff88;
}

.medium{
    color:#ffd700;
}

.high{
    color:#ff3b3b;
}

/* Animation */

@keyframes fadeIn{

from{
opacity:0;
transform:translateY(30px);
}

to{
opacity:1;
transform:translateY(0);
}

}

/* Mobile */

@media(max-width:768px){

.container{

padding:25px;

}

h1{

font-size:30px;

}

button{

width:100%;

}

}

/* Risk Meter */

.meter{

width:100%;

height:22px;

background:#222;

border-radius:20px;

overflow:hidden;

margin-top:20px;

}

#progressBar{

width:0%;

height:100%;

background:limegreen;

transition:.5s;

}

#percentage{

margin-top:10px;

font-weight:bold;

font-size:18px;

}

.tips{

margin-top:30px;

padding:20px;

background:rgba(255,255,255,.05);

border-radius:12px;

}

.tips h3{

color:cyan;

margin-bottom:10px;

}