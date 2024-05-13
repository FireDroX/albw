function convertDate(year, month, day, hour, minute) {
  // Months are zero-based (0 to 11)
  return new Date(year, month - 1, day, hour, minute);
}

export const fast = [
  {
    data: require("./logs/fast/1h20m47.33s_1240282282_spoiler.json"),
    name: "1h20m47.33s_1240282282",
    date: convertDate(2024, 4, 19, 17, 6),
  },
  {
    data: require("./logs/fast/1h24m00.95s_1399924088_spoiler.json"),
    name: "1h24m00.95s_1399924088",
    date: convertDate(2024, 5, 7, 15, 28),
  },
  {
    data: require("./logs/fast/1h52m03.40s_2460739470_spoiler.json"),
    name: "1h52m03.40s_2460739470",
    date: convertDate(2024, 5, 4, 20, 21),
  },
  {
    data: require("./logs/fast/1h57m25.48s_1294316049_spoiler.json"),
    name: "1h57m25.48s_1294316049",
    date: convertDate(2024, 5, 8, 15, 16),
  },
  {
    data: require("./logs/fast/2h18m20.66s_0304153701_spoiler.json"),
    name: "2h18m20.66s_0304153701",
    date: convertDate(2024, 5, 7, 18, 15),
  },
  {
    data: require("./logs/fast/2h20m46.97s_2766334619_spoiler.json"),
    name: "2h20m46.97s_2766334619",
    date: convertDate(2024, 5, 5, 21, 14),
  },
  {
    data: require("./logs/fast/2h31m22.28s_2169202125_spoiler.json"),
    name: "2h31m22.28s_2169202125",
    date: convertDate(2024, 5, 3, 21, 21),
  },
  {
    data: require("./logs/fast/2h36m55.11s_4033371893_spoiler.json"),
    name: "2h36m55.11s_4033371893",
    date: convertDate(2024, 4, 20, 19, 54),
  },
  {
    data: require("./logs/fast/2h37m17.93s_1223352703_spoiler.json"),
    name: "2h37m17.93s_1223352703",
    date: convertDate(2024, 5, 9, 21, 3),
  },
  {
    data: require("./logs/fast/2h52m43.91s_2713425126_spoiler.json"),
    name: "2h52m43.91s_2713425126",
    date: convertDate(2024, 4, 14, 20, 56),
  },
  {
    data: require("./logs/fast/2h58m04.90s_3778344289_spoiler.json"),
    name: "2h58m04.90s_3778344289",
    date: convertDate(2024, 4, 30, 16, 21),
  },
  {
    data: require("./logs/fast/3h50m42.04s_1029320108_spoiler.json"),
    name: "3h50m42.04s_1029320108",
    date: convertDate(2024, 4, 16, 18, 31),
  },
  {
    data: require("./logs/fast/2h46m10.84s_2006808928_spoiler.json"),
    name: "2h46m10.84s_2006808928",
    date: convertDate(2024, 5, 10, 20, 45),
  },
  {
    data: require("./logs/fast/2h10m31.00s_3202980712_spoiler.json"),
    name: "2h10m31.00s_3202980712",
    date: convertDate(2024, 5, 11, 20, 44),
  },
  {
    data: require("./logs/fast/1h53m28.99s_2824068161_spoiler.json"),
    name: "1h53m28.99s_2824068161",
    date: convertDate(2024, 5, 13, 23, 8),
  },
];
