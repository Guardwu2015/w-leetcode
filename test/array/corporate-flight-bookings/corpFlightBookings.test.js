import corpFlightBookings from '../../../array/corporate-flight-bookings/corpFlightBookings.js'

const bookings = [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25]
]
const n = 5

test('corpFlightBookings(bookings, n) to equal [10,55,45,25,25]', () => {
    expect(corpFlightBookings(bookings, n)).toStrictEqual([10, 55, 45, 25, 25])
})
