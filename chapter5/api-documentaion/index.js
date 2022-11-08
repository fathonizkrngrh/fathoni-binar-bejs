const { Collection, Item, Header } = require("postman-collection");
const fs = require("fs");

// create collection
const postmanCollection = new Collection({
  info: {
    name: "Membuat dokumentasi",
  },
  item: [],
});

// set headers
const rawHeaderString =
  "Authorization:\nContent-Type:application/json\ncache-control:no-cache\n";

const rawHeader = Header.parse(rawHeaderString);

const requestHeader = rawHeader.map((h) => new Header(h));

// create endpoint
const apiEndpoint = "http://httpbin.org/post";
const requestName = "Contoh request pake postman";

const requestPayload = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Add tests for request
const requestTest = `
pm.test('Sample test: Test for succesfull response', function(){
    pm.expect(pm.response.code).to.equal(200);
});
`;

// Create the final request
const postmanRequest = new Item({
  name: requestName,
  request: {
    header: requestHeader,
    url: apiEndpoint,
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify(requestPayload),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTest,
      },
    },
  ],
});

postmanCollection.items.add(postmanRequest);

// convert to json
const collectionJSON = postmanCollection.toJSON();

// export to file
fs.writeFile("./collection.json", JSON.stringify(collectionJSON), (err) => {
  if (err) console.log(err);
  console.log("file saved!");
});
