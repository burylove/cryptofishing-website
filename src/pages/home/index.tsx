import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const lists = [
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/900033418979594280/1.jpg",
        title: 'PLAYLINK!',
        text:' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
        picture:'https://cdn.discordapp.com/attachments/882986018280726578/883177945320017920/chainlink.png',
        button:'Wechat',
        buttonurl:'#',
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/900033418979594280/1.jpg",
        title: 'Rare Degree!',
        text:' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
        picture:'https://cdn.discordapp.com/attachments/882986018280726578/883178197846470666/inch.png',
        button:'Opensea',
        buttonurl:'#',
    },



]
const toend=[
    {
        title:"EXPLPRE",
        h1:"Home",
        h1url:"#",
        h2:"Shop",
        h2url:"#",
        h3:"Gallery",
        h3url:"#"
    },
    {
        title:"RESOURCES",
        h1:"Opensea",
        h1url:"#",
        h2:"Medium",
        h2url:"#",
        h3:"Playerlink",
        h3url:"#"
    },{
        title:"COMMUNITY",
        h1:"Discord",
        h1url:"#",
        h2:"Twitter",
        h2url:"#",
        h3:"Instagram",
        h3url:"#"
    },
]

const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'SHOP', href: '#' },
    { name: 'GALLERY', href: '#' },
    { name: 'MY CARDS', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};



export default function Home() {
    // @ts-ignore
    return (
        <div className="min-h-screen">
            <header>
                <Popover className="relative">
                    <div className="flex  fixed z-40 inset-x-0 bg-black bg-opacity-0 md:bg-opacity-75 justify-between items-center p-5 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>

                        </div>

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10  ">
                            {/*<Popover className="relative">*/}
                            {/*    {({ open }) => (*/}
                            {/*        <>*/}
                            {/*            <Popover.Button*/}
                            {/*                className={classNames(*/}
                            {/*                    open ? 'text-gray-900' : 'text-gray-500',*/}
                            {/*                    'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'*/}
                            {/*                )}*/}
                            {/*            >*/}
                            {/*                <span>Solutions</span>*/}
                            {/*                <ChevronDownIcon*/}
                            {/*                    className={classNames(*/}
                            {/*                        open ? 'text-gray-600' : 'text-gray-400',*/}
                            {/*                        'ml-2 h-5 w-5 group-hover:text-gray-500'*/}
                            {/*                    )}*/}
                            {/*                    aria-hidden="true"*/}
                            {/*                />*/}
                            {/*            </Popover.Button>*/}

                            {/*            <Transition*/}
                            {/*                as={Fragment}*/}
                            {/*                enter="transition ease-out duration-200"*/}
                            {/*                enterFrom="opacity-0 translate-y-1"*/}
                            {/*                enterTo="opacity-100 translate-y-0"*/}
                            {/*                leave="transition ease-in duration-150"*/}
                            {/*                leaveFrom="opacity-100 translate-y-0"*/}
                            {/*                leaveTo="opacity-0 translate-y-1"*/}
                            {/*            >*/}
                            {/*                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">*/}
                            {/*                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
                            {/*                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">*/}
                            {/*                            {solutions.map((item) => (*/}
                            {/*                                <a*/}
                            {/*                                    key={item.name}*/}
                            {/*                                    href={item.href}*/}
                            {/*                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"*/}
                            {/*                                >*/}
                            {/*                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">*/}
                            {/*                                        <item.icon className="h-6 w-6" aria-hidden="true" />*/}
                            {/*                                    </div>*/}
                            {/*                                    <div className="ml-4">*/}
                            {/*                                        <p className="text-base font-medium text-gray-900">{item.name}</p>*/}
                            {/*                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>*/}
                            {/*                                    </div>*/}
                            {/*                                </a>*/}
                            {/*                            ))}*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </Popover.Panel>*/}
                            {/*            </Transition>*/}
                            {/*        </>*/}
                            {/*    )}*/}
                            {/*</Popover>*/}

                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-base rounded-lg p-2 font-medium text-gray-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="https://unity3d-test.vercel.app/"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                PLAY
                            </a>

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <a href="home">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt="Workflow"
                                            /></a>
                                        </div>

                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                    {/*<div className="mt-6">*/}
                                    {/*    <nav className="grid grid-cols-1 gap-7">*/}
                                    {/*        {solutions.map((item) => (*/}
                                    {/*            <a*/}
                                    {/*                key={item.name}*/}
                                    {/*                href={item.href}*/}
                                    {/*                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"*/}
                                    {/*            >*/}
                                    {/*                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">*/}
                                    {/*                    <item.icon className="h-6 w-6" aria-hidden="true" />*/}
                                    {/*                </div>*/}
                                    {/*                <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>*/}
                                    {/*            </a>*/}
                                    {/*        ))}*/}
                                    {/*    </nav>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="py-6 px-5 ">
                                        {navigation.map((item) => (
                                            <div   key={item.name} className="m-1   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a>  </div>
                                        ))}

                                    <div className="mt-6">

                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            <a href="https://unity3d-test.vercel.app/" className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                PLAY
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative"  >
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"  />
                        <div className="">
                            <div className="relative shadow-xl  sm:overflow-hidden" >
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full  object-cover"
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/900033418979594280/1.jpg"
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                                </div>
                                <div className="relative px-8 py-32  md:p-60">
                                    <div className="p-5">
                                    <h1 className="text-center  text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">

                                        <span className="block text-white">Take control of your</span>
                                        <span className="block text-indigo-200">customer support</span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                        amet fugiat veniam occaecat fugiat aliqua.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto  text-center sm:max-w-none  sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                <i className="fa fa-flickr"></i>JOIN DISCORD
                                            </a>

                                            <a
                                                href="#"
                                                className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                            >
                                                <i className="fa fa-twitter" ></i>FOLLOW TWITTER
                                            </a>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative"  >

                        <div  className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"  />
                        {lists.map((list)=>(
                        <div key={list.title} className="">
                            <div className="relative shadow-xl  sm:overflow-hidden " >
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={list.img}
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                                </div>
                                <div className="relative px-8 py-32 sm:px-40 md:px-80 ">
                                    <div className="  p-5 bg-gray-400 bg-opacity-25 rounded-lg  md:p-10   ">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl ">
                                        <span className="block text-white">{list.title}</span>
                                    </h1>
                                        <div className="mt-3 mb-3">
                                            <img className="mx-auto md:w-72 md:h-72 " src={list.picture}/>
                                        </div>
                                    <p className="mt-6  mx-auto text-center text-lg text-indigo-200  sm:max-w-3xl ">
                                        {list.text}
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto  text-center sm:max-w-none  sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0  sm:mx-auto sm:inline-grid  sm:gap-5">
                                            <a

                                                href={list.buttonurl}
                                                className="flex  bg-white items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700  hover:bg-indigo-50 sm:px-8"
                                            >
                                                {list.button}
                                            </a>

                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>

                    {/* Logo cloud */}
                    <div className="bg-gray-100 " >
                        <div className="pt-36 pb-36  sm:px-6 lg:px-8 bg-black">
                            <div className="md:flex md:justify-around">
                                {toend.map((ends)=>(
                                <div key={ends.title} className="">
                                <div className="mb-6">
                                <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                    {ends.title}
                                </h1>
                                <h2 className="">
                                    <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                        <a href={ends.h1url}>{ends.h1}</a></p>
                                    <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                        <a href={ends.h2url}>{ends.h2}</a></p>
                                    <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                        <a href={ends.h3url}>{ends.h3}</a></p>
                                </h2>
                            </div>
                                </div>))}
                            </div>
                            <p className=" text-center p-5 text-left mt-16 text-sm font-semibold uppercase text-gray-500 tracking-wide">
                            ©2021 CRYPTOFISHING, A PLAYERLINK COMPANY. All RIGHTS RESERVED.
                            </p>

                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
