<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <title>{{ $title ?? 'Page Title' }}</title>
</head>

<body>
    <livewire:frontend.layout.navbar />

    {{ $slot }}

    <livewire:frontend.layout.footer />
</body>

</html> 