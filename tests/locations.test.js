const createError = require('http-errors');
const getLocations = require('../controllers/locations.controller')
const Locations = require('../models/locations.model')
const httpMocks = require('node-mocks-http')

jest.mock('../models/locations.model')

describe('Locations API endpoint', () => {
  it('throws 404 error and returns 404 status code', async () => {
    Locations.find.mockResolvedValue(null)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getLocations(req, res, next)

    expect(next).toHaveBeenCalledWith(createError(404, 'No available locations.'))
    expect(res.statusCode).toBe(404)
    expect(res._getData()).toEqual("")
  })

  it('returns the correct document with 200 status code', async () => {
    const resp = {
      address: "Budapest, Lovasi tér 2, 1137",
      phoneNumber: "+36/1-555-****",
      mondayToThursday: "8:00 - 16:00",
      friday: "7:00 - 14:00",
      saturdayToSunday: "Closed"
    }

    Locations.find.mockReturnValueOnce(resp)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getLocations(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res._getData()).toEqual(resp)
  })
})
