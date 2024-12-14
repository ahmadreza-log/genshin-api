import { getReasonPhrase, getStatusCode } from 'http-status-codes'

interface ResponseInterface {
	data?: string[] | object
	status?: string
}

export const JsonResponse = ( options: ResponseInterface ) => {

	options.status = options.status || 'OK'

	const code   = getStatusCode( options.status )
	const status = getReasonPhrase( code )

	const body = {
		data:      options.data,
		status:    status,
		code:      code,
		timestamp: Date.now(),
	}

	return Response.json( body, {
		statusText: status,
		status:     code,
	} )
}