/* This example requires Tailwind CSS v2.0+ */
const results = {
    took: 12,
    timed_out: false,
    _shards: {
        total: 5,
        successful: 5,
        skipped: 0,
        failed: 0
    },
    hits: {
        total: {
            value: 3,
            relation: "eq"
        },
        max_score: 0.2876821,
        hits: [
            {
                _index: "accommodations",
                _type: "_doc",
                _id: "JQr_W38BhJCZduURaJFN",
                _score: 0.2876821,
                _source: {
                    country: "moldova",
                    address: "Chisinau, Телецентре, ул. Друмул Виилор 38/1",
                    name: "Host in MD, Chisinau (40 Adults + 20 Kids)",
                    description: "Новый центр размещения беженцев на Телецентре",
                    phone: "+37369292917",
                    capacityAdults: 40,
                    occupancyAdults: 0,
                    capacityKids: 20,
                    occupancyKids: 0,
                    dataSource: "help2022.com",
                    dataSourceType: "private",
                    owner: "Telecentru",
                    ownerType: "Organization"
                }
            },
            {
                _index: "accommodations",
                _type: "_doc",
                _id: "Iwr_W38BhJCZduURaJFN",
                _score: 0.2876821,
                _source: {
                    country: "moldova",
                    address: "Криуляны, Район Криуляны",
                    name: "Host in MD, Криуляны (60 Взрослых + 10 Детей)",
                    description: "Теплые номера душ питание 3-х разовое. С животными берём",
                    phone: "+37376049914",
                    capacityAdults: 60,
                    occupancyAdults: 0,
                    capacityKids: 10,
                    occupancyKids: 0,
                    dataSource: "help2022.com",
                    dataSourceType: "private",
                    owner: "Razvan",
                    ownerType: "Person"
                }
            }
        ]
    }
};

export default function Results() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        What
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Adults
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Children
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Shelter Type
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">View</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.hits.hits.map((result, resultIdx) => (
                                    <tr key={result._id} className={resultIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">{result._source.name}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">{result._source.ownerType || '-'}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">{result._source.capacityAdults || '-'}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">{result._source.capacityKids || '-'}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={`/accommodations/${encodeURIComponent(result._id)}`} className="no-underline text-white px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-400">
                                                View accommodation
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
