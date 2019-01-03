module.exports = `

<html>

<head>
  <meta charset="utf-8">
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="//cdn.webrtc.ecl.ntt.com/skyway-latest.js"></script>
  <script type="text/javascript" src="/js/SkyWay.js"></script>
</head>

<body>
  <div class="SkyWay-area">
    <!-- Video area -->
    <div class="SkyWay-videoArea" id="video-container">
      <table border="0">
        <tr>
          <td><video id="my-video" muted="true" width="320" height="240" style="background-color:#c0c0c0" autoplay playsinline></video></td>
          <td><video id="their-video" width="320" height="240" style="background-color:#c0c0c0" autoplay playsinline></video></td>
        </tr>
      </table>
    </div>

    <!-- Steps -->
    <div class="SkyWay-controllerArea" style="display:inline-block; border:#ff0000 solid 1px;">
      <div class="select">
        <label for="audioSource">Audio In: </label><select id="audioSource"></select>
      </div>

      <div class="select">
        <label for="videoSource">Video In: </label><select id="videoSource"></select>
      </div>

      <!-- Make calls to others -->
      <div id="step2">
        <p>Your id: <span id="my-id">...</span></p>
        <form id="make-call" class="pure-form">
          <input type="text" placeholder="Call user id..." id="callto-id">
          <button href="#" class="pure-button pure-button-success" type="submit">Call</button>
        </form>
      </div>

      <!-- Call in progress -->
      <div id="step3">
        <p>Currently in call with <b><span id="their-id">...</span></b></p>
        <p><a href="#" class="pure-button pure-button-error" id="end-call">End call</a></p>
      </div>
    </div>
  </div>
</body>

</html>

`;
