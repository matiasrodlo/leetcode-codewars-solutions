/* Problem
Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.

Return** the total number of days that Alice and Bob are in Rome together.**

You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

Example 1:

Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
Output: 3

Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.

Example 2:

Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
Output: 0

Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.

Constraints:

All dates are provided in the format "MM-DD".

Alice and Bob's arrival dates are earlier than or equal to their leaving dates.

The given dates are valid dates of a non-leap year. */

function together(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const startDateAlice = new Date(arriveAlice);
  const endDateAlice = new Date(leaveAlice);
  const startDateBob = new Date(arriveBob);
  const endDateBob = new Date(leaveBob);

  if (startDateAlice > endDateBob || startDateBob > endDateAlice) {
    console.log("They dont meet");
    return 0; // Return 0 or any other value indicating no overlap
  } else {
    // Calculate the overlapping period
    const start = Math.max(startDateAlice, startDateBob);
    const end = Math.min(endDateAlice, endDateBob);

    // Calculate the number of days in the overlapping period
    const daysInOverlap = (end - start) / (1000 * 60 * 60 * 24);

    return Math.abs(daysInOverlap) + 1;
  }
}

const result = together("08-15", "08-18", "08-16", "08-19");
console.log(result);
