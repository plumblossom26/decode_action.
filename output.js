//Sun Mar 23 2025 09:44:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var _0x221274 = $response.body;
var _0x33046a = $request.url;
const _0x4f0bca = "/api/playlet/";
const _0x385f4e = "/api/user/info";
if (typeof _0x221274 === "string") {
  if (_0x33046a.indexOf(_0x4f0bca) !== -1) {
    _0x221274 = _0x221274.replace(/"is_watch":false/g, "\"is_watch\":true,");
  }
  var _0x42c3a9;
  try {
    _0x42c3a9 = JSON.parse(_0x221274);
    if (_0x33046a.indexOf(_0x385f4e) !== -1) {
      _0x42c3a9.data.username = "https://t.me/GieGie777";
      _0x42c3a9.data.vip.status = true;
      _0x42c3a9.data.vip.expired_date = "2999-09-09";
      _0x42c3a9.data.vip.expired_at = 99999999999999;
      _0x42c3a9.data.login_way = true;
      _0x42c3a9.data.beans = 999880;
      _0x221274 = JSON.stringify(_0x42c3a9);
    }
  } catch (_0x53e0fc) {
    console.log("JSON 解析错误: " + _0x53e0fc.message);
  }
}
$done({
  body: _0x221274
});
(function (_0xbdc88e, _0x5af336, _0x154d5a) {
  var _0x5dd3e8 = function () {
    {
      var _0x3573f2 = true;
      return function (_0x402cc1, _0x3fbabb) {
        {
          var _0x2bf5fc = _0x3573f2 ? function () {
            if (_0x3fbabb) {
              var _0x3458bd = _0x3fbabb.apply(_0x402cc1, arguments);
              _0x3fbabb = null;
              return _0x3458bd;
            }
          } : function () {};
          _0x3573f2 = false;
          return _0x2bf5fc;
        }
      };
    }
  }();
  var _0x3e31dc = _0x5dd3e8(this, function () {
    {
      var _0x25f447 = function () {};
      var _0x1966dd = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x1966dd.console) {
        _0x1966dd.console = function (_0x2866e7) {
          var _0x154d5a = {};
          _0x154d5a.log = _0x2866e7;
          _0x154d5a.warn = _0x2866e7;
          _0x154d5a.debug = _0x2866e7;
          _0x154d5a.info = _0x2866e7;
          _0x154d5a.error = _0x2866e7;
          _0x154d5a.exception = _0x2866e7;
          _0x154d5a.trace = _0x2866e7;
          return _0x154d5a;
        }(_0x25f447);
      } else {
        _0x1966dd.console.log = _0x25f447;
        _0x1966dd.console.warn = _0x25f447;
        _0x1966dd.console.debug = _0x25f447;
        _0x1966dd.console.info = _0x25f447;
        _0x1966dd.console.error = _0x25f447;
        _0x1966dd.console.exception = _0x25f447;
        _0x1966dd.console.trace = _0x25f447;
      }
    }
  });
  _0x3e31dc();
  _0x154d5a = "al";
  try {
    {
      _0x154d5a += "ert";
      _0x5af336 = encode_version;
      if (!(typeof _0x5af336 !== "undefined" && _0x5af336 === "jsjiami.com.v5")) {
        _0xbdc88e[_0x154d5a]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x1ca28d) {
    _0xbdc88e[_0x154d5a]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";