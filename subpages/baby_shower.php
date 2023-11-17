<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
    rel="stylesheet" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
  <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>

  <link rel="shortcut icon" href="https://godansiedlce.pl/images/favicon.png" />

  <link rel="stylesheet" href="https://godansiedlce.pl/main.css" />
  <link rel="stylesheet" href="./subpages.css" />
  <title>GoDan - Baby Shower</title>

</head>

<body>
  <?php include('../header.php') ?>
  <main>
    <section id="gallery">
      <h1 class="title">Baby Shower <span class="dot">.</span></h1>
      <div class="wrapper">
        <a href="https://godansiedlce.pl/images/baby_shower/baby_shower (1).JPG" class="glightbox">
          <img src="https://godansiedlce.pl/images/baby_shower/baby_shower_min (1).jpg" alt="image" />
        </a>
        <a href="https://godansiedlce.pl/images/baby_shower/baby_shower (2).JPG" class="glightbox">
          <img src="https://godansiedlce.pl/images/baby_shower/baby_shower_min (2).jpg" alt="image" />
        </a>
        <a href="https://godansiedlce.pl/images/baby_shower/baby_shower (3).JPG" class="glightbox">
          <img src="https://godansiedlce.pl/images/baby_shower/baby_shower_min (3).jpg" alt="image" />
        </a>
        <a href="https://godansiedlce.pl/images/baby_shower/baby_shower (4).JPG" class="glightbox">
          <img src="https://godansiedlce.pl/images/baby_shower/baby_shower_min (4).jpg" alt="image" />
        </a>
        <a href="https://godansiedlce.pl/images/baby_shower/baby_shower (5).JPG" class="glightbox">
          <img src="https://godansiedlce.pl/images/baby_shower/baby_shower_min (5).jpg" alt="image" />
        </a>
      </div>
    </section>
  </main>
  <?php include('../footer.php') ?>
  <script src="https://godansiedlce.pl/nav.js"></script>
  <script>
    var lightbox = GLightbox();
    lightbox.on("open", (target) => {
      console.log("lightbox opened");
    });
  </script>
</body>

</html>