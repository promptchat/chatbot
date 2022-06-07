<script>
    window.opener.postMessage(<?php echo json_encode([
    'type' => 'token',
    'token' => $token
]); ?>, "*")
</script>
