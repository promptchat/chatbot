<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .react-calendar {
            border: 1px solid #ced4da!important;
        }

        .react-calendar__tile {
            padding: 0.5em 0.5em!important;
        }

        .react-calendar__year-view .react-calendar__tile,
        .react-calendar__decade-view .react-calendar__tile,
        .react-calendar__century-view .react-calendar__tile {
            padding: 1.3em 0.5em!important;
        }

        .react-calendar__navigation {
            margin-bottom: 0.1em!important;
        }

        .btn {
            border-radius: 4px;
            padding: 8px 12px;
            cursor: pointer;
            display: inline-block;
            border: none;
            box-shadow: none;
            text-transform: uppercase;
            color: white;
            background: none;
            outline: none;
        }

        .btn-block {
            margin-top: 15px;
        }

        .btn.btn-next {
            background: #1087ff;
            float: right;
        }

        .btn.btn-back {
            background: #6c757d;
            float: left;
        }

        .calendar-window {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            flex-direction: column;
        }

        .calendar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 300px;
            padding: 10px;
            color: white;
            text-transform: capitalize;
            background: #1087ff;
            border: 1px solid #1087ff;
            font-size: 16px;
        }

        .calendar-block {
            width: 300px;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #ced4da;
            border-top: none;
            background: white;
        }

        .text-center {
            text-align: center;
        }

        .time-list {
            margin: -10px -10px -10px;
            padding: 10px;
            overflow: auto;
        }

        .time-item {
            display: inline-block;
            padding: 6px 8px;
            background: #f5f5f5;
            margin: 5px;
            border-radius: 4px;
            border: 1px solid #ced4da;
            cursor: pointer;
            font-size: 14px;
        }

        .time-item.active {
            background: #1087ff;
            color: white;
        }

        .form-block {
            margin-bottom: 15px;
        }

        .form-block label {
            display: inline-block;
            font-size: 14px;
        }

        .form-block input,
        .form-block textarea {
            display: block;
            padding: 6px 12px;
            border-radius: 4px;
            width: 100%;
            border: 1px solid #ced4da;
        }

        textarea {
            resize: none;
        }
    </style>
</head>
<body>
<appointment calendar="<?php echo e($calendar); ?>"></appointment>
<script src="<?php echo e(mix('js/appointment.js')); ?>" defer></script>
</body>
</html>

