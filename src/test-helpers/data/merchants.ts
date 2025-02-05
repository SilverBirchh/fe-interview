const merchants = [
  {
    categoryId: 1,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1151788824093188097/wHfb5mYZ_bigger.png",
    id: "5a5caa1efe33900100fd8ed5",
    isBill: false,
    name: "Vodafone",
    transactions: [
      {
        amount: 12.34,
        date: "2018-01-13",
        id: 36,
      },
      {
        amount: 14.34,
        date: "2018-02-13",
        id: 37,
      },
      {
        amount: 15.54,
        date: "2018-03-13",
        id: 38,
      },
      {
        amount: 11.34,
        date: "2018-04-13",
        id: 39,
      },
      {
        amount: 18.99,
        date: "2018-05-13",
        id: 40,
      },
    ],
  },
  {
    categoryId: 2,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1280004967726751744/1YFw1Bdu_bigger.jpg",
    id: "5a5caa8efe33900100fd8ed6",
    isBill: true,
    name: "Sky TV",
    transactions: [
      {
        amount: 82.17,
        date: "2018-01-01",
        id: 41,
      },
      {
        amount: 82.17,
        date: "2018-02-01",
        id: 42,
      },
      {
        amount: 82.17,
        date: "2018-03-01",
        id: 43,
      },
      {
        amount: 82.17,
        date: "2018-04-01",
        id: 44,
      },
      {
        amount: 82.17,
        date: "2018-05-01",
        id: 45,
      },
    ],
  },
  {
    categoryId: 3,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1280422740638470147/aBXwvFOs_bigger.jpg",
    id: "5a5caad4fe33900100fd8ed7",
    isBill: true,
    name: "HSBC Mortgage",
    transactions: [
      {
        amount: 1023,
        date: "2018-01-01",
        id: 1,
      },
      {
        amount: 1023,
        date: "2018-02-01",
        id: 2,
      },
      {
        amount: 1023,
        date: "2018-03-01",
        id: 3,
      },
      {
        amount: 1023,
        date: "2018-04-01",
        id: 4,
      },
      {
        amount: 1023,
        date: "2018-05-01",
        id: 5,
      },
    ],
  },
  {
    categoryId: 2,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1235992718171467776/PaX2Bz1S_bigger.jpg",
    id: "5a5cab18fe33900100fd8ed8",
    isBill: true,
    name: "Netflix",
    transactions: [
      {
        amount: 19,
        date: "2018-01-02",
        id: 6,
      },
      {
        amount: 19,
        date: "2018-02-02",
        id: 7,
      },
      {
        amount: 19,
        date: "2018-03-02",
        id: 8,
      },
      {
        amount: 19,
        date: "2018-04-02",
        id: 9,
      },
      {
        amount: 19,
        date: "2018-05-02",
        id: 10,
      },
    ],
  },
  {
    categoryId: 3,
    iconUrl: null,
    id: "5a5cab3bfe33900100fd8ed9",
    isBill: true,
    name: "Transfer to flatmate",
    transactions: [
      {
        amount: 450,
        date: "2018-01-02",
        id: 11,
      },
      {
        amount: 450,
        date: "2018-02-02",
        id: 12,
      },
      {
        amount: 450,
        date: "2018-03-02",
        id: 13,
      },
      {
        amount: 450,
        date: "2018-04-02",
        id: 14,
      },
      {
        amount: 450,
        date: "2018-05-02",
        id: 15,
      },
    ],
  },
  {
    categoryId: 3,
    iconUrl:
      "https://pbs.twimg.com/profile_images/984840751929544704/iv3Y8YNC_bigger.jpg",
    id: "5a5cab88fe33900100fd8eda",
    isBill: true,
    name: "AMEX Payment",
    transactions: [
      {
        amount: 50,
        date: "2018-01-22",
        id: 16,
      },
      {
        amount: 50,
        date: "2018-02-22",
        id: 17,
      },
      {
        amount: 62.34,
        date: "2018-03-22",
        id: 18,
      },
      {
        amount: 82.87,
        date: "2018-04-22",
        id: 19,
      },
      {
        amount: 450,
        date: "2018-05-22",
        id: 20,
      },
    ],
  },
  {
    categoryId: 4,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1283078790076403713/cNZHuaOx_bigger.jpg",
    id: "5a5cabd4fe33900100fd8edb",
    isBill: true,
    name: "TFL",
    transactions: [
      {
        amount: 4.99,
        date: "2018-01-22",
        id: 21,
      },
      {
        amount: 6,
        date: "2018-01-22",
        id: 22,
      },
      {
        amount: 2.34,
        date: "2018-03-10",
        id: 23,
      },
      {
        amount: 2.87,
        date: "2018-04-21",
        id: 24,
      },
      {
        amount: 4,
        date: "2018-05-02",
        id: 25,
      },
    ],
  },
  {
    categoryId: 5,
    iconUrl: "https://makemefallback/notgoingtowork.jpg",
    id: "5a5cac65fe33900100fd8edc",
    isBill: false,
    name: "Sainsbury's",
    transactions: [
      {
        amount: 18.92,
        date: "2018-01-22",
        id: 26,
      },
      {
        amount: 6.34,
        date: "2018-02-22",
        id: 27,
      },
      {
        amount: 112.34,
        date: "2018-03-10",
        id: 28,
      },
      {
        amount: 565.27,
        date: "2018-04-21",
        id: 29,
      },
      {
        amount: 8,
        date: "2018-07-02",
        id: 30,
      },
    ],
  },
  {
    categoryId: 4,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1145605208610889729/C7EH0Qyi_bigger.png",
    id: "328card4fe33900100fd8ail",
    isBill: false,
    name: "Uber",
    transactions: [
      {
        amount: 6.23,
        date: "2018-01-22",
        id: 31,
      },
      {
        amount: 5.12,
        date: "2018-02-21",
        id: 32,
      },
      {
        amount: 8.34,
        date: "2018-03-10",
        id: 33,
      },
      {
        amount: 1.99,
        date: "2018-04-13",
        id: 34,
      },
      {
        amount: 4,
        date: "2018-05-02",
        id: 35,
      },
    ],
  },
];

export default merchants;
