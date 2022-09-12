import Pusher from "pusher-js";

const APP_KEY = "d44e3d910d38a928e0be";
const APP_CLUSTER = "eu";
const APP_AUTH_ENDPOINT = "https://frontend-test-api.aircall.dev/pusher/auth";

const pusher = new Pusher(APP_KEY, {
  cluster: APP_CLUSTER,
  channelAuthorization: {
    endpoint: APP_AUTH_ENDPOINT,
    transport: "ajax",
  },
});

const channel = pusher.subscribe("private-aircall");

channel.bind(
  "update-call",
  function () {
    console.log(`hi `);
  },
  { name: "Pusher" }
);
