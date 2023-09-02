<?php include 'sendemail.php'; ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Contact us</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
<style>
		body
		{
			background-image: url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxwaG90b3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
			
			background-size: cover;
		}
		.alert-success
		{
			z-index:1;
			background:#D4EDDA;
			font-size:18px;
			padding:20px 40px;
			min-width: 420px;
			position: fixed;
			margin-left: 450px;
			rigth:0;
			top:10px;
			border-left: 8px solid #3AD66E;
		}
	</style>
<!--alerting message-->
<?php echo $alert; ?>
<!--alerting end-->

	<div class="container mt-5 bg-white shadow-lg rounded">
  		<div class="row">
    		<div class="col"><br>
    			<h3 class="fw-bold ms-5">Let's talk about everything!</h3><br>
      			<img src="https://www.naharcredits.in/wp-content/uploads/2020/05/contact-us.png" width="450" height="300">
    		</div>
    		<div class="col mt-5">
      			<form action="" method="post" class="mt-5">
  					<div class="form-group">
				    	<input type="text" name="name" class="form-control bg-light p-2" id="exampleInputName1" aria-describedby="" placeholder="Enter your Name">
				  	</div><br>
				  	<div class="form-group">
				    	<input type="email" name="email" class="form-control bg-light p-2" id="exampleInputEmail1" placeholder="Enter your Email">
				  	</div>
				  	<br>
				  	<div class="form-group">
					  <textarea name="message" class="form-control bg-light" id="exampleFormControlTextarea1" rows="5" placeholder="Write your message here"></textarea>
					</div><br>
				  <button type="submit" name="submit" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">Send Message</button><br><br><br>
				</form>
    		</div>
  		</div>
  	</div><br>

  	<script type="text/javascript">
  		if(window.history.replaceState)
  		{
  			window.history.replaceState(null, null, window.location.href);
  		}
  	</script>
</body>
</html>
		