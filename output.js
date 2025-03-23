//Sun Mar 23 2025 09:59:17 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("carrot");
(() => {
  var g = "one_first_run";
  var h = $.getdata(g);
  h || ($.msg($.name, "", "欢迎使用脚本！点此通知加入作者频道", "https://t.me/Jsforbaby"), $.setdata("true", g));
  var j = $response.body;
  try {
    {
      var k = JSON.parse(j);
      if (k.result && k.result.subscriptions && k.result.subscriptions.length > 0) {
        {
          var l = k.result.subscriptions[0];
          l.productId = "com.grailr.carrotWeather.premiumFamily1year";
          var m = Date.now();
          l.purchaseTime = m;
          l.originalPurchaseTime = m;
          l.expirationTime = m + 31536000000;
          l.isTrialPeriod = null;
          k.result.serverDate && k.result.serverDate.iso && (k.result.serverDate.iso = new Date().toISOString());
          l.lastNotificationDate && l.lastNotificationDate.iso && (l.lastNotificationDate.iso = new Date().toISOString());
        }
      }
      $.done({
        body: JSON.stringify(k)
      });
    }
  } catch (q) {
    {
      var n = {
        body: j
      };
      $.done(n);
    }
  }
})();
function Env(name) {
  return new class {
    constructor(name) {
      this.name = name;
      this.startTime = new Date().getTime();
      this.log("", `🔔${this.name},开始!`);
      this.envs = {
        Surge: "Surge",
        Loon: "Loon",
        Stash: "Stash",
        QuantumultX: "Quantumult X",
        Shadowrocket: "Shadowrocket",
        Nodejs: "Node.js"
      };
    }
    getEnv() {
      if ("undefined" !== typeof $environment && $environment["surge-version"]) {
        return "Surge";
      }
      if ("undefined" !== typeof $environment && $environment["stash-version"]) {
        return "Stash";
      }
      if ("undefined" !== typeof module && !!module.exports) {
        return "Node.js";
      }
      if ("undefined" !== typeof $task) {
        return "Quantumult X";
      }
      if ("undefined" !== typeof $loon) {
        return "Loon";
      }
      if ("undefined" !== typeof $rocket) {
        return "Shadowrocket";
      }
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    getdata(key) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(key);
        case "Quantumult X":
          return $prefs.valueForKey(key);
        case "Node.js":
          this.data = this.data || {};
          return this.data[key];
        default:
          return null;
      }
    }
    setdata(val, key) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(val, key);
        case "Quantumult X":
          return $prefs.setValueForKey(val, key);
        case "Node.js":
          this.data = this.data || {};
          this.data[key] = val;
          return true;
        default:
          return false;
      }
    }
    msg(title = this.name, subt = "", desc = "", opts = {}) {
      const toEnvOpts = rawopts => {
        if (typeof rawopts === "string") {
          switch (this.getEnv()) {
            case "Surge":
            case "Stash":
            default:
              return {
                url: rawopts
              };
            case "Loon":
            case "Shadowrocket":
              return rawopts;
            case "Quantumult X":
              return {
                "open-url": rawopts
              };
            case "Node.js":
              return undefined;
          }
        } else {
          if (typeof rawopts === "object") {
            const openUrl = rawopts.openUrl || rawopts.url || rawopts["open-url"];
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
                return openUrl ? {
                  url: openUrl
                } : {};
              case "Loon":
                return openUrl ? {
                  openUrl
                } : {};
              case "Quantumult X":
                return openUrl ? {
                  "open-url": openUrl
                } : {};
              case "Node.js":
                return undefined;
            }
          }
        }
        return undefined;
      };
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          $notification.post(title, subt, desc, toEnvOpts(opts));
          break;
        case "Quantumult X":
          $notify(title, subt, desc, toEnvOpts(opts));
          break;
        case "Node.js":
          console.log(`${title}\n${subt}\n${desc}`);
          break;
      }
    }
    log(...logs) {
      console.log(logs.join("\n"));
    }
    done(val = {}) {
      const endTime = new Date().getTime();
      const costTime = (endTime - this.startTime) / 1000;
      this.log("", `🔔${this.name},结束!🕛${costTime}秒`);
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
          $done(val);
          break;
        case "Node.js":
          process.exit(1);
          break;
      }
    }
  }(name);
}