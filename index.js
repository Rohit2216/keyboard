<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KEYBOARD</title>
    <style>
        .box {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(5, 50px);
            gap: 10px;
            /* align-items: center; */
            width: 80%;
            height: auto;
            /* border: 2px solid red; */
            margin: auto;
            background-color: #262c2c;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            margin-top: 200px;
            margin-bottom: 200px;
            padding:30px;
            border-radius:20px;
        }

        #space {
            grid-column-start: 5;
            grid-column-end: 9;
            grid-row-start: 5;
            grid-row-end: 6;
        }

        #shift {
            grid-column-start: 11;
            grid-column-end: 13;
            grid-row-start: 4;
            grid-row-end: 5;
        }

        #enter {
            grid-column-start: 11;
            grid-column-end: 13;
            grid-row-start: 3;
            grid-row-end: 4;
        }

        button {
            border-radius: 7px;
            color: #1693ba;
            font-weight: bold;
            background-color: #2f3639;
            border-color:#2f3639;
        }

        .dabba{
            width:100%;
            height: auto;
            border:2px solid #02bdd5;
            /* margin-top:250px;     */
        }
        .container{
            width:100%;
            background-color: #02bdd5;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="dabba">
            <div class="box">
                <button>~</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>delete</button>
                <button>Tab</button>
                <button>Q</button>
                <button>W</button>
                <button>E</button>
                <button>R</button>
                <button>T</button>
                <button>Y</button>
                <button>U</button>
                <button>I</button>
                <button>O</button>
                <button>P</button>
                <button>\</button>
                <button>caps</button>
                <button>A</button>
                <button>S</button>
                <button>D</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>J</button>
                <button>K</button>
                <button>L</button>
                <button id="enter">Enter</button>
                <button>Shift</button>
                <button>Z</button>
                <button>X</button>
                <button>C</button>
                <button>V</button>
                <button>B</button>
                <button>N</button>
                <button>M</button>
                <button> < </button>
                <button> > </button>
                <button id="shift"> Shift</button>
                <button>🌐</button>
                <button>control</button>
                <button>option</button>
                <button>alt</button>
                <button id="space">space</button>
                <button>alt</button>
                <button>option</button>
                <button>← </button>
                <button>→</button>
            </div>
        </div>
    </div>
</body>

</html>