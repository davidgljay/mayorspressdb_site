'use strict';

import React from 'react';

require('styles/Cities.scss');

let CitiesComponent = (props) => (
  <div className="cities-component">
  	{props.cities.map(function(city) {
  		var selected = city.code == props.selected ? 'selected':'';
  		return <button title={city.full} className={selected + ' btn btn-default'}>{city.code}</button>
  	})}
  </div>
);

CitiesComponent.displayName = 'CitiesComponent';

// Uncomment properties you need
// CitiesComponent.propTypes = {};
CitiesComponent.defaultProps = {
	cities:[
		{code:'NYC', full:'New York City'},
		{code:'LAX', full:'Los Angeles'},
		{code:'CHI', full:'Chicago'},
		{code:'IAH', full:'Houston'},
		{code:'PHL', full:'Philadelphia'},
		{code:'PHX', full:'Pheonix'},
		{code:'SAT', full:'San Antonio'},
		{code:'SAN', full:'San Diego'},
		{code:'DFW', full:'Dallas'},
		{code:'SJC', full:'San Jose'}
	],
	selected:'NYC'
};

export default CitiesComponent;
