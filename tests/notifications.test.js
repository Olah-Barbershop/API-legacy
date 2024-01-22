const createError = require('http-errors');
const getNotifications = require('../controllers/notifications.controller')
const Notifications = require('../models/notifications.model')
const httpMocks = require('node-mocks-http')

jest.mock('../models/notifications.model')

describe('Notifications API endpoint', () => {
  it('throws 404 error and returns 404 status code', async () => {
    Notifications.find.mockResolvedValue(null)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getNotifications(req, res, next)

    expect(next).toHaveBeenCalledWith(createError(404, 'No available notifications.'))
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

    Notifications.find.mockReturnValueOnce(resp)

    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    const next = jest.fn()

    await getNotifications(req, res, next)

    expect(res.statusCode).toBe(200)
    expect(res._getData()).toEqual(resp)
  })
})

