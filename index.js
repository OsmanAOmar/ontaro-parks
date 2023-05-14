#!/usr/bin/env node

// JSON.stringify([...document.querySelector('#parksDropdown').parentNode.querySelector('ul').querySelectorAll('a')].map(park => ({name:park.innerText,href:park.href})))
const parks = [{"name":"Aaron","href":"https://www.ontarioparks.com/park/aaron"},{"name":"Algonquin","href":"https://www.ontarioparks.com/park/algonquin"},{"name":"Arrowhead","href":"https://www.ontarioparks.com/park/arrowhead"},{"name":"Arrow Lake","href":"https://www.ontarioparks.com/park/arrowlake"},{"name":"Awenda","href":"https://www.ontarioparks.com/park/awenda"},{"name":"Balsam Lake","href":"https://www.ontarioparks.com/park/balsamlake"},{"name":"Bass Lake","href":"https://www.ontarioparks.com/park/basslake"},{"name":"Batchawana Bay","href":"https://www.ontarioparks.com/park/batchawanabay"},{"name":"Biscotasi Lake","href":"https://www.ontarioparks.com/park/biscotasilake"},{"name":"Blue Lake","href":"https://www.ontarioparks.com/park/bluelake"},{"name":"Bon Echo","href":"https://www.ontarioparks.com/park/bonecho"},{"name":"Bonnechere","href":"https://www.ontarioparks.com/park/bonnechere"},{"name":"Bronte Creek","href":"https://www.ontarioparks.com/park/brontecreek"},{"name":"Caliper Lake","href":"https://www.ontarioparks.com/park/caliperlake"},{"name":"Charleston Lake","href":"https://www.ontarioparks.com/park/charlestonlake"},{"name":"Chutes","href":"https://www.ontarioparks.com/park/chutes"},{"name":"Craigleith","href":"https://www.ontarioparks.com/park/craigleith"},{"name":"Darlington","href":"https://www.ontarioparks.com/park/darlington"},{"name":"Driftwood","href":"https://www.ontarioparks.com/park/driftwood"},{"name":"Earl Rowe","href":"https://www.ontarioparks.com/park/earlrowe"},{"name":"Emily","href":"https://www.ontarioparks.com/park/emily"},{"name":"Esker Lakes","href":"https://www.ontarioparks.com/park/eskerlakes"},{"name":"Fairbank","href":"https://www.ontarioparks.com/park/fairbank"},{"name":"Ferris","href":"https://www.ontarioparks.com/park/ferris"},{"name":"Finlayson Point","href":"https://www.ontarioparks.com/park/finlaysonpoint"},{"name":"Fitzroy","href":"https://www.ontarioparks.com/park/fitzroy"},{"name":"Forks of the Credit","href":"https://www.ontarioparks.com/park/forksofthecredit"},{"name":"French River","href":"https://www.ontarioparks.com/park/frenchriver"},{"name":"Frontenac","href":"https://www.ontarioparks.com/park/frontenac"},{"name":"Fushimi Lake","href":"https://www.ontarioparks.com/park/fushimilake"},{"name":"Grundy Lake","href":"https://www.ontarioparks.com/park/grundylake"},{"name":"Halfway Lake","href":"https://www.ontarioparks.com/park/halfwaylake"},{"name":"Inverhuron","href":"https://www.ontarioparks.com/park/inverhuron"},{"name":"Ivanhoe Lake","href":"https://www.ontarioparks.com/park/ivanhoelake"},{"name":"John E. Pearce","href":"https://www.ontarioparks.com/park/johnepearce"},{"name":"Kakabeka Falls","href":"https://www.ontarioparks.com/park/kakabekafalls"},{"name":"Kap-Kig-Iwan","href":"https://www.ontarioparks.com/park/kapkigiwan"},{"name":"Kawartha Highlands","href":"https://www.ontarioparks.com/park/kawarthahighlands"},{"name":"Kettle Lakes","href":"https://www.ontarioparks.com/park/kettlelakes"},{"name":"Killarney","href":"https://www.ontarioparks.com/park/killarney"},{"name":"Killbear","href":"https://www.ontarioparks.com/park/killbear"},{"name":"Komoka","href":"https://www.ontarioparks.com/park/komoka"},{"name":"Lady Evelyn-Smoothwater","href":"https://www.ontarioparks.com/park/ladyevelynsmoothwater"},{"name":"Lake on the Mountain","href":"https://www.ontarioparks.com/park/lakeonthemountain"},{"name":"Lake St. Peter","href":"https://www.ontarioparks.com/park/lakestpeter"},{"name":"Lake Superior","href":"https://www.ontarioparks.com/park/lakesuperior"},{"name":"Long Point","href":"https://www.ontarioparks.com/park/longpoint"},{"name":"MacGregor Point","href":"https://www.ontarioparks.com/park/macgregorpoint"},{"name":"MacLeod","href":"https://www.ontarioparks.com/park/macleod"},{"name":"Makobe-Grays River","href":"https://www.ontarioparks.com/park/makobegraysriver"},{"name":"Mara","href":"https://www.ontarioparks.com/park/mara"},{"name":"Mark S. Burnham","href":"https://www.ontarioparks.com/park/marksburnham"},{"name":"Marten River","href":"https://www.ontarioparks.com/park/martenriver"},{"name":"McRae Point","href":"https://www.ontarioparks.com/park/mcraepoint"},{"name":"Mikisew","href":"https://www.ontarioparks.com/park/mikisew"},{"name":"Misery Bay","href":"https://www.ontarioparks.com/park/miserybay"},{"name":"Missinaibi","href":"https://www.ontarioparks.com/park/missinaibi"},{"name":"Mississagi","href":"https://www.ontarioparks.com/park/mississagi"},{"name":"Mono Cliffs","href":"https://www.ontarioparks.com/park/monocliffs"},{"name":"Murphys Point","href":"https://www.ontarioparks.com/park/murphyspoint"},{"name":"Nagagamisis","href":"https://www.ontarioparks.com/park/nagagamisis"},{"name":"Neys","href":"https://www.ontarioparks.com/park/neys"},{"name":"North Beach","href":"https://www.ontarioparks.com/park/northbeach"},{"name":"Oastler Lake","href":"https://www.ontarioparks.com/park/oastlerlake"},{"name":"Obabika River","href":"https://www.ontarioparks.com/park/obabikariver"},{"name":"Ojibway","href":"https://www.ontarioparks.com/park/ojibway"},{"name":"Ouimet Canyon","href":"https://www.ontarioparks.com/park/ouimetcanyon"},{"name":"Oxtongue River - Ragged Falls","href":"https://www.ontarioparks.com/park/oxtongueriverraggedfalls"},{"name":"Pakwash","href":"https://www.ontarioparks.com/park/pakwash"},{"name":"Pancake Bay","href":"https://www.ontarioparks.com/park/pancakebay"},{"name":"Petroglyphs","href":"https://www.ontarioparks.com/park/petroglyphs"},{"name":"Pigeon River","href":"https://www.ontarioparks.com/park/pigeonriver"},{"name":"Pinery","href":"https://www.ontarioparks.com/park/pinery"},{"name":"Point Farms","href":"https://www.ontarioparks.com/park/pointfarms"},{"name":"Port Bruce","href":"https://www.ontarioparks.com/park/portbruce"},{"name":"Port Burwell","href":"https://www.ontarioparks.com/park/portburwell"},{"name":"Potholes","href":"https://www.ontarioparks.com/park/potholes"},{"name":"Presqu'ile","href":"https://www.ontarioparks.com/park/presquile"},{"name":"Quetico","href":"https://www.ontarioparks.com/park/quetico"},{"name":"Rainbow Falls","href":"https://www.ontarioparks.com/park/rainbowfalls"},{"name":"René Brunelle","href":"https://www.ontarioparks.com/park/renebrunelle"},{"name":"Restoule","href":"https://www.ontarioparks.com/park/restoule"},{"name":"Rideau River","href":"https://www.ontarioparks.com/park/rideauriver"},{"name":"Rock Point","href":"https://www.ontarioparks.com/park/rockpoint"},{"name":"Rondeau","href":"https://www.ontarioparks.com/park/rondeau"},{"name":"Rushing River","href":"https://www.ontarioparks.com/park/rushingriver"},{"name":"Samuel de Champlain","href":"https://www.ontarioparks.com/park/samueldechamplain"},{"name":"Sandbanks","href":"https://www.ontarioparks.com/park/sandbanks"},{"name":"Sandbar Lake","href":"https://www.ontarioparks.com/park/sandbarlake"},{"name":"Sauble Falls","href":"https://www.ontarioparks.com/park/saublefalls"},{"name":"Selkirk","href":"https://www.ontarioparks.com/park/selkirk"},{"name":"Sharbot Lake","href":"https://www.ontarioparks.com/park/sharbotlake"},{"name":"Sibbald Point","href":"https://www.ontarioparks.com/park/sibbaldpoint"},{"name":"Silent Lake","href":"https://www.ontarioparks.com/park/silentlake"},{"name":"Silver Falls","href":"https://www.ontarioparks.com/park/silverfalls"},{"name":"Silver Lake","href":"https://www.ontarioparks.com/park/silverlake"},{"name":"Sioux Narrows","href":"https://www.ontarioparks.com/park/siouxnarrows"},{"name":"Six Mile Lake","href":"https://www.ontarioparks.com/park/sixmilelake"},{"name":"Sleeping Giant","href":"https://www.ontarioparks.com/park/sleepinggiant"},{"name":"Solace","href":"https://www.ontarioparks.com/park/solace"},{"name":"Spanish River","href":"https://www.ontarioparks.com/park/spanishriver"},{"name":"Springwater","href":"https://www.ontarioparks.com/park/springwater"},{"name":"Sturgeon Bay","href":"https://www.ontarioparks.com/park/sturgeonbay"},{"name":"Sturgeon River","href":"https://www.ontarioparks.com/park/sturgeonriver"},{"name":"The Massasauga","href":"https://www.ontarioparks.com/park/themassasauga"},{"name":"Tidewater","href":"https://www.ontarioparks.com/park/tidewater"},{"name":"Turkey Point","href":"https://www.ontarioparks.com/park/turkeypoint"},{"name":"Voyageur","href":"https://www.ontarioparks.com/park/voyageur"},{"name":"Wabakimi","href":"https://www.ontarioparks.com/park/wabakimi"},{"name":"Wakami Lake","href":"https://www.ontarioparks.com/park/wakamilake"},{"name":"Wasaga Beach","href":"https://www.ontarioparks.com/park/wasagabeach"},{"name":"Wheatley","href":"https://www.ontarioparks.com/park/wheatley"},{"name":"White Lake","href":"https://www.ontarioparks.com/park/whitelake"},{"name":"Windy Lake","href":"https://www.ontarioparks.com/park/windylake"},{"name":"Woodland Caribou","href":"https://www.ontarioparks.com/park/woodlandcaribou"}];

import fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

const baseUrl = "/images/svg/icons/";

function ucwords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function strtolower (str) {
    return (str+'').toLowerCase();
}

(async () => {
	// fetch all parks html
	// parks.map(async (park, index) => {
	// 	const res = await fetch(park.href);
	// 	const body = await res.text();
	// 	fs.writeFileSync(`cache/${park.name}.html`, body);
	// });

	fs.writeFileSync('good_guy_osman.json', JSON.stringify(
		parks.map((park, index) => {
			const body = fs.readFileSync(`cache/${park.name}.html`);
			const root = parse(body);
			return {
				park: park,
				facilities: [...root
						.querySelector('div.mt-3')
						.querySelectorAll('.park-icon')
					].map(icon => ({
						name: ucwords(icon.attributes.src.replace(baseUrl, '')
							.replace('.svg', '')
							.replace('_inactive', '')
							.replaceAll('_', ' ')),
						available: !icon.attributes.src.includes('_inactive')
					})),
				activities: [...root
						.querySelector('.col-sm-6 .row:not(.mt-3)')
						.querySelectorAll('.park-icon')
					].map(icon => ({
						name: ucwords(icon.attributes.src.replace(baseUrl, '')
							.replace('.svg', '')
							.replace('_inactive', '')
							.replaceAll('_', ' ')),
						available: !icon.attributes.src.includes('_inactive')
					}))
			};
		}), false, 2
	));
})();
