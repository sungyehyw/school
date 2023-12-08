<!DOCTYPE html>
<html>
<head>
    <title>Event Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 이벤트를 연결합니다.
            $('button').click(function () {
                // 간단한 효과를 적용합니다.
                $('.page').fadeToggle('slow');
            });
        });
    </script>
</head>
<body>
    <button>Toggle Show</button>
    <div class="page">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
</body>
</html>