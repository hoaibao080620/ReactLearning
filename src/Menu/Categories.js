import React from 'react'

const Categories = ({categories,handleFilterItems,value}) => {
    return (
        <div className={'categories'}>
            <a className={`${value === 'all' && 'active'}`} onClick={(e) => handleFilterItems('all')}>All</a>
            {categories.map((c) => {
                return <a className={`${value === c && 'active'}`} onClick={(e) => handleFilterItems(c)} key={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</a>
            })}
        </div>
    )
}

export default Categories
