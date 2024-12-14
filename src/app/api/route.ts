import { JsonResponse } from '@/utils/JsonResponse'

export async function GET() {
	const base = '/api/'

	const endpoints: string[] = [
		'artifacts',
		'bosses',
		'characters',
		'consumables',
		'domains',
		'elements',
		'enemies',
		'materials',
		'nations',
		'weapons',
	]

	return JsonResponse( {
		data: endpoints.map( endpoint => base + endpoint ),
	} )
}