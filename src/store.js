import { reactive } from "vue";

export const store = reactive({
navLinks: [
        {
            name: 'Home',
            href: '#',
            active: true,
        },
        {
            name: 'About us',
            href: '#',
            active: false,
        },
        {
            name: 'Feature',
            href: '#',
            active: false,
        },
        {
            name: 'Testimonials',
            href: '#',
            active: false,
        },
        {
            name: 'Contact US',
            href: '#',
            active: false,
        }
]

});