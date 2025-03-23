//Sun Mar 23 2025 10:27:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var body = $response["\u0062\u006f\u0064\u0079"];
var url = $request["\u0075\u0072\u006c"];
var obj = JSON["\u0070\u0061\u0072\u0073\u0065"](body);
const a = "ofni/resu/moc.ndczkm.rebmem".split("").reverse().join("");
const b = "\u006d\u0065\u006d\u0062\u0065\u0072\u002e\u006d\u006b\u007a\u0063\u0064\u006e\u002e\u0063\u006f\u006d\u002f\u0075\u0073\u0065\u0072\u002f\u0066\u0075\u006e\u0064\u0073\u002f\u0069\u006e\u0066\u006f\u002f";
const c = "/dda/".split("").reverse().join("");
const d = "\u002f\u0061\u0064\u0076\u0065\u0072\u0074\u002f\u0061\u0070\u0070\u002f";
if (url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](a) != -1) {
  obj["\u0064\u0061\u0074\u0061"]["\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065"] = "777eiGeiG/em.t//:sptth".split("").reverse().join("");
  obj['data']["\u006e\u0069\u0063\u006b\u006e\u0061\u006d\u0065"] = "777eiGeiG/em.t//:sptth".split("").reverse().join("");
  obj['data']['signd_type'] = 2;
  obj['data']["\u006d\u006f\u0062\u0069\u006c\u0065"] = 1;
  body = JSON['stringify'](obj);
}
if (url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](b) != -1) {
  obj['data']["\u0076\u0069\u0070\u005f\u0065\u006e\u0064\u005f\u0074\u0069\u006d\u0065"] = 0x790c89135;
  obj['data']['read_card_end_time'] = 0x790c89135;
  obj["\u0064\u0061\u0074\u0061"]['vip_viscount_time'] = 0x790c89135;
  obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u005f\u0062\u0061\u0072\u006f\u006e\u005f\u0074\u0069\u006d\u0065"] = 0x790c89135;
  obj["\u0064\u0061\u0074\u0061"]['vip_type'] = 2;
  obj["\u0064\u0061\u0074\u0061"]['is_vip'] = 1;
  obj['data']["\u0067\u006f\u006c\u0064"] = "088999".split("").reverse().join("");
  obj["\u0064\u0061\u0074\u0061"]['ticket'] = "088999".split("").reverse().join("");
  obj["\u0064\u0061\u0074\u0061"]['integral'] = '999880';
  obj['data']['card_count'] = '999880';
  body = JSON['stringify'](obj);
}
if (url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](c) != -1) {
  obj["\u0063\u006f\u0064\u0065"] = 200;
  body = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);
}
if (url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](d) != -0x1) {
  delete obj["\u0064\u0061\u0074\u0061"];
  body = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);
}
$done({
  "\u0062\u006f\u0064\u0079": body
});