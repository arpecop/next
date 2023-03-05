const { parentPort } = require("worker_threads");
 
const async = require("async");
//const axios = require("axios");
const fetch = require("node-fetch");

const nano = require("nano")("http://arpecop:maximus@0.0.0.0:5984");
const db = nano.use("q");
const db1 = nano.use("test");

// Set the region where the queue is located
 

 
 

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;




if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
 
  test();
}


 const minifyTweets = async (id) => {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15",
  };

  const datafetch = await fetch(
    `https://syndication.twitter.com/srv/timeline-profile/screen-name/${id}`,
    { headers }
  );
  const html = await datafetch.text();

  if (html.length > 5000) {
    const obj = JSON.parse(
      html
        .replace(' id="__NEXT_DATA__" type="application/json"', "")
        .split("<script>")[1]
        .split("</script>")[0]
    );

    const tweets = obj.props.pageProps.timeline.entries.map((t) => {
      const originalPoster = t.content.tweet.retweeted_status
        ? {
            screenName: t.content.tweet.retweeted_status.user.screen_name,
            name: t.content.tweet.retweeted_status.user.name,
            profileImageUrl:
              t.content.tweet.retweeted_status.user.profile_image_url_https,
          }
        : null;
      return {
        id: t.entry_id,
        text: t.content.tweet.retweeted_status
          ? t.content.tweet.retweeted_status.full_text
          : t.content.tweet.full_text,
        createdAt: new Date(t.content.tweet.created_at)
          .toISOString()
          .split("T")[0],

        originalPoster,
      };
    });
    return Promise.resolve({
      description:
        obj.props.pageProps.timeline.entries[0]?.content.tweet.user
          .description || "",
      screenName:
        obj.props.pageProps.timeline.entries[0]?.content.tweet.user
          .screen_name || "",
      name:
        obj.props.pageProps.timeline.entries[0]?.content.tweet.user.name ||
        "",
      profileImageUrl:
        obj.props.pageProps.timeline.entries[0].content.tweet.user
          .profile_image_url_https,
      tweets,
    });
  } else {
    return Promise.resolve({ tweets: null });
  }
};
const getProfile = async (id) => {
  return new Promise((resolve) => {
    minifyTweets(id).then((data) => {
      if (data.tweets) {
        const row = data;
        if (row.tweets) {
          const mentioned = row.tweets
            .filter((i) => i.originalPoster)
            .map((i) => i.originalPoster.screenName);

          resolve({
            Mentioned: [...new Set(mentioned)],
            PutRequest: {
              Item: {
                _id: `${
                  row.screenName.charAt(0) === "_"
                    ? "-" + row.screenName.substring(1)
                    : row.screenName
                }_tw`,
                letter: row.screenName.charAt(0).toLowerCase(),
                cat: "Twuser2",
                type: "Twuser2",
                ...row,
              },
            },
          });
        }
      } else {
        resolve(null);
      }
    });
  });
};

function receiveMessages(callback) {
  db.view("q", "q", {
    limit: 500,
  }).then((data) => {
    async.forEachOf(
      data.rows,
      (message, key, cb) => {
     
        db.insert({_id:message.id, _rev:message.value,processed:true},function  () {
              cb();
          })
      },
      () => {
        callback(data.rows);
      }
    );
  });
}


let counter = 0;
let items = [];

function sendmessage(user) {
db.insert({ _id: user }, function () {});
  
}
 async function test() {
 
  receiveMessages(async function (qdata) {
 
    if (qdata) {
      async.forEachOf(
        qdata,
        (message, key, cb) => {
      
          getProfile(message.id).then((get) => {
        
            if (get) {
              if (get.Mentioned[0]) {
                get.Mentioned.forEach((user) => {
                 sendmessage(user);
                  
                });
              }
              items.push({ PutRequest: get.PutRequest });
              cb({ PutRequest: get.PutRequest });
            } else {
              cb(null);
            }
          });
        },
        () => {
          if (items.length >= 400) {
            const itemList = items.map((it) => it.PutRequest.Item);
            const cont = (counter += 400);
            db1.bulk({ docs: itemList }, function (e) {
              console.log(e, cont);
              if (cont >= 10000) {
                process.exit(1);
              }
              test();
            });

            items = [];
          } else {
            test();
          }
        }
      );
    } else {
      test();
    }
  });
}
///////
