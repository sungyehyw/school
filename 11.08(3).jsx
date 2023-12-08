<!DOCTYPE html>
<html>
<head>
    <title>DOM Basic</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 선택합니다.
            var header = document.querySelector('h1');

            // 문서 객체를 조작합니다.
            header.style.color = 'orange';
            header.style.background = 'red';
            header.innerHTML = 'From JavaScript';
        };
    </script>
</head>
<body>
    <h1>Header</h1>
    <h1>Header</h1>
    <h1>Header</h1>
</body>
</html>