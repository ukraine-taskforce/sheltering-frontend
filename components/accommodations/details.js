import { CalendarIcon, LocationMarkerIcon, UserIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid'

import LocationSearch from './location/search'
/* This example requires Tailwind CSS v2.0+ */
const result = {
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
};

export default function Details() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="px-6 py-6 whitespace-nowrap text-xl font-medium text-gray-900">
                            {result.name}
                        </div>
                        <div className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="py-2">
                                <CalendarIcon className="h-5 w-5 inline" />
                                <div className="px-3 inline">
                                    3 weeks
                                </div>
                            </div>
                            <div className="py-2">
                                <svg className="h-5 w-5 inline"svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z"/></svg>
                                <div className="px-3 inline">
                                    25
                                </div>
                            </div>
                            <div className="py-2">
                                <LocationMarkerIcon className="h-5 w-5 inline" />
                                <div className="px-3 inline">
                                    {result.address}
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-6">
                            <div className="whitespace-nowrap text-xl font-medium text-gray-900">
                                Description
                            </div>

                            <div className="py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                {result.description}
                            </div>
                        </div>
                    </div>

                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="bg-white">
                            <div className="px-6 py-6 whitespace-nowrap text-m font-medium text-gray-900">
                                Search for route
                                <LocationSearch />
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="whitespace-nowrap text-xl font-medium text-gray-900">
                            Contact
                        </div>
                        <div className="py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="py-2">
                                <UserIcon className="h-5 w-5 inline" />
                                <div className="px-3 inline">{result.owner}</div>
                            </div>
                            <div className="py-2">
                                <PhoneIcon className="h-5 w-5 inline" />
                                <div className="px-3 inline">{result.phone}</div>
                            </div>
                            <div className="py-2">
                                <MailIcon className="h-5 w-5 inline" />
                                <div className="px-3 inline">email@email.md</div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                        <button href="#" className="flex-auto text-white mx-7 px-4 py-3 rounded-[50px] bg-gray-900 hover:bg-gray-900 text-sm">
                            Call
                        </button>

                        <button href="#" className="flex-auto border-2 border-gray-900 mx-7 px-4 py-3 rounded-[50px] bg-white hover:bg-white text-sm">
                            Telegram
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
