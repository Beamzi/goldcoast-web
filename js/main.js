//Use this on host side to control component.
import { footerComponent } from '../node_modules/uiframeworklite/src/components/footer/footer.js'
import { headerComponent } from '../node_modules/uiframeworklite/src/components/header/header.js'

const header = document.querySelector('header-component');
const footer = document.querySelector('footer-component');



header.updateMenuData({
	imgPath: '../assets/images/Screenshot 2024-09-10 151334ss.png',
	homeLink: 'placeholder',
	aboutLink: 'placeholder',
	servicesLink: 'placeholder',
	instaLink: 'placeholder',
	fbLink: 'placeholder',
	twitterLink: 'placeholder',
	}
)

/* "This structure may look a little strange at first, 
but it's designed like a data sheet to clearly organize 
the content in the header and footer. The key names like item1__01 or link1__01 
aren’t random—they represent a structured, hierarchical dataset that’s mapped 
directly to sections on the page. This way, if I need to dynamically change any section, 
it’s really easy to reference and update the exact data point I want, without having 
to mess with reordering arrays or searching for specific items in nested structures. 
It's basically a spreadsheet in code—very readable and scalable. The naming convention 
makes it clear where each piece of content belongs, and this system is flexible enough 
to handle future additions." */

footer.updateListData({
	company: 'Huge Startup',
	list1__Heading: 'website design',
	item1__01: 'placeholder',
	item1__02: 'placeholder',
	item1__03: 'placeholder',
	item1__04: 'placeholder',
	item1__05: 'placeholder',
	item1__06: 'placeholder',
	item1__07: 'placeholder',
	item1__08: 'placeholder',
	item1__09: 'placeholder',
	item1__010: 'placeholder',

	link1__01: 'https://goldcoast-web.com.au/',
	link1__02: 'https://goldcoast-web.com.au/',
	link1__03: 'https://goldcoast-web.com.au/',
	link1__04: 'https://goldcoast-web.com.au/',
	link1__05: 'https://goldcoast-web.com.au/',
	link1__06: 'https://goldcoast-web.com.au/',
	link1__07: 'https://goldcoast-web.com.au/',
	link1__08: 'https://goldcoast-web.com.au/',
	link1__09: 'https://goldcoast-web.com.au/',
	link1__010: 'https://goldcoast-web.com.au/',

	list2__Heading: 'blog',
	item2__01: 'placeholder',
	item2__02: 'placeholder',
	item2__03: 'placeholder',
	item2__04: 'placeholder',
	item2__05: 'placeholder',
	item2__06: 'placeholder',
	item2__07: 'placeholder',
	item2__08: 'placeholder',
	item2__09: 'placeholder',
	item2__010: 'placeholder',

	link2__01: 'https://goldcoast-web.com.au/',
	link2__02: 'https://goldcoast-web.com.au/',
	link2__03: 'https://goldcoast-web.com.au/',
	link2__04: 'https://goldcoast-web.com.au/',
	link2__05: 'https://goldcoast-web.com.au/',
	link2__06: 'https://goldcoast-web.com.au/',
	link2__07: 'https://goldcoast-web.com.au/',
	link2__08: 'https://goldcoast-web.com.au/',
	link2__09: 'https://goldcoast-web.com.au/',
	link2__010: 'https://goldcoast-web.com.au/',

	list3__Heading: 'services',
	item3__01: 'placeholder',
	item3__02: 'placeholder',
	item3__03: 'placeholder',
	item3__04: 'placeholder',
	item3__05: 'placeholder',
	item3__06: 'placeholder',
	item3__07: 'placeholder',
	item3__08: 'placeholder',
	item3__09: 'placeholder',
	item3__010: 'placeholder',

	link3__01: 'https://goldcoast-web.com.au/',
	link3__02: 'https://goldcoast-web.com.au/',
	link3__03: 'https://goldcoast-web.com.au/',
	link3__04: 'https://goldcoast-web.com.au/',
	link3__05: 'https://goldcoast-web.com.au/',
	link3__06: 'https://goldcoast-web.com.au/',
	link3__07: 'https://goldcoast-web.com.au/',
	link3__08: 'https://goldcoast-web.com.au/',
	link3__09: 'https://goldcoast-web.com.au/',
	link3__010: 'https://goldcoast-web.com.au/',
	}
);



footer.listControl(3, 3, 3, true)



const deleteList = (num) => {

	const listContainer = document.querySelectorAll('.footer__list-container')
	listContainer.forEach((element, index) => {
		if (index + 1 === num){
			element.remove()
		}
		else {num = null 
			console.log(num) }
	});
};

deleteList(0);







