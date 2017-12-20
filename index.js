
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <style media="screen">
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .modal_overlay {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }

    .modal_content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 75vh;
      margin: 20px auto;
      background: #fff;
    }
  </style>
</head>

<body>
    
    
  <!-- MODAL -->

  <div class="modal hidden">
    <div class="modal_overlay"></div>
    <div class="modal_content">
      <h4>TITRE FILM</h4>
      <p class="modal_player">PLAYER</p>
      <p>FICHE DETAILS FILM</p>
    </div>
  </div>



  <script type="text/javascript" src="js/data.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript">
    
    
    /** MODAL : LECTEUR + FICHE FILM **/

    let btn = document.querySelectorAll('.cat-Tous');
    let overlay = document.querySelector('.modal_overlay');
    let modal = document.querySelector('.modal');
    let posModal = 0;


    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function() {
        let title = document.querySelector('.modal h4');
        let player = document.querySelector('.modal .modal_player');
        modal.style.display = 'block';
      })
    }

    document.querySelector('.modal_overlay').addEventListener('click', function() {
      modal.style.display = '';
    })

    window.addEventListener('scroll', function() {
      if (posModal) {

      }
      modal.style.display = '';
    })
  </script>
</body>

</html>
