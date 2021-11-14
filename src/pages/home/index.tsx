import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { InformationCircleIcon } from '@heroicons/react/solid'
import * as nearAPI from "near-api-js";
import axios from 'axios';
const { connect, keyStores, WalletConnection } = nearAPI;

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
    //打开CONNECT
    const [PolkWallet,SetPolkWallet] = useState([{ id:"",
        value:'',
    },])
    const [EvmWallet,EvmWalletSet] = useState([{ id:"",
        value:'',
    },])
    const [NearWallet,NearWalletSet] = useState([{ id:"",
        value:'',
    },])
    const [SolWallet,SolWalletSet] = useState([{ id:"",
        value:'',
    },])
    let opacity=React.useRef()
    let opentu=React.useRef()
    const opens=()=>{
        const polkadot = async ()=> {
            const {
                web3Accounts,
                web3Enable,
            } = await import('@polkadot/extension-dapp');
            const extensions = await web3Enable('wangguanqi');
            if (extensions.length === 0) {
                return (
                  <div className="rounded-md bg-blue-50 p-4">
                      <div className="flex">
                          <div className="flex-shrink-0">
                              <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3 flex-1 md:flex md:justify-between">
                              <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
                              <p className="mt-3 text-sm md:mt-0 md:ml-6">
                                  <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                                      Details <span aria-hidden="true">&rarr;</span>
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
                );
            } else {
                const allAccounts = await web3Accounts();
                const extensions = await web3Enable('wangguanqi');
                if (allAccounts.length > 1) {
                    let info = []
                    for (let i = 0;i<allAccounts.length;i++){
                        info.push(
                          {
                              id:i.toString(),
                              value:allAccounts[i].address
                          }
                        )
                    }
                    SetPolkWallet(info)
                }else {
                    const info = [{
                        id:"1",
                        value:allAccounts[0].address
                    }]
                    SetPolkWallet(info)
                }
                // @ts-ignore
                opentu.current.style.display="block"
                // @ts-ignore
                opacity.current.style.opacity="0.25"
                // @ts-ignore
                opacity.current.style.zIndex= "40"
                if (state1===false){
                    (hidden1 as any).current.style.display="none"
                };
                if (state2===false){
                    (hidden2 as any).current.style.display="none"
                };
                if (state3===false){
                    (hidden3 as any).current.style.display="none"
                };
            }
        }
        polkadot()


    }





    const shut=()=>{
        // @ts-ignore
        opentu.current.style.display='none'
            // @ts-ignore
        opacity.current.style.opacity="0"
        // @ts-ignore
        opacity.current.style.zIndex= "0"

    }
    const body=()=>{
        // @ts-ignore
        opentu.current.style.display='none'
            // @ts-ignore
        opacity.current.style.opacity="0"
        // @ts-ignore
        opacity.current.style.zIndex= "0"
        setState1(false)
        setState2(false)
        setState3(false)

    }
    //多选框
    const [state1,setState1]=React.useState(false)
    let hidden1=React.useRef()
    const open1= async ()=> {
        // @ts-ignore
        if (typeof window.ethereum == 'undefined') {
            console.log('MetaMask is uninstalled!');
        }else {
            // @ts-ignore
            const { ethereum } = window;
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            const info = [
                { id:"1",
                    value:account,
                },
            ]
            EvmWalletSet(info)
            if (state1===false){
                // @ts-ignore
                setState1(true)
                // @ts-ignore
                hidden1.current.style.display="inline-flex"
            }else {
                setState1(false)
                // @ts-ignore
                hidden1.current.style.display="none"
            }
        };
    }
    const [state2,setState2]=React.useState(false)
    let hidden2=React.useRef()
    const open2=async ()=> {
        const keyStore = new keyStores.BrowserLocalStorageKeyStore();
        const config = {
            networkId: "testnet",
            keyStore, // optional if not signing transactions
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };
        const near = await connect(config);
        const wallet = new WalletConnection(near,"test1");
        if(wallet.isSignedIn()) {
            const walletAccountId = wallet.getAccountId();
            const info = [
                { id:"1",
                    value:walletAccountId,
                },
            ]
            NearWalletSet(info)
        }else {
                wallet.requestSignIn(
                  "example-contract.testnet", // contract requesting access
                  "test1", // optional
                  // "http://YOUR-URL.com/success", // optional
                  // "http://YOUR-URL.com/failure" // optional
                );
        }

        if (state2===false){
            setState2(true)
            // @ts-ignore
            hidden2.current.style.display="inline-flex"
        }else {
            setState2(false)
            // @ts-ignore
            hidden2.current.style.display="none"
        }
    };

    const [state3,setState3]=React.useState(false)
    let hidden3=React.useRef()
    const open3=()=> {
        if (state3===false){
            // @ts-ignore
            setState3(true)
            // @ts-ignore
            hidden3.current.style.display="inline-flex"
        }else {
            setState3(false)
            // @ts-ignore
            hidden3.current.style.display="none"
        }
    };


    function submit() {
        const all = [PolkWallet,EvmWallet,NearWallet]
        console.log(all);
        let data = {
            PolkWallet,
            EvmWallet,
            NearWallet
        }
        console.log(...all);
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            url: '/registered',
            data: JSON.stringify(data)
        }) .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
              console.log(error);
          });


    }

    return (

      <div className="min-h-screen">
        <header>
            <Popover  className="relative">
             <div className="flex  fixed z-20 inset-x-0 bg-black bg-opacity-0 md:bg-opacity-75 justify-between items-center p-5 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
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

                                   {navigation.map((item) => (
                                       <a key={item.name} href={item.href} className="text-base rounded-lg p-2 font-medium text-gray-50 hover:bg-blue-500">
                                           {item.name}
                                       </a>

                                   ))}
                               </Popover.Group>


                               <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                   <button onClick={opens} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-200 hover:bg-yellow-50 hover:text-black"
                                   >
                                       CONNECT

                                   </button>
                                   <a
                                       href="https://unity3d-test.vercel.app/"
                                       className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                   >
                                       PLAY
                                   </a>


                               </div>
                           </div>
                           {/*隐藏框*/}
                           <div   className=" flex justify-center ">
                               <div onClick={body} ref={opacity} className=" bg-gray-900 fixed  inset-0 opacity-0"></div>
                               <div ref={opentu} className=" fixed z-50  hidden max-w-md w-10/12 md:w-4/12 bg-gray-400 bg-yellow-100 rounded-lg  p-5 mt-24 ">
                                   <div className="flex justify-end font-bold py-2 md:text-2xl">
                                       <div className="bg-red-500 text-white p-1 rounded-lg w-12 text-4xl -mt-2 text-center ring-2 ring-pink-600 ring-offset-0">
                                           <button onClick={shut}>
                                               <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                                           </button>
                                       </div>
                                   </div>
                                   {/*地址下拉框*/}
                                   <div className="flex   md:justify-center mb-5">
                                       <select className="text-xs lg:text-sm mr-5 h-10 font-medium py-2 border w-32 cursor-pointer">
                                           {PolkWallet.map((item)=>(
                                               <option key={item.id}
                                                       value={item.value}>
                                                   {item.value}</option>
                                           ))}
                                       </select>
                                       {/*头部*/}

                                       <div className=" w-10">
                                           <img  src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                                       </div>
                                   </div>
                                   {/*表单*/}
                                   <form  className="text-sm" action="">
                                       {/*标签*/}
                                       {/*  one */}
                                           <div className=" justify-between bg-white rounded-lg px-2 min-w-full my-2">
                                               <div className="flex my-2  w-28  text-base overflow-hidden">
                                                   <input onChange={open1} className="my-auto cursor-pointer mr-2  "
                                                    checked={state1} type="checkbox" name="wallets"/>
                                                   <div  className="my-auto ">Metamask</div>
                                               </div>
                                               <div ref={hidden1} className=" hidden justify-between ">
                                                   <div className="flex my-auto">
                                                       <select className="my-2 text-xs lg:text-sm truncate py-1 border w-40  cursor-pointer  xl:w-56 overflow-hidden " >

                                                           {EvmWallet.map((item)=>(
                                                               <option className="overflow-ellipsis " key={item.id}
                                                                       value={item.value}>
                                                                   {item.value}</option>
                                                           ))}
                                                       </select>
                                                   </div>
                                                   <div className="  my-auto">
                                                       <img src='https://cdn.discordapp.com/attachments/876498266550853642/908668494827114506/2584b130780271c61b0e4e1aad3df7b.png' alt=""/>
                                                   </div>
                                               </div>
                                           </div>
                                       {/*two*/}
                                       <div className=" justify-between bg-white rounded-lg px-2 min-w-full my-2">
                                           <div className="flex my-2  w-28  text-base overflow-hidden">
                                               <input onChange={open2} className="my-auto cursor-pointer mr-2  "
                                                checked={state2}  type="checkbox" name="wallets"/>
                                               <div className="my-auto ">Near</div>
                                           </div>
                                           <div ref={hidden2} className=" hidden ">
                                               <div className="flex my-auto">
                                                   <select className="my-2 text-xs lg:text-sm truncate py-1 border w-40  cursor-pointer  xl:w-56 overflow-hidden " >

                                                       {NearWallet.map((item)=>(
                                                           <option className="overflow-ellipsis " key={item.id}
                                                                   value={item.value}>
                                                               {item.value}</option>
                                                       ))}
                                                   </select>
                                               </div>
                                               <div className="my-auto">
                                                   <img src="https://cdn.discordapp.com/attachments/876498266550853642/908734585746120744/unknown.png" alt=""/>
                                               </div>
                                           </div>
                                       </div>
                                       {/*three*/}
                                       <div className=" justify-between bg-white rounded-lg px-2 min-w-full my-2">
                                           <div className="flex my-2  w-28  text-base overflow-hidden">
                                               <input onChange={open3}  className="my-auto cursor-pointer mr-2  "
                                                      checked={state3} type="checkbox" name="wallets"/>
                                               <div className="my-auto ">Solana</div>
                                           </div>
                                           <div ref={hidden3} className=" hidden ">
                                               <div className="flex my-auto">
                                                   <select className="my-2 text-xs lg:text-sm truncate py-1 border w-40  cursor-pointer  xl:w-56 overflow-hidden " >

                                                       {EvmWallet.map((item)=>(
                                                           <option className="overflow-ellipsis " key={item.id}
                                                                   value={item.value}>
                                                               {item.value}</option>
                                                       ))}
                                                   </select>
                                               </div>
                                               <div className="my-auto">
                                                   <img src="https://cdn.discordapp.com/attachments/876498266550853642/908665158853885992/adf074f91f095a623e572f006d6e8d0.png" alt=""/>
                                               </div>
                                           </div>
                                       </div>


                                       <div className="flex justify-between text-sm mt-8">
                                           <div></div>
                                           <button onClick={submit}
                                                   className="text-lg p-1 rounded-lg bg-green-200 ring-2 ring-white ring-offset-0 cursor-pointer">
                                               Submit
                                           </button>
                                           <button onClick={shut}
                                                   className="text-lg p-1 rounded-lg bg-green-200 ring-2 ring-white ring-offset-0">
                                               Cancel
                                           </button>

                                           <div></div>
                                       </div>
                                   </form>

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
                                   className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                                               <p className="mt-6  text-center text-sm font-medium text-gray-500">
                                                   <button onClick={opens} className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-200 hover:bg-yellow-50 hover:text-black"
                                                   >
                                                       CONNECT
                                                   </button>
                                               </p>
                                               <p className="mt-2 text-center text-base font-medium text-gray-500">
                                                   <a href="https://unity3d-test.vercel.app/" className=" whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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

                           <div  className="relative"  >
                               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"  />
                               <div className="">
                                   <div className="relative shadow-xl  sm:overflow-hidden" >
                                       <div className="absolute inset-0">
                                           <img
                                               className="h-full w-full w-auto h-auto object-cover"
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
                                                   className="h-full w-full w-auto h-auto object-cover"
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

