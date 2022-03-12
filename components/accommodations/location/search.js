import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { SearchIcon } from '@heroicons/react/solid'
import { MapIcon } from '@heroicons/react/solid'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const locations = [
  { id: 1, name: 'Kherson', distance: 50 },
  { id: 2, name: 'Mariupol', distance: 60 },
  { id: 3, name: 'Kyiev', distance: 70 },
  { id: 4, name: 'Kharkiv', distance: 80 },
  { id: 5, name: 'Sumy', distance: 90 },
  { id: 6, name: 'Odessa', distance: 100 },
]

export default function LocationSearch() {
  const [selected, setSelected] = useState()
  const [query, setQuery] = useState('')

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter((location) =>
          location.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-100 h-50 py-6">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full text-left bg-white rounded-[30px] shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-5 pl-10 pr-5 text-sm leading-5 text-gray-900"
              displayValue={(location) => location ? location.name : 'Your location'}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon
                className="w-5 h-5 text-gray-900"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredLocations.length === 0 && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredLocations.map((location) => (
                  <Combobox.Option
                    key={location.id}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-white bg-teal-600' : 'text-gray-900'
                      }`
                    }
                    value={location}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {location.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div className="py-4">
        {selected ? (
          <>
            <div className="px-6 pt-6 pb-3 whitespace-nowrap text-m font-medium text-gray-900">
              Distance
            </div>
            <div className="px-2 py-1 text-m w-100">
              <MapIcon className="h-5 w-5 inline"/>
              <div className="px-3 inline">
                {selected.distance} Km
              </div>
              <div class="float-right">
                <button href="#" className="no-underline text-white px-4 py-3 rounded-[50px] bg-gray-900 hover:bg-gray-900 text-sm">
                    Open map
                    <ArrowNarrowRightIcon className="h-5 w-5 inline pl-2"/>
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
