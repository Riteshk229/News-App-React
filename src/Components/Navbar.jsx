import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                  <span className="font-sans font-bold text-xl">News App</span>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-center   sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only text-white-900">News App</span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX6+/1APjz///+2trYyMC07OjgpKCU9PDosKyj9//83NTMzMS85NzU/Pz35+vwmJSKrq6ve3t/v8PGgoKDo6OnHx8dFRELW1te9vb6Xl5eOjo1mZWRycnGFhYSsrKwjIh9QT05cW1p/f35ubWycnJzFxcVhYF9MTErY2dl6eXhWVVTP0NCKiomS7afsAAAK2UlEQVR4nOWdeX+qOhCGMSIQFqmIe1u7ni72+3++C2qPG4Fk5g1w733/OOdXJMM8Zg/J6IgWJIVwThqPD/+38eRClp/j6MiyC7YMSy24k6QtR+wQGtJZzUy8VSKdNUqsRSadFUqgNRAemhFly7RhaQ8SYwiOB4REWLHEB2Jk28AXTzAj14JlPgAjK73t/PsVa7zDIWyJr1QnhM64RUIGIzllq3gcRGLC1vnojKRknfBRGSmJOgMkIZqn6ZCPxGiaoq0uUC3TztGQsGu8vWwSds12lFE2GhHy3Dr5Jbll3RIhA65InS2Wd6v1w8PDevW4/My435cNQjqe/Lz7Gm0DNwrDOI7DMHKD7eDrccJqt/CEZEd2P4kXxcngUn4cefP1gpGTaEKiF9k0CUJ/UC0/9ObTjMwIJSS6kD9sI/86986V+FG6zu0y2iMU2U8a19D9KvTW5HxEEVKeLcVdEA7q8u9vPg7CaGgRUeMe0pPzb1eD7lfBH2pRRRCSnvvojQwAB4ORt7SF2HgH6alfnhFfKe/BEmLTDYRHyuw7MgYcDKI/xIUfHiEFME90mtBbhR8ZbYzDISQBhmZV8KSRbwMRTVgAqoYwGoiDrGVCwsPGc2oOloqfaHWRSkh4lHym1cGjknBDa1FphJQHPVBa0XO5azSi+iPKY5apzjitNhfTGbi1UX5CeUpu3tHfyHdprY0aBJmFG1YlPCp+xZZT1QeENk0MA24ZLZWk79ByqrhOecI4APAV8hMSoAqx+jLJ/irEEA6iO+QgHEeYgbKwyMQIOQavvEqyvgoRtbBUEk2BmVh1kWR8bDKnb1IIXNVAEcpHJKG7JK4V6xHSTH/TpxS3GhGHp1WIt5dIhuXEQ9XCUomXEwkreEBZOOUOuS8VPVJfaTQTEu1CCymnmN4CQQCdDDDmvpBH349khVAukS1pqYA4iWokpBpdo0Zsvwqpnf4NIojwD2d1pkqje8r0ppmQalNGyL6ilD9ivAVXE5KLfp6CAQeDlDjVLyWVhGSLC9i84q+8Cegl//kfZJPyHd2UFo3pjkEoFYR0g0M8IXnwvReaUNxhx2yl6O+F1YQMe+BRaSn3kbWl6P9JyDFng3DI2/yGJZSPFghZLU0VIceaHFogJK4L3yBiCGcW+sNFnwgd7BpGKcY6xlHyipBnLcOPSz0m4N9MxBCKAXYRo5hbfLC3XF8Sco3do+eH8Qt/UzmUcIqe40e8Dh9OKHfo6ZP3yQaEEmLfWpSKAUdXzgn5xu4RL7jPAAHV8IgIIkTPEAPuiAZOCO4RE+o70kudCBHGvpDFNKZuNr32Ckgod8h1/fQTc0YOSeiID9ywZvQMOkOGJVxCdtOUShgvLa69OhCCjM1Rmeh/w44BQgnlO2pc43GWSi8FJXTEN2b4Td3YVunTnhD1hcnJFkK4zXGHjeWeEGZOrACvoJKAuuer2icooSOe2I1NAuspji5hCWXOLqd+wHirViEwYbkNmkm43WEPjJeE0BgCYsXrMjxoJXQOhGCLL5xpVEDcqV/nEJqwmAvT178DyLz3yh84YYFIzUUbgDYIHfFAq4sevog6dggdMSW0qP4W3cgcnbFB6IiZ4SHZYjDqgruJv744VgLOiOzZrKQGG3rkgQZXrORhafjO01+4iQPACrfKEVuEjshfU72iOkq/bGWgZYnFs0Z1jL3N57+TzyknZ7vXbe0pDD/c3i96EHvKVKfBvBT5KlYFN/HDIHnLT3zQOYBNFRXw7SxMkhC71YfnhqOzICeJPwpd72l1Hp5GOqt/R3WU8s2L3e/zqiWFyJer1yRNvcB13cBL0/n923tWrp/8XbwXuw83Dqb9L7FiMXf3zePLZX6U2wacfLKbzWa7SV4uEF2giPwrLYuy+2Sh1YHG6JTr9Fjn4nRVUeZkqZurIlunxzBL/vYNjAjlE/nT2cwpCta5RqErGqOf4PSOPHGf6TGHbEssL7r4ZBBuX9/r1xCkGC8328vBz8h77ymiWKfXMYWSURA+zMbVS7JF1czeX6LgZlCQpKteIo431RPfOAg2010ZgU7sK2H5b/lHNnvbBG712DW4h3oGsSKzuXqgXXR+2/j1Zzp83y0Wi937cPqzCbduTQyU8IkY5aRKEEI5ietHoEmBGRV9YSnXjYq761fH4wFwaR8g8RnAd31Fkx5VRrHw0IBl9Ij+IIoFPAePiD0pqHJiBbAsqP2oi6ywSbVK/AGwRaUrg72+v9WIGFQJKmbYpAaFiBfePBPiBb9L/1zUoErnfKySLu7wx/IulbKOPznc1US5wOxNqNOW2WfwCLPYXivzK3/Oa21YhOL1JgAyXkn4xTvixSC0XwkP8ngnEemEEhG7TEus7RkMQtQmr2bF9CAZe0JqrI+Wyuig3CZFL6eM/TR5a4CMOHwcwqIdbY9wEJL3MJAJ5aytZuaglHoakU5ocUZRpRF12zB1B624wx8arRexsZFUQvgxp0b5MQWQvAsaGF9PV4lLCslDJbRwKLZZLmUETjxvgY+ZpKOI8t6NRihxUS5N5Idj4x6DeGYGF6jUTK75xjciYfsN6VHm50pp5w9tBKPRk2vaJxJPWIqk3eHMScbnoWiEctZJO7OXZzg6pZ3lbndScanYcMmGRtja2kWVzNYzaOfx8dETTGQWaeGCUDsh7hwlRf6TSX0iEcoFPBKNiZLUYAWcRtjNkPSk0GBwekWo+dWIrnr7o/y5NuF1jCG9hPgYJqbytE/qCxJh14W0aE21J8I3hFoJu21JS2m3poJGOOmyuz8o1YwBVkGogdjdtOIkzZiYgki4aetljFqaY9NKwuZGatx9IS1miTqEopKwMWXRV3Q5oDkoCXT6CwVhE2K3o+5f6fyogCqOcCNhD6phURHvm4upUBE2fTldD2j28geNeaiO593w5fSgNyzVHBVTqAlrEW1E7aaoMdK3oBIKC7F0KWqMv1tLWIdoIx4yRU1LGddE/zlC0UBYk7gPo9JSUX0c7EZCNSL+p1Zoqo91JjmEFn7jgSJvYpKFRr/ZhfqBQ6Zq3+hX4NxeUiKKP6PuR97lL9CYABoRyl40NbUB9zUJlYid7FC4Vt1vXVXCVF1UfUnYIKU0hT81baE2ocqGnHSfiXUrUdUslVdViOKh6zlwVHOCVoFSfVlVTse2Djlpyp+rc7CyjCoJVbkod92W05rTFwpA41+tFo9dIm6XpmW0hlCJOGX/fjodsGZWoeZQfqLOxW03ddGn5GAtoRJxMepk5968JiqIqhI2ECoMjuX4J22bMfRWjlSOZmoh6j5Uj8HzBy9qb3wTu8FPXTyQeobaT2vKfTa8d9PAjSLXpgrzQereD8e1yytWCPd289lyaFvLXd60VM0ibFgjLoN4SKsSFRF7jAAbCXsT10CpRoCmG/qO2Ox/4x39RtRwv/mWPiPqeK9xT28RdXzXI+wpo6brerf1EVHXc837+oeo7bjujX1D1Pdb+85+IRq4rX9rjxhrpoM8wr4gmvlsdHc/EA1dNru9BxFUTUoohbDzbDT31zhFp4wUbwlpukMkOUtJ1BEj0VVasg4QiY6SCVtnpPtJTtkqI8dLRtrWOkfTLhBH2A4jz0MuoX1GVv5BCIXV+ojwDmDDGiPGN4gVYQES5hjKkIBCIr0C2hIgSLBLWHP8tpXddl4LTniw2ovcO/piw+jBcvdwBz+sWT6Y7xTu4IJd8wfJX9Lx2b8FGbzOVekfi5vb8zs502cAAAAASUVORK5CYII="
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Home Page
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/register"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign Up
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
