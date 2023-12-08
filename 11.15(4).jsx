<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 속성을 지정합니다.
            $('img').attr('alt', 'jQuery 라이브러리를 사용한 속성 지정');
            $('img').attr('src', 'http://placehold.it/100x100');
            $('img').attr('width', '100');
        });
    </script>
</head>
<body>
    <img>
    <img>
    <img>
</body>
</html>