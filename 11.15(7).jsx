<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        $(document).ready(function () {
            // 내부 글자를 변경합니다.
            $('h1:nth-child(1)').text('<a href="#">text()</a>');
            $('h1:nth-child(2)').html('<a href="#">html()</a>');
        });
    </script>
</head>
<body>
    <h1>Header - 0</h1>
    <h1>Header - 1</h1>
</body>
</html>