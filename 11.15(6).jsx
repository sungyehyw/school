<!DOCTYPE html>
<html>  
    <head>
        <title>Clock</title>
        <script>
            // 이벤트를 연결합니다.
            window.onload = function () {
                // 변수를 선언합니다.
                var clock = document.getElementById('clock');

                // 1초마다 함수를 실행합니다.
                setInterval(function () {
                    var now = new Date();
                    clock.innerHTML = now.toString();

                }, 1000);
            };
        </script>
    </head>
    <body>
        <h1 id="clock"></h1>
    </body>
    <head>
        <title>jQuery Basic</title>
        <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
        <script>
            // 이벤트를 연결합니다.
            $(document).ready(function () {
                // 스타일 속성을 변경합니다.
                $('h1').css('color', 'red');
                $('h1').css('background', 'black');
            });
        </script>
    </head>
    <body>
        <h1>Header</h1>
        <h1>Header</h1>
        <h1>Header</h1>
    </body>
    <head>
        <title>jQuery Basic</title>
        <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
        <script>
            $(document).ready(function () {
                // 스타일을 적용합니다.
                $('.box').css('float', 'left');
                $('.box').css('margin', 10);
                $('.box').css('width', 100);
                $('.box').css('height', 100);
                $('.box').css('backgroundColor', 'red');
            });
        </script>
    </head>
    <body>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </body>
</html>