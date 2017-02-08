<?php $random_backgroud_number = rand(0, 2); ?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include("views/head.html"); ?>

		<style type="text/css">
			header {
				background: url("/resources/images/background/header<?php echo $random_backgroud_number; ?>.jpg") no-repeat;
				background-position: center;
				background-size: cover;
			}
		</style>

		<link rel="stylesheet" type="text/css" href="styles/index/global.css">
	</head>
	
	<body>
		<?php include("views/loader.html"); ?>
		<?php include("views/header.html"); ?>
		
		<div id="wrapper">
			<?php include("views/content.html"); ?>
			<?php include("views/footer.html"); ?>
		</div>

		<!-- LIBS AND SCRIPTS -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="scripts/menu_toggle.js"></script>
		<script type="text/javascript" src="scripts/loader.js"></script>
		<script type="text/javascript" src="scripts/scroll.js"></script>
	</body>
</html>
