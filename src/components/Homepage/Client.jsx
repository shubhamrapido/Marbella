import React from 'react'
import Client_1 from '../../assets/Images/Client_1.jpg'
import Client_2 from '../../assets/Images/Client_2.jpg'
import Client_3 from '../../assets/Images/Client_3.jpg'
import Client_4 from '../../assets/Images/Client_4.jpg'
import Client_5 from '../../assets/Images/Client_5.jpg'
import Client_6 from '../../assets/Images/Client_6.png'

const clients = [
  {
    image: Client_1,
    title: "Sintered Stone - Neolith",
    description: "Ultra-compact surfaces with superior performance",
    link: "#",
    linkText: "Explore Neolith →"
  },
  {
    image: Client_2,
    title: "Sintered Stone - XTone",
    description: "Large format sintered stone slabs",
    link: "#",
    linkText: "Explore XTone →"
  },
  {
    image: Client_3,
    title: "Quartz - Caesarstone",
    description: "Premium engineered quartz surfaces",
    link: "#",
    linkText: "Explore Caesarstone →"
  },
  {
    image: Client_4,
    title: "Natural Stone - MarbleX",
    description: "Elegance of natural marble for interiors",
    link: "#",
    linkText: "Explore MarbleX →"
  },
  {
    image: Client_5,
    title: "Granite Surfaces - RockMax",
    description: "Durable granite for countertops and facades",
    link: "#",
    linkText: "Explore RockMax →"
  },
  {
    image: Client_6,
    title: "Quartzite - StoneEra",
    description: "Quartzite slabs with natural beauty and strength",
    link: "#",
    linkText: "Explore StoneEra →"
  }
]

const Client = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Engineered Stones Collection</h2>
      <p className="text-center text-gray-600 mb-10">Official distributor of premium engineered surfaces</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {clients.map((client, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300">
            <img src={client.image} alt={client.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{client.title}</h3>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <a href={client.link} className="text-orange-500 font-medium hover:underline">{client.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Client
