<html>
<head><title>Prime number checker</title></head>
<body>
<h1>Is it a Prime Number?</h1>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>"  method = "post">
<label for="number">Enter a number:</label>
<input type="number" name="number" id="number" required><br><br>
<input type="submit" value="check">
</form>
<?php
	if($_SERVER['REQUEST_METHOD']==='POST'){
		$number =(int)
		$_POST['number'];
		
		if($number<=1){
			echo "<p>Please Enter a positive integer greater than 1</p>";
		}else{
			if(isPrime($number)){
				echo"<p>$number is a PrimeNumber.</p>";
			}else{
				echo"<p>$number is not a PrimeNumber.</p>";
			}
		}
	}
?>
<?php
	function isPrime($num){
		if($num<=1){
			return false;
		}
		for($i=2;$i<=sqrt($num);$i++){
			if($num % $i === 0){
				return false;
			}
		}
		return true;
	}

?>
</body>
</html>
