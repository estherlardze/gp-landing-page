import React from 'react'
import TeamCard from './TeamCard'
import {team1, team2, team3, team4} from '../../assets/index'

const Team = () => {
  return (
    <div className='mx-4 sm:mx-8 xl:mx-24 mt-12'>
      <div className="flex items-end justify-start gap-3 mb-2">
        <h3 className="text-black/50 font-semibold">TEAM</h3>
        <span className="w-[120px] h-[1px] mb-3 bg-yellow"></span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-2 mt-2">CHECK OUR TEAM</h1>

      <div className='flex flex-wrap mt-10 gap-5'>
        <TeamCard image={team1} name="Walter White" position="Chief Executive Officer"/>
        <TeamCard image={team2} name="Sarah Jhonson" position="Product Manager"/>
        <TeamCard image={team3} name="William Anderson" position="CTO"/>
        <TeamCard image={team4} name="Amanda Jepson" position="Accountant"/>
      </div>
    </div>
  )
}

export default Team
