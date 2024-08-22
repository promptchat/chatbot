<?php
//
    (function () {
        // Takes raw data from the request
        $json = file_get_contents('php://input');

        // Converts it into a PHP object
        $data = json_decode($json, true);

        $globalVariables = $data['globalVariables'] ?? [];
        $variables = $data['variables'] ?? [];


        $handler = preg_replace('/<\?php/m', '', $data['handler']);
        $error = null;
        ob_start();
        try {
            (eval($handler));
            $data = call_user_func($data['function'],
                ...array_merge($data['extra'] ?? [], [
                    $variables,
                    $globalVariables
                ]),
            );
        } catch (\Throwable $e) {
            $data = null;
            $error = [
                'message' => $e->getMessage(),
                'lineNumber' => $e->getLine(),
                'columnNumber' => 0,
            ];
        }
        $output = ob_get_contents();
        ob_clean();

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(compact('data', 'output', 'error'));

    })();
