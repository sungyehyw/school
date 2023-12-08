<!DOCTYPE html>
<html>
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
</html>