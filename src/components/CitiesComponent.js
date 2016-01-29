'use strict';

import React from 'react';

require('styles/Cities.scss');

let CitiesComponent = (props) => (
  <div className="cities-component">
  	{props.cities.map(function(city) {
  		var selected = city.key == props.selected ? 'selected':'';
  		return <button title={city.full} className={selected + ' btn btn-default'}>{city.key}</button>
  	})}
  </div>
);

CitiesComponent.displayName = 'CitiesComponent';

// Uncomment properties you need
// CitiesComponent.propTypes = {};
CitiesComponent.defaultProps = {
	cities:[
		{key:'NYC', full:'New York City'},
		{key:'LAX', full:'Los Angeles'},
		{key:'CHI', full:'Chicago'},
		{key:'IAH', full:'Houston'},
		{key:'PHL', full:'Philadelphia'},
		{key:'PHX', full:'Pheonix'},
		{key:'SAT', full:'San Antonio'},
		{key:'SAN', full:'San Diego'},
		{key:'DFW', full:'Dallas'},
		{key:'SJC', full:'San Jose'}
	],
	selected:'NYC'
};

export default CitiesComponent;
