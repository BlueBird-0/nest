		import Lightbox from './js/photoswipe/photoswipe-lightbox.esm.js';
		import PhotoSwipeDynamicCaption from './js/photoswipe/photoswipe-dynamic-caption-plugin.esm.js';
		const lightbox = new Lightbox({
		  gallery: '#gallery--getting-started',
		  children: 'a',
		  pswpModule: () => import('./js/photoswipe/photoswipe.esm.js'),
		  paddingFn: (viewportSize) => {
			return {
				top: 30, bottom:30, left: 70, right:70
			}
		  },
		});

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			type: 'auto',
		});

		lightbox.init();