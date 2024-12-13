import {
	megaMenu1_en,
	megaMenu2_en,
	megaMenu3_en,
	megaMenu4_en,
	megaMenu5_en,
	megaMenu6_en,
	megaMenu7_en,
} from './data/mega-menu/mega-menu-dropdowns--english';
import {
	megaMenu1_es,
	megaMenu2_es,
	megaMenu3_es,
	megaMenu4_es,
	megaMenu5_es,
	megaMenu6_es,
} from './data/mega-menu/mega-menu-dropdowns--spanish';

export class MockMegaMenuAdapter {
	async getMegaMenuContent(id){
		const template = document.createElement('template');
		switch (id) {
			case 'en_menu1':
				template.innerHTML = megaMenu1_en;
				break;
			case 'en_menu2':
				template.innerHTML = megaMenu2_en;
				break;
			case 'en_menu3':
				template.innerHTML = megaMenu3_en;
				break;
			case 'en_menu4':
				template.innerHTML = megaMenu4_en;
				break;
			case 'en_menu5':
				template.innerHTML = megaMenu5_en;
				break;
			case 'en_menu6':
				template.innerHTML = megaMenu6_en;
				break;
			case 'en_menu7':
				template.innerHTML = megaMenu7_en;
				break;
			case 'es_menu1':
				template.innerHTML = megaMenu1_es;
				break;
			case 'es_menu2':
				template.innerHTML = megaMenu2_es;
				break;
			case 'es_menu3':
				template.innerHTML = megaMenu3_es;
				break;
			case 'es_menu4':
				template.innerHTML = megaMenu4_es;
				break;
			case 'es_menu5':
				template.innerHTML = megaMenu5_es;
				break;
			case 'es_menu6':
				template.innerHTML = megaMenu6_es;
				break;
		}
		return template.content.firstElementChild;
	}
}
