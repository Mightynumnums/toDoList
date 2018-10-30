import React from 'React'
import FilterLink from '../components/FilterLink'
import { VisibilityFilters } from '../actions'


const Footer = () => {
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} >ALL</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} >ACTIVE</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >COMPLETED</FilterLink>
  </div>
}


export default Footer