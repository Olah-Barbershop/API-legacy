const createError = require('http-errors');
const getContactInfo = require('../controllers/contactinfo.controller')
const ContactInfo = require('../models/contactinfo.model')
const httpMocks = require('node-mocks-http')

jest.mock('../models/contactinfo.model')

describe('Contacts API endpoint', () => {
  it('throws 404 error and returns 404 status code', async () => {
    ContactInfo.find.mockResolvedValue(null)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getContactInfo(req, res, next)

    expect(next).toHaveBeenCalledWith(createError(404, 'No available contact.'))
    expect(res.statusCode).toBe(404)
    expect(res._getData()).toEqual("")
  })

  it('returns an object', async () => {
    const resp = {
      left: {
        name: "something",
        link: "https://example.com"
      },
      right: {
        name: "something",
        link: "https://example.com"
      }
    }

    ContactInfo.find.mockResolvedValue(resp)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getContactInfo(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res._getData()).toEqual(resp)
  })
})

