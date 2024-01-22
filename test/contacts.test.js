const createError = require('http-errors');
const getContacts = require('../controllers/contacts.controller')
const Contacts = require('../models/contacts.model')
const httpMocks = require('node-mocks-http')

jest.mock('../models/contacts.model')

describe('Contacts API endpoint', () => {
  it('throws 404 error and returns 404 status code', async () => {
    Contacts.find.mockResolvedValue(null)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getContacts(req, res, next)

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

    Contacts.find.mockResolvedValue(resp)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getContacts(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res._getData()).toEqual(resp)
  })
})

