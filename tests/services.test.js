const createError = require('http-errors')
const getServices = require('../controllers/services.controller')
const Services = require('../models/services.model')
const httpMocks = require('node-mocks-http')

jest.mock('../models/services.model')

describe('Services API endpoint', () => {
  it('throws 404 error and returns 404 status code', async () => {
    Services.find.mockReturnValueOnce("")

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getServices(req, res, next)

    expect(next).toHaveBeenCalledWith(createError(404, 'No available services.'))
    expect(res._getData()).toEqual("")
  })

  it('returns the correct document with 200 status code', async () => {
    const resp = {
      name: "Normal cut",
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      amount: 5000
    }

    Services.find.mockReturnValueOnce(resp)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getServices(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res._getData()).toEqual(resp)
  })
})
