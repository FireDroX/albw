// Helper function to create log entry
function createLogEntry(folder, name, year, month, day, hour, minute) {
  return {
    type: folder,
    data: require(`./logs/${folder}/${name}_spoiler.json`),
    name: name,
    // Months are zero-based (0 to 11)
    date: new Date(year, month - 1, day, hour, minute),
  };
}

// Log entries with minimal information
const logEntries = [
  ["fast", "2h52m43.91s_2713425126", 2024, 4, 14, 20, 56],
  ["fast", "3h50m42.04s_1029320108", 2024, 4, 16, 18, 31],
  ["fast", "1h20m47.33s_1240282282", 2024, 4, 19, 17, 6],
  ["fast", "2h36m55.11s_4033371893", 2024, 4, 20, 19, 54],
  ["fast", "2h58m04.90s_3778344289", 2024, 4, 30, 16, 21],
  ["fast", "2h31m22.28s_2169202125", 2024, 5, 3, 21, 21],
  ["fast", "1h52m03.40s_2460739470", 2024, 5, 4, 20, 21],
  ["fast", "2h20m46.97s_2766334619", 2024, 5, 5, 21, 14],
  ["fast", "1h24m00.95s_1399924088", 2024, 5, 7, 15, 28],
  ["fast", "2h18m20.66s_0304153701", 2024, 5, 7, 18, 15],
  ["fast", "1h57m25.48s_1294316049", 2024, 5, 8, 15, 16],
  ["fast", "2h37m17.93s_1223352703", 2024, 5, 9, 21, 3],
  ["fast", "2h46m10.84s_2006808928", 2024, 5, 10, 20, 45],
  ["fast", "2h10m31.00s_3202980712", 2024, 5, 11, 20, 44],
  ["fast", "1h53m28.99s_2824068161", 2024, 5, 13, 23, 8],
  ["fast", "2h34m58.20s_2617355543", 2024, 5, 14, 21, 13],
  ["fast", "1h41m56.90s_3284600731", 2024, 5, 15, 21, 34],
  ["fast", "1h38m54.58s_2643704552", 2024, 5, 17, 20, 5],
  ["cracksanity", "3h36m42.94s_3792606750", 2024, 5, 22, 22, 50],
  ["fast", "2h03m06.46s_0213171938", 2024, 5, 31, 16, 53],
  ["fast", "2h21m52.81s_1880739282", 2024, 6, 8, 20, 49],
  ["cracksanity", "3h52m00.06s_3044563838", 2024, 6, 15, 18, 20],
  ["cracksanity", "3h24m56.74s_3916379461", 2024, 6, 18, 19, 47],
  ["fast", "2h08m09.24s_1582428303", 2024, 9, 15, 17, 42],
];

// Generate log entries
const runs = logEntries.map((log) => createLogEntry(...log));

// Split logs into different arrays based on type
const categorizedRuns = runs.reduce((acc, log) => {
  if (!acc[log.type]) {
    acc[log.type] = [];
  }
  acc[log.type].push(log);
  return acc;
}, {});

// Export the categorized runs
export const fast = categorizedRuns.fast || [];
export const cracksanity = categorizedRuns.cracksanity || [];

// You can also export the runs array if needed
export const allRuns = runs;
