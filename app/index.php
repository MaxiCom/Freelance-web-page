<!--

	Salut, jeûne padawan, si tu veux en savoir plus,
	ce site est développé avec HTML, CSS, JAVASCRIPT,	Bootstrap, fontawesome, animate.css ,Jquery 

-->
<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include("includes/base_head.html"); ?>
	</head>
	<body>
		<?php include("views/loader.html"); ?>
		<?php include("views/header.html"); ?>
		
		<div id="wrapper">
			<?php include("views/content.html"); ?>
			<?php include("views/footer.html"); ?>
		</div>

		<!-- Libs and scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="scripts/loader.js"></script>
		<script type="text/javascript" src="scripts/scroll.js"></script>
	</body>
</html>