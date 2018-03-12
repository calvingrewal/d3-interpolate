/* eslint no-console: 0 */
export function oldNumber(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

export default function(a, b, strictClockwise = false, angle = 0) {
  var start = +a;
  var end = b;
  if (strictClockwise) {
    if (end < angle && angle < start) { //end < angle < start
      end += 360
    }
    if (start < angle && angle < end) {
      start += 360
    }
  }
  return function(t) {
    return start + (end - start) *t
  };

}
