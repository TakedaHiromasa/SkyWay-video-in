module.exports = function(RED) {
  "use strict";
  var jscode = require('../src/jscode');
  var htmlcode = require('../src/htmlcode');

  var key = {
    key: "",
    debug: 3,
  };

  var opt = {
    peerId: "",
    autoCall: false,
    width: 320,
    height: 240
  };

  function SkyWayP2PNode(n) {
    RED.nodes.createNode(this, n);

    this.name = n.name;
    key.key = n.key;
    key.debug = n.debug;
    opt.peerId = n.peerId,
    opt.autoCall = n.autoCall;
    opt.width = n.width;
    opt.height = n.height;

    var node = this;

    RED.httpNode.post('/peer', function(req, res) {
      var msg = {};
      msg.payload = req.body.peerId;
      node.send([null, msg]);

      var rejson = JSON.stringify(req.body);
      res.send(rejson);
    });

    RED.httpNode.get('/js/SkyWay.js', function(req, res) {
      var head = "";
      head += "var key=" + JSON.stringify(key);
      head += "\nvar opt=" + JSON.stringify(opt);
      res.send(head + jscode);
    });

    // RED.httpNode.get('/style.css', function(req, res) {
    //   res.send(fs.readFileSync('style.css', 'utf-8'));
    // });

    this.on('input', function(msg) {
      msg.payload = htmlcode;
      node.send([msg, null]);
    });

  }
  RED.nodes.registerType("skyway-p2p", SkyWayP2PNode);
}
