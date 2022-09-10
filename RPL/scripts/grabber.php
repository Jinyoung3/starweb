<!DOCTYPE html>
<html>
<body>
<?php
$output = shell_exec('python grabTeam.py');
echo "<pre>$output</pre>";
echo "done!";
?>
<script>
//header("location:javascript://history.go(-1)");
</script>
</body>
</html>
