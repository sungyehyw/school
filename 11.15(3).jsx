<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 속성을 추출합니다.
            var src = $('script').attr('src');

            // 출력합니다.
            $('body').append(src);
        });
    </script>
</head>
<body>

</body>
</html>