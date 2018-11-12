<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @stack('meta')
    @stack('favicon')
    @stack('css')
    @stack('title')
</head>
<body>
@yield('content')
@stack('footer-js')
</body>
</html>