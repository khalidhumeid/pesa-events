@extends('layout.main')
@push('meta')

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">


@endpush
@push('favicon')
    <link rel="shortcut icon" href="" type="image/x-icon"/>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

@endpush
@push('css')
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
@endpush
@push('title')
    <title>{{ config('app.name') }} </title>
@endpush
@section('content')
    <div id="app">
        <router-view></router-view>
    </div>
@endsection
@push('footer-js')
    <script src="{{asset('js/app.js')}}"></script>

@endpush