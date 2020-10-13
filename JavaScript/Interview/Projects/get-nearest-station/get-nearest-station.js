/** Class representing a point. */
class Point {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    return this.x
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    return this.y
  }

  /**
   * Convert a string containing two comma-separated numbers into a point.
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */
  static fromString(str) {
    const [x, y] = str.split(',')
    return new Point(parseInt(x), parseInt(y))
  }

  /** String representation of Point instance */
  toString() {
    return `${this.getX()}, ${this.getY()}`
  }
}

/** Class representing a link station. */
class LinkStation {
  /** Create a LinkStation.
   * @param {Point} point points to a Link station
   * @param {number} reach link stations reach
   */
  constructor(point, reach) {
    this.point = point
    this.reach = reach
  }

  /**
   * Calculates the power for a link station
   *
   * @param {number} distance Link station point [x, y]
   * @return {number} Power
   */
  calcPower(distance) {
    if (distance > this.reach) {
      return 0
    }
    return parseFloat(Math.pow(this.reach - distance, 2)).toFixed(2)
  }
}

/** Class representing a device */
class Device {
  /**
   * Create a Device
   * @param {Point} point points to a Link station
   * */
  constructor(point) {
    this.point = point
  }

  /**
   * Calculates the distance between device and point.
   * @param {Point} point Link station point
   * @return {number} Distance
   */
  _calcDistance(point) {
    return Math.sqrt(
      Math.pow(this.point.getX() - point.getX(), 2) +
        Math.pow(this.point.getY() - point.getY(), 2)
    )
  }

  /**
   * Sorts link stations by calculated power
   * @param {LinkStation} a LinkStation
   * @param {LinkStation} b LinkStation
   * @return {number} Power
   */
  _sortLinkStations(a, b) {
    const distanceToA = this._calcDistance(a.point)
    const distanceToB = this._calcDistance(b.point)
    return a.calcPower(distanceToA) - b.calcPower(distanceToB)
  }

  /**
   * Returns link station with most power
   * @param {LinkStation[]} linkStations list of Link stations
   * @return {LinkStation} Link station
   */
  _getBestLinkStation(linkStations) {
    const sortedStations = linkStations.sort(this._sortLinkStations.bind(this))
    return sortedStations[sortedStations.length - 1]
  }

  /**
   * Outputs the most suitable link station
   * @param {LinkStation[]} linkStations list of Link stations
   * @return {string} output
   */
  outputBestLinkStation(linkStations) {
    const linkStation = this._getBestLinkStation(linkStations)
    const distance = this._calcDistance(linkStation.point)
    const power = linkStation.calcPower(distance)
    if (power === 0) {
      return console.log(
        `No available link stations for point ${this.point.toString()}`
      )
    }
    return console.log(
      `Best link station for point ${this.point.toString()} is ${linkStation.point.toString()} with power ${power}`
    )
  }
}

const linkStations = [
  new LinkStation(new Point(0, 0), 10),
  new LinkStation(new Point(20, 20), 5),
  new LinkStation(new Point(10, 0), 12),
]

const devicePoints = [new Point(0, 0), new Point(100, 100), new Point(15, 10)]

devicePoints.forEach((dp) => {
  const device = new Device(dp)
  device.outputBestLinkStation(linkStations)
})
