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
</html>